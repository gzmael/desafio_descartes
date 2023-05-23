import { cn } from 'utils/cls-merge'

export interface IconWeatherProps {
  icon: string
  size?: 'lg' | 'md'
}

const IconWeather = ({ icon, size = 'md' }: IconWeatherProps) => {
  return (
    <img
      src={`https://openweathermap.org/img/wn/${icon}${
        size === 'lg' ? '@2x' : ''
      }.png`}
      alt="Weather Icon"
      className={cn(size === 'lg' && 'h-16 w-16', size === 'md' && 'h-10 w-10')}
    />
  )
}

export { IconWeather }
