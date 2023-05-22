import { render, screen } from '@testing-library/react'

import { Container } from '.'

describe('Component/Template/Container', () => {
  const defaultClassName =
    'h-full w-full rounded-md bg-gradient-to-t from-[#BFDBEE] to-light-blue-500 p-[1px] shadow-lg'

  it('should render Container with children', () => {
    const props = {
      children: <p>Teste</p>,
    }

    const { container } = render(<Container {...props} />)

    expect(screen.getByTestId('container')).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(defaultClassName)

    expect(container.firstChild).toMatchSnapshot()
  })
})
