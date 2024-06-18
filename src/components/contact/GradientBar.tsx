const GradientBar = () => {
  return (
    <div className="relative h-40 w-[40rem]">
      <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-sm" />
      <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-violet-500 to-transparent blur-sm" />
      <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
    </div>
  )
}
export default GradientBar
