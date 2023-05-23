import { Button } from 'components/atoms/Button'
import { DayPlaceholder } from 'components/atoms/DayPlaceholder'
import { Text } from 'components/atoms/Text'
import { DayWeekType } from 'models/Forecast'

export interface DaysWeekButtonsProps {
  isLoading: boolean
  days: DayWeekType[]
  onSelectDay: (day: number) => void
}

const DaysWeekButtons = ({
  days,
  isLoading,
  onSelectDay,
}: DaysWeekButtonsProps) => {
  if (isLoading || days.length === 0) {
    return (
      <div
        data-testid="buttons-placeholder"
        className="flex w-full justify-between gap-1 overflow-x-scroll pb-2 md:overflow-hidden"
      >
        <DayPlaceholder />
        <DayPlaceholder />
        <DayPlaceholder />
        <DayPlaceholder />
        <DayPlaceholder />
      </div>
    )
  }
  return (
    <div className="flex w-full justify-between gap-1 overflow-x-scroll pb-2 md:overflow-hidden">
      {!isLoading &&
        days.map((day, index) => (
          <Button
            size="day"
            title="Ver previsão deste dia"
            key={day.date}
            isSelected={day.isSelected}
            data-testid={`button-${index}`}
            className="w-full flex-row-reverse gap-1 md:flex-col md:gap-0"
            onClick={() => onSelectDay(index)}
          >
            <Text
              size="xs"
              weight="regular"
              className="md:text-xl md:font-bold"
            >
              {day.day}
            </Text>
            <Text size="xs" weight="regular" className="capitalize">
              {day.week}
            </Text>
          </Button>
        ))}
    </div>
  )
}

export { DaysWeekButtons }
