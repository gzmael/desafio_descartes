import { render, screen } from '@testing-library/react'

import { Button, ButtonProps, defaultStyle } from '.'
import { cn } from 'utils/cls-merge'

describe('Component/Atom/Button', () => {
  it('should render Button with default variant', () => {
    const props: ButtonProps = {
      children: 'Button Default',
    }

    const classNames = cn([
      defaultStyle,
      'h-10 pl-3 pr-4 gap-2 text-base btn-md',
      'w-auto',
      'bg-indigo-500 hover:bg-indigo-600 text-white hover:text-white focus:ring-2 focus:ring-blue-400 focus:ring-offset-2',
      'rounded',
    ])

    const { container } = render(<Button {...props} />)

    expect(screen.getByText(/Button Default/i)).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(classNames)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render Button with icon variant', () => {
    const props: ButtonProps = {
      children: 'Button Icon',
      color: 'icon',
    }

    const classNames = cn([
      defaultStyle,
      'h-10 pl-3 pr-4 gap-2 text-base btn-md',
      'w-auto',
      'bg-transparent hover:bg-transparent transition-all focus:ring-none',
      'rounded',
      'p-2',
    ])

    const { container } = render(<Button {...props} />)

    expect(screen.getByText(/Button Icon/i)).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(classNames)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render small primary Button with variants', () => {
    const props: ButtonProps = {
      children: 'Button Primary',
      color: 'primary',
      size: 'sm',
      radii: 'none',
      w: 'half',
    }

    const classNames = cn([
      defaultStyle,
      'h-8 pl-2 pr-3 gap-1 text-sm btn-sm',
      'w-auto',
      'bg-indigo-500 hover:bg-indigo-600 text-white hover:text-white focus:ring-2 focus:ring-blue-400 focus:ring-offset-2',
      'rounded-none',
      'w-3/4',
    ])

    const { container } = render(<Button {...props} />)

    expect(screen.getByText(/Button Primary/i)).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(classNames)

    expect(container.firstChild).toMatchSnapshot()
  })
})
