import { DayWeekType } from 'models/Forecast'
import { DaysWeekButtons, DaysWeekButtonsProps } from '.'
import { render, screen, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import userEvent from '@testing-library/user-event'

const demoDays: DayWeekType[] = [
  {
    date: '2023-05-22',
    day: '22',
    isSelected: true,
    week: 'seg.',
  },
  {
    date: '2023-05-23',
    day: '23',
    isSelected: false,
    week: 'ter.',
  },
]

const onSelectDay = vi.fn((e: number) => {})

describe('components/molecules/DaysWeekButtons', () => {
  it('Should be able show DaysWeekButtons', () => {
    const props: DaysWeekButtonsProps = {
      isLoading: false,
      days: demoDays,
      onSelectDay,
    }

    render(<DaysWeekButtons {...props} />)

    expect(screen.getByText(/22/i)).toBeInTheDocument()
    expect(screen.getByText(/seg./i)).toBeInTheDocument()
    expect(screen.getByText(/23/i)).toBeInTheDocument()
    expect(screen.getByText(/ter./i)).toBeInTheDocument()
  })

  it('Should not be able to show DaysWeekButtons when is loading', () => {
    const props: DaysWeekButtonsProps = {
      isLoading: true,
      days: demoDays,
      onSelectDay,
    }

    render(<DaysWeekButtons {...props} />)

    expect(screen.getByTestId('buttons-placeholder')).toBeInTheDocument()
  })

  it('Should be able to change DaysWeekButtons selected', async () => {
    const props: DaysWeekButtonsProps = {
      isLoading: false,
      days: demoDays,
      onSelectDay,
    }

    render(<DaysWeekButtons {...props} />)

    const button0 = screen.getByTestId('button-0')
    const button1 = screen.getByTestId('button-1')

    userEvent.click(button1)

    expect(button1).toHaveClass(
      'flex items-center justify-center font-medium disabled:cursor-not-allowed cursor-pointer transition-all disabled:opacity-50 disabled:pointer-events-none focus:outline-none active:scale-95 bg-light-blue-900/80 hover:bg-light-blue-300/50 text-white hover:text-white h-auto px-2 py-1 text-sm btn-sm rounded w-full flex-row-reverse gap-1 md:flex-col md:gap-0',
    )
    expect(button0).toHaveClass(
      'flex items-center justify-center font-medium disabled:cursor-not-allowed cursor-pointer transition-all disabled:opacity-50 disabled:pointer-events-none focus:outline-none active:scale-95 h-auto px-2 py-1 text-sm btn-sm rounded bg-light-blue-300/80 hover:bg-light-blue-300/80 text-white hover:text-white pointer-events-none w-full flex-row-reverse gap-1 md:flex-col md:gap-0',
    )
    await waitFor(() => {
      expect(onSelectDay).toHaveBeenCalled()
    })
  })
})
