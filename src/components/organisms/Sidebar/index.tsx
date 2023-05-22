import { Button } from 'components/atoms/Button'
import { Search } from 'components/molecules/Search'
import { MapContext } from 'contexts/MapContext'
import { Locate } from 'lucide-react'
import { useContext } from 'react'

const Sidebar = () => {
  const { getLocation } = useContext(MapContext)

  return (
    <aside
      data-testid="sidebar"
      className="flex w-full flex-col gap-4 px-3 py-4 md:w-96"
    >
      <header className="flex w-full gap-2">
        <Search />
        <Button
          title="Pegar Localização"
          type="submit"
          color="icon"
          className="text-white"
          onClick={getLocation}
        >
          <Locate />
        </Button>
      </header>
    </aside>
  )
}

export { Sidebar }
