import { render, screen } from '@testing-library/react'

import { IconWeatherProps, IconWeather } from '.'
import { cn } from 'utils/cls-merge'

describe('Component/Atom/IconWeather', () => {
  it('should render IconWeather with default variant', () => {
    const props: IconWeatherProps = {
      icon: '03n',
    }

    const defaultClass = cn(['h-10 w-10'])

    const { container } = render(<IconWeather {...props} />)

    expect(screen.getByAltText(/Weather Icon/i)).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(defaultClass)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render IconWeather with large variant', () => {
    const props: IconWeatherProps = {
      icon: '03n',
      size: 'lg',
    }

    const defaultClass = cn(['h-16 w-16'])

    const { container } = render(<IconWeather {...props} />)

    expect(screen.getByAltText(/Weather Icon/i)).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(defaultClass)

    expect(container.firstChild).toMatchSnapshot()
  })
})
