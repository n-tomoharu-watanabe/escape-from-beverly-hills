function range(length: number) {
  return Array.from({length}, (_, i) => i)
}

const HorizonCcroll = () => {
  return (
    <div className="flex overflow-x-auto" style={{ scrollSnapType: "x mandatory" }}>
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