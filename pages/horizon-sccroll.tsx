import { DependencyList, EffectCallback, MutableRefObject, useEffect, useRef, useState } from "react"

function range(length: number) {
  return Array.from({ length }, (_, i) => i)
}

const useDocumentRect = () => {
  const [state, setState] = useState<DOMRect | undefined>(undefined)

  useEffect(() => {
    if (document) setState(document.documentElement.getBoundingClientRect())
  }, [])

  return state
}

const usePassEffect = (length: number, effect: EffectCallback, deps?: DependencyList) => {
  const count = useRef(0)

  useEffect(() => {
    if (count.current < length) {
      count.current = count.current + 1
    } else {
      effect()
    }
  }, deps)
}

const useOnScroll = ({ start, end }: { start?: any, end?: any } = {}) => {
  const ref = useRef<HTMLElement>(null)

  const [position, setPosition] = useState<number>(0)

  const document = useDocumentRect()
  const width = document?.width ?? 0

  useEffect(() => {
    ref.current?.addEventListener("scroll", (e) => {
      setPosition((e.target as Element).scrollLeft)
    })
  }, [])

  const sub = ((position % width < width / 2) ? 0 : width) - (position % width)
  const isSnaped = Math.abs(sub) < 0.1

  usePassEffect(2, () => {
    if (isSnaped) {
      console.log("scroll end")
    } else {
      console.log("scroll start")
    }
  }, [isSnaped])

  return ref as MutableRefObject<null>
}

const HorizonCcroll = () => {
  const ref = useOnScroll()

  return (
    <div ref={ref} className="flex overflow-x-auto" style={{ scrollSnapType: "x mandatory" }}>
      {range(10).map(i => (
        <div className={`w-screen h-screen bg-${i % 2 ? 'red' : 'green'}-600 flex justify-center items-center`} style={{ scrollSnapAlign: "start" }} key={i}>
          <div className="w-screen h-screen flex justify-center items-center">
            Hello
          </div>
        </div>
      ))}
    </div>
  )
}

export const Page = () => {
  return (
    <HorizonCcroll />
  )
}

export default Page