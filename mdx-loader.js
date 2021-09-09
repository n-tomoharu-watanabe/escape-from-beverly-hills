const { getOptions } = require('loader-utils')
const mdx = require('@mdx-js/mdx')

const DEFAULT_RENDERER = `
import React from 'react'
import { mdx } from '@mdx-js/react'
`

const replace = (text) => {
  return `(() => {\n${(
    text.replace(/export default/gm, "")
  )}\nreturn MDXContent\n})()`
}

const loader = async function (content) {
  const callback = this.async()
  const options = Object.assign({}, getOptions(this), {
    filepath: this.resourcePath
  })

  const regex = /(?<=\n)\-{3,}\n|(?<=\n)\*{3,}\n/gm
  const contents = content.split(regex)

  const result = await Promise.all(
    contents.map(_content => mdx(_content, options))
  ).catch(callback)

  const { renderer = DEFAULT_RENDERER } = options

  const code = `${renderer}\nexport default [\n${(
    result.map(replace).join(",\n")
  )}\n]`

  return callback(null, code)
}

module.exports = loader