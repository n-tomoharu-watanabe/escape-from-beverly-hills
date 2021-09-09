import React from "react"

function importAll(context: __WebpackModuleApi.RequireContext) {
  return context.keys().map((e: string) => context(e))
}

interface MDXModule {
  default: React.VFC<any>[]
}

export const Page = () => {
  const modules: MDXModule[] = importAll(require.context("../assets/mdx"))

  return (
    <div>
      {modules.map((module, i1) => (
        <div key={i1}>
          {module.default.map((MDX, i2) => (
            <div key={i2}>
              <div>Module: {i1}, Component: {i2}</div>
              <MDX />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Page