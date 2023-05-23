import { IconWeather } from 'components/atoms/IconWeather'
import { Text } from 'components/atoms/Text'
import { WeekHoursPlaceholder } from 'components/atoms/WeekHoursPlaceholder'
import { Droplets, Wind } from 'lucide-react'
import { Forecast } from 'models/Forecast'
import { getHourByTimestamp } from 'utils/forecasts'
import { formatMsToKmH, formatTemperature } from 'utils/formatNumbers'

export interface WeekHoursWeatherProps {
  forecasts: Forecast[]
  isLoading: boolean
}

const WeekHoursWeather = ({ forecasts, isLoading }: WeekHoursWeatherProps) => {
  if (isLoading || forecasts.length === 0) {
    return <WeekHoursPlaceholder />
  }

  return (
    <div
      data-testid="week-hours"
      className="custom-scroll flex snap-x gap-0.5 overflow-x-auto rounded-lg bg-light-blue-950"
    >
      {forecasts.map((forecast) => (
        <div
          key={forecast.date}
          className="w-1/4 snap-start bg-light-blue-900/50 px-1 py-2 sm:px-2"
        >
          <IconWeather icon={forecast.icon} />
          <Text size="lg" weight="semibold">
            {formatTemperature(forecast.temperature)}º
          </Text>
          <Text
            size="xxs"
            weight="regular"
            className="w-20 truncate capitalize"
          >
            {forecast.description}
          </Text>
          <Text size="xxs" weight="regular" display="flex" className="gap-1">
            <Droplets size={14} className="w-4" />
            {forecast.humidity} %
          </Text>
          <Text
            size="xxs"
            weight="regular"
            display="flex"
            className="w-full items-center gap-1"
          >
            <Wind size={14} className="w-4" />
            {formatMsToKmH(forecast.wind, 1)} km/h
          </Text>
          <Text
            type="primary"
            size="xs"
            weight="regular"
            className="w-full text-center"
          >
            {getHourByTimestamp(forecast.timestamp)}
          </Text>
        </div>
      ))}
    </div>
  )
}

export { WeekHoursWeather }
