export const formatTemperature = (temp: number, maxFrac = 1) => {
  return new Intl.NumberFormat('pt-br', {
    maximumFractionDigits: maxFrac,
  }).format(temp)
}

export const formatMsToKmH = (value: number, digits = 2) => {
  return new Intl.NumberFormat('pt-br', {
    maximumFractionDigits: digits,
  }).format(value * 3.6)
}
