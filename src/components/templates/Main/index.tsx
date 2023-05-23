import { MapContext } from 'contexts/MapContext'
import { ReactNode, useContext } from 'react'
import { cn } from 'utils/cls-merge'

interface MainLayoutProps {
  children: ReactNode
}
const MainLayout = ({ children }: MainLayoutProps) => {
  const { backgroundUrl } = useContext(MapContext)
  return (
    <div
      className={cn(
        'relative flex min-h-screen w-screen items-center justify-center px-2 py-4 transition-all duration-300 ease-linear md:p-0',
      )}
    >
      <main className="z-10 flex w-full flex-col items-center gap-4 rounded-lg md:max-w-5xl lg:max-w-6xl">
        {children}
      </main>
      {backgroundUrl && (
        <img
          src={backgroundUrl}
          alt="Background"
          className="absolute z-0 h-full w-auto object-cover opacity-30 sm:opacity-70 md:h-screen md:w-full"
        />
      )}
    </div>
  )
}

export { MainLayout }
