const WeekDetailsPlaceholder = () => {
  return (
    <div
      data-testid="week-details-placeholder"
      className="flex flex-col items-start justify-between xl:flex-row xl:items-center"
    >
      <div className="flex gap-2">
        <span className="block h-10 w-10 rounded-sm bg-light-blue-800/60" />
        <div className="flex flex-col gap-1">
          <span className="block h-7 w-40 rounded-sm bg-light-blue-800/60" />
          <span className="block h-4 w-40 rounded-sm bg-light-blue-800/60" />
        </div>
      </div>
      <div className="flex items-center gap-[2px]">
        <div className="flex items-center">
          <span className="block h-4 w-4 rounded-sm bg-light-blue-800/60" />
          <span className="block h-4 w-6 rounded-sm bg-light-blue-800/60" />
        </div>
        <div className="flex items-center">
          <span className="block h-4 w-4 rounded-sm bg-light-blue-800/60" />
          <span className="block h-4 w-6 rounded-sm bg-light-blue-800/60" />
        </div>
        <div className="flex items-center">
          <span className="block h-4 w-4 rounded-sm bg-light-blue-800/60" />
          <span className="block h-4 w-6 rounded-sm bg-light-blue-800/60" />
        </div>
      </div>
    </div>
  )
}

export { WeekDetailsPlaceholder }
