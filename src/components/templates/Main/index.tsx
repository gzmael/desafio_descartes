import { MapContext } from 'contexts/MapContext'
import { useDebounce } from 'hooks/useDebounce'
import { apiUnsplash } from 'lib/axios'
import { ReactNode, useContext, useEffect, useState } from 'react'
import { cn } from 'utils/cls-merge'

interface MainLayoutProps {
  children: ReactNode
}
const MainLayout = ({ children }: MainLayoutProps) => {
  const { address } = useContext(MapContext)
  const [backgroundUrl, setBackgroundUrl] = useState<string | null>(null)
  const debouncedSearchTerm = useDebounce<string>(address, 2000)

  useEffect(() => {
    async function getBackground() {
      const params = new URLSearchParams({
        orientation: 'landscape',
        count: '1',
        client_id: import.meta.env.VITE_UNSPLAH_KEY,
        topics: 'city, nature',
      })
      const result = await apiUnsplash.get(`/random?${params.toString()}`)

      if (result) {
        setBackgroundUrl(
          result.data[0].urls.regular +
            '&duotone=89c7f0,115b93&duotone-alpha=80',
        )
      }
    }

    if (debouncedSearchTerm) {
      getBackground()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm])

  return (
    <div
      className={cn(
        'flex min-h-screen w-screen items-center justify-center bg-cover bg-center bg-no-repeat px-2 py-4 md:p-0',
      )}
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <main className="flex w-full max-w-5xl flex-col items-center gap-4 rounded-lg">
        {children}
      </main>
    </div>
  )
}

export { MainLayout }
