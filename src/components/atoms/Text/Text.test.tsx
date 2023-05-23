import { render, screen } from '@testing-library/react'

import { Text, TextProps } from '.'
import { cn } from 'utils/cls-merge'

describe('Component/Atom/Text', () => {
  const defaultClassName = ['leading-6', 'tracking-wider']
  it('should render text with default variant', () => {
    const props: TextProps = {
      children: 'Hello World',
    }

    const classNames = cn([
      defaultClassName,
      'text-base',
      'text-white',
      'font-medium',
    ])

    const { container } = render(<Text {...props} />)

    expect(screen.getByText(/Hello World/i)).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(classNames)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render text with small size variant', () => {
    const props: TextProps = {
      children: 'Small Text',
      size: 'sm',
    }

    const classNames = cn([
      defaultClassName,
      'text-sm',
      'text-white',
      'font-medium',
    ])

    const { container } = render(<Text {...props} />)

    expect(screen.getByText(/Small Text/i)).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(classNames)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render text with medium size and primary color', () => {
    const props: TextProps = {
      children: 'Medium Text',
      type: 'primary',
    }

    const classNames = cn([
      defaultClassName,
      'text-base',
      'text-light-blue-500',
      'font-medium',
    ])

    const { container } = render(<Text {...props} />)

    expect(screen.getByText(/Medium Text/i)).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(classNames)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render text with large size and bold', () => {
    const props: TextProps = {
      children: 'Medium Text',
      type: 'primary',
      size: 'lg',
      weight: 'bold',
    }

    const classNames = cn([
      defaultClassName,
      'text-lg',
      'text-light-blue-500',
      'font-bold',
    ])

    const { container } = render(<Text {...props} />)

    expect(screen.getByText(/Medium Text/i)).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(classNames)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render text with Slot tag', () => {
    const props: TextProps = {
      children: <span>Slot Text</span>,
      asChild: true,
    }

    const classNames = cn([
      defaultClassName,
      'text-base',
      'text-white',
      'font-medium',
    ])

    const { container } = render(<Text {...props} />)

    expect(
      screen.getByText(/Slot Text/, {
        selector: 'span',
      }),
    ).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(classNames)

    expect(container.firstChild).toMatchSnapshot()
  })
})
