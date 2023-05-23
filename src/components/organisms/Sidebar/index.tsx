import { Button } from 'components/atoms/Button'
import { Text } from 'components/atoms/Text'
import { DaysWeekButtons } from 'components/molecules/DaysWeekButtons'
import { Search } from 'components/molecules/Search'
import { WeekDetails } from 'components/molecules/WeekDetails'
import { WeekHoursWeather } from 'components/molecules/WeekHoursWeather'
import { MapContext } from 'contexts/MapContext'
import { Locate } from 'lucide-react'
import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { getWeekAndDaysFromForecasts } from 'utils/forecasts'

const Sidebar = () => {
  const { getLocation, forecasts, isLoading } = useContext(MapContext)
  const [selectedDay, setSelectedDay] = useState<string | null>(null)

  const days = useMemo(() => {
    const allDays = getWeekAndDaysFromForecasts(forecasts)
    const resumeList = allDays.length > 5 ? allDays.slice(0, 5) : allDays
    return resumeList.map((day) => ({
      ...day,
      isSelected: day.date === selectedDay,
    }))
  }, [forecasts, selectedDay])

  const handleSelectedDay = useCallback(
    (day: number) => {
      setSelectedDay(days[day].date)
    },
    [days],
  )

  const dayForecastSelected = useMemo(() => {
    if (!selectedDay) return []

    return forecasts.filter((forecast) => forecast.date.includes(selectedDay))
  }, [forecasts, selectedDay])

  useEffect(() => {
    if (days.length > 0 && !selectedDay) {
      setSelectedDay(days[0].date)
    }
  }, [days, selectedDay])

  return (
    <aside
      data-testid="sidebar"
      className="flex w-full flex-col gap-1 px-3 py-4 md:w-96"
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
      <Text size="sm" weight="semibold">
        Previsões para Semana
      </Text>
      <DaysWeekButtons
        days={days}
        isLoading={isLoading}
        onSelectDay={handleSelectedDay}
      />
      <WeekDetails forecast={dayForecastSelected} isLoading={isLoading} />
      <WeekHoursWeather isLoading={isLoading} forecasts={dayForecastSelected} />
    </aside>
  )
}

export { Sidebar }
