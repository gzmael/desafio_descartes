import {
  RenderOptions,
  fireEvent,
  render,
  screen,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Search } from '.'
import { vi } from 'vitest'
import { ReactElement } from 'react'
import { MapContext, MapContextProps } from 'contexts/MapContext'

const getLocation = vi.fn()
const getLocationByAddress = vi.fn((e: string) => console.log(e))
const updateAddress = vi.fn()
const updatePosition = vi.fn()

const props: MapContextProps = {
  address: '',
  getLocation,
  getLocationByAddress,
  isLoading: false,
  position: {
    lat: -6.7931,
    lng: -39.307373,
  },
  updateAddress,
  updatePosition,
  forecasts: [],
  backgroundUrl: '',
  weather: null,
}

const customRender = (
  ui: ReactElement,
  props: MapContextProps,
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  return render(
    <MapContext.Provider value={{ ...props }}>{ui}</MapContext.Provider>,
    { ...options },
  )
}

describe('Component/Molecules/Search', () => {
  it('should render Search Form with search and button', () => {
    const { container } = render(<Search />)

    expect(screen.getByRole('form')).toBeInTheDocument()
    const input = screen.getByRole('searchbox')

    expect(input).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(
      'focus-within:ring-indigo-500focus-within:ring-1 flex w-full justify-between gap-1 rounded-lg bg-white px-2 focus-within:border-blue-200 focus-within:ring-2',
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should not be call props.onSearch when form is submitted and input is empty', async () => {
    render(<Search />)

    const form = screen.getByRole('form')

    fireEvent.submit(form)

    expect(getLocationByAddress).toHaveBeenCalledTimes(0)
  })

  it('should call props.onSearch when input search is valid', async () => {
    const inputText = 'Várzea Alegre'

    customRender(<Search />, props)

    const input = screen.getByRole('searchbox')
    const form = screen.getByRole('form')

    expect(input).toBeInTheDocument()
    await userEvent.type(input, inputText)
    fireEvent.submit(form)
    expect(updateAddress).toHaveBeenLastCalledWith('e')
  })
})
