import { IconWeather } from 'components/atoms/IconWeather'
import { Text } from 'components/atoms/Text'
import { Weather } from 'models/Weathear'
import { formatTemperature } from 'utils/formatNumbers'
import { getDetailListFromWeather } from 'utils/weather'

export interface PopupWeatherProps {
  weather: Weather
}

const PopupWeather = ({ weather }: PopupWeatherProps) => {
  const details = getDetailListFromWeather(weather)

  return (
    <>
      <Text size="sm" weight="bold">
        Clima atual
      </Text>
      <div className="item-center flex gap-2">
        <IconWeather icon={weather.icon} size="lg" />
        <div className="flex flex-col">
          <div className="flex items-start">
            <Text size="2xl" weight="bold">
              {formatTemperature(weather.temperature)}
            </Text>
            <Text size="lg" weight="regular" asChild className="pt-2">
              <sup>ºC</sup>
            </Text>
          </div>
          <Text size="xs" weight="bold" className="capitalize">
            {weather.description}
          </Text>
        </div>
      </div>
      <ul className="grid grid-cols-3 gap-1">
        {details.map((item) => (
          <li className="text-center" key={item.title}>
            <Text size="xs" weight="regular" className="text-light-blue-300">
              {item.title}
            </Text>
            <Text size="xxs" weight="bold">
              {item.value}
            </Text>
          </li>
        ))}
      </ul>
    </>
  )
}

export { PopupWeather }
