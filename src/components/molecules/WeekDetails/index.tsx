import { IconWeather } from 'components/atoms/IconWeather'
import { Text } from 'components/atoms/Text'
import { WeekDetailsPlaceholder } from 'components/atoms/WeekDetailsPlaceholder'
import { Droplets, Thermometer, Wind } from 'lucide-react'
import { Forecast } from 'models/Forecast'
import { getDayWeekByDate, getDayByDate } from 'utils/forecasts'
import { formatMsToKmH, formatTemperature } from 'utils/formatNumbers'

export interface WeekDetailsProps {
  forecast: Forecast[]
  isLoading: boolean
}

const WeekDetails = ({ forecast, isLoading }: WeekDetailsProps) => {
  if (isLoading || forecast.length === 0) {
    return <WeekDetailsPlaceholder />
  }

  const weekLong = getDayWeekByDate(forecast[0].date, 'long')
  const day = getDayByDate(forecast[0].date)

  return (
    <div
      data-testid="week-details"
      className="flex flex-col items-start justify-between xl:flex-row xl:items-center"
    >
      <div className="flex">
        <IconWeather icon="03n" />
        <div className="flex flex-col">
          <Text size="sm" weight="bold" className="capitalize">
            {weekLong}, {day}
          </Text>
          <Text size="xs" weight="regular" className="capitalize">
            {forecast[0].description}
          </Text>
        </div>
      </div>
      <div className="flex items-center gap-3 md:gap-3">
        <div className="flex items-center">
          <Droplets size={16} />
          <Text size="xxs" weight="regular">
            {forecast[0].humidity}%
          </Text>
        </div>
        <div className="flex items-center">
          <Wind size={16} />
          <Text size="xxs" weight="regular">
            {formatMsToKmH(forecast[0].wind)} km/h
          </Text>
        </div>
        <div className="flex items-center">
          <Thermometer size={16} />
          <Text size="xxs" weight="regular">
            {formatTemperature(forecast[0].temperature)}ºC
          </Text>
        </div>
      </div>
    </div>
  )
}

export { WeekDetails }
