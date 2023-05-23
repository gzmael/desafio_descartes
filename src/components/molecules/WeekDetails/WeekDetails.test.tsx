import { Forecast } from 'models/Forecast'
import { WeekDetails, WeekDetailsProps } from '.'
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

describe('components/molecules/WeekDetails', () => {
  it('Should be able show WeekDatails', () => {
    const props: WeekDetailsProps = {
      forecast: demoForecasts,
      isLoading: false,
    }

    render(<WeekDetails {...props} />)

    expect(screen.getByTestId('week-details')).toBeInTheDocument()
    expect(screen.getByTestId('week-details')).toHaveClass(
      'flex items-center justify-between',
    )
  })

  it('Should be able show WeekDatails placeholder when is loading', () => {
    const props: WeekDetailsProps = {
      forecast: demoForecasts,
      isLoading: true,
    }

    render(<WeekDetails {...props} />)

    expect(screen.getByTestId('week-details-placeholder')).toBeInTheDocument()
    expect(screen.getByTestId('week-details-placeholder')).toHaveClass(
      'flex animate-pulse items-center justify-between',
    )
  })
})
