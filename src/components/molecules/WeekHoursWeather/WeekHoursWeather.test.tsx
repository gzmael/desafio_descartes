import { Forecast } from 'models/Forecast'
import { WeekHoursWeather, WeekHoursWeatherProps } from '.'
import { render, screen } from '@testing-library/react'

const demoForecasts: Forecast[] = [
  {
    temperature: 25.6,
    feels: 26.02,
    min: 25.6,
    max: 25.6,
    pressure: 1013,
    humidity: 69,
    clouds: 100,
    date: '2023-05-22 18:00:00',
    description: 'nublado',
    icon: '04d',
    timestamp: 1685210400,
    visibility: 10000,
    wind: 3.46,
  },
]

describe('components/molecules/WeekHoursWeather', () => {
  it('Should be able to show WeekHoursWeather on screen', () => {
    const props: WeekHoursWeatherProps = {
      forecasts: demoForecasts,
      isLoading: false,
    }

    render(<WeekHoursWeather {...props} />)
    screen.debug()

    expect(screen.getByTestId('week-hours')).toBeInTheDocument()
    expect(screen.getByTestId('week-hours')).toHaveClass(
      'custom-scroll flex snap-x gap-0.5 overflow-x-auto rounded-lg bg-light-blue-950',
    )
    expect(screen.getByText(/18:00/i)).toBeInTheDocument()
    expect(screen.getByAltText(/Weather Icon/i)).toBeInTheDocument()
  })

  it('Should be able to show WeekHoursWeather placeholder when is loading', () => {
    const props: WeekHoursWeatherProps = {
      forecasts: demoForecasts,
      isLoading: true,
    }

    render(<WeekHoursWeather {...props} />)

    expect(screen.getByTestId('week-hours-placeholder')).toBeInTheDocument()
    expect(screen.getByTestId('week-hours-placeholder')).toHaveClass(
      'flex animate-pulse gap-1 overflow-hidden rounded-lg bg-light-blue-950',
    )
  })
})
