import { Button } from 'components/atoms/Button'
import { FormEvent, useCallback, useContext } from 'react'
import { Search as SearchIcon } from 'lucide-react'
import { MapContext } from 'contexts/MapContext'

const Search = () => {
  const { address, updateAddress, isLoading, getLocationByAddress } =
    useContext(MapContext)

  const handleSubmitAddress = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      if (address) {
        getLocationByAddress(address)
      }
    },
    [address, getLocationByAddress],
  )

  const handleUpdateAddress = useCallback(
    (value: string) => {
      updateAddress(value)
    },
    [updateAddress],
  )

  return (
    <form
      name="search-form"
      className="focus-within:ring-indigo-500focus-within:ring-1 flex w-full justify-between gap-1 rounded-lg bg-white px-2 focus-within:border-blue-200 focus-within:ring-2"
      onSubmit={handleSubmitAddress}
    >
      <input
        type="search"
        name="q"
        id="search"
        placeholder="Procure por um local"
        value={address}
        onChange={(e) => handleUpdateAddress(e.target.value)}
        className="w-full bg-transparent text-sm text-blue-700 focus:outline-none"
      />
      <Button
        title="Buscar"
        type="submit"
        color="icon"
        className="text-light-blue-800"
        disabled={!address || isLoading}
      >
        <SearchIcon />
      </Button>
    </form>
  )
}

export { Search }
