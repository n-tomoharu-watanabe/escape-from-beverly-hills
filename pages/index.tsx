import React from "react"
import { HorizonCcroll } from "./horizon-sccroll"

function range(length: number) {
  return Array.from({ length }, (_, i) => i)
}

function importAll(context: __WebpackModuleApi.RequireContext) {
  return context.keys().map((e: string) => context(e))
}

interface MDXModule {
  default: React.VFC<any>[]
}

export const Page = () => {
  const modules: MDXModule[] = importAll(require.context("../assets/mdx/steps"))

  const steps = range(modules.length + 1).map(i => () => <div>Step{i + 1}</div>)
  const sections = steps.map((step, i) => [step, ...(modules[i]?.default ?? [])]).flat()

  return (
    <HorizonCcroll>
      {sections.map(Section => <Section />)}
    </HorizonCcroll>
  )
}

export default Page