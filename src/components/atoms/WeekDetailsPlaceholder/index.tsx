const WeekDetailsPlaceholder = () => {
  return (
    <div
      data-testid="week-details-placeholder"
      className="flex animate-pulse items-center justify-between"
    >
      <div className="flex gap-2">
        <span className="block h-10 w-10 bg-light-blue-800/60" />
        <div className="flex flex-col gap-1">
          <span className="block h-7 w-40 bg-light-blue-800/60" />
          <span className="block h-4 w-40 bg-light-blue-800/60" />
        </div>
      </div>
      <div className="flex items-center gap-[2px]">
        <div className="flex items-center">
          <span className="block h-4 w-4 bg-light-blue-800/60" />
          <span className="block h-4 w-6 bg-light-blue-800/60" />
        </div>
        <div className="flex items-center">
          <span className="block h-4 w-4 bg-light-blue-800/60" />
          <span className="block h-4 w-6 bg-light-blue-800/60" />
        </div>
        <div className="flex items-center">
          <span className="block h-4 w-4 bg-light-blue-800/60" />
          <span className="block h-4 w-6 bg-light-blue-800/60" />
        </div>
      </div>
    </div>
  )
}

export { WeekDetailsPlaceholder }
