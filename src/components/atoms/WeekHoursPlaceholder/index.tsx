const WeekHoursPlaceholder = () => {
  return (
    <div
      data-testid="week-hours-placeholder"
      className="flex animate-pulse gap-1 overflow-hidden rounded-lg bg-light-blue-950"
    >
      <span className="h-40 w-full bg-light-blue-900/80" />
      <span className="h-40 w-full bg-light-blue-900/80" />
      <span className="h-40 w-full bg-light-blue-900/80" />
      <span className="h-40 w-full bg-light-blue-900/80" />
    </div>
  )
}

export { WeekHoursPlaceholder }
