import { Weather } from 'models/Weathear'
import { PopupWeather, PopupWeatherProps } from '.'
import { render, screen } from '@testing-library/react'

const demoWeather: Weather = {
  temperature: 25.6,
  feels: 26.02,
  min: 25.6,
  max: 25.6,
  pressure: 1013,
  humidity: 69,
  clouds: 100,
  description: 'nublado',
  icon: '04d',
  visibility: 10000,
  wind: 3.46,
  sunrise: 0,
  sunset: 0,
}

describe('components/molecules/PopupWeather', () => {
  it('should be render a Weather Popup', () => {
    const props: PopupWeatherProps = {
      weather: demoWeather,
    }

    render(<PopupWeather {...props} />)

    expect(screen.getByText(/25,6/i)).toBeInTheDocument()
    expect(screen.getByText(/10 km/i)).toBeInTheDocument()
    expect(screen.getByText(/26 ºC/i)).toBeInTheDocument()
    expect(screen.getByText(/69 %/i)).toBeInTheDocument()
    expect(screen.getByText(/100 %/i)).toBeInTheDocument()
    expect(screen.getByText(/12,46 km\/h/i)).toBeInTheDocument()
    expect(screen.getByText(/nublado/i)).toBeInTheDocument()
    expect(screen.getByAltText(/Weather Icon/i)).toBeInTheDocument()
  })
})
