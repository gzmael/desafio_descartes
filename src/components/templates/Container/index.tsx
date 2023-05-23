import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}
const Container = ({ children }: ContainerProps) => {
  return (
    <div
      data-testid="container"
      className="h-full w-full rounded-md bg-gradient-to-t from-[#BFDBEE] to-light-blue-500 p-[1px] shadow-lg"
    >
      <div className="flex h-full w-full flex-col justify-center overflow-hidden rounded-[6px] bg-gradient-to-b from-[#0CA7E5] to-blue-900 md:flex-row ">
        {children}
      </div>
    </div>
  )
}

export { Container }
