import { defineConfig } from '@julr/vite-plugin-validate-env'
import { z } from 'zod'

export default defineConfig({
  validator: 'zod',
  schema: {
    VITE_GOOGLE_GEOCODING_KEY: z.string(),
    VITE_UNSPLAH_KEY: z.string(),
    VITE_OPENWEATHER_KEY: z.string(),
  },
})
