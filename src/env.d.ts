/// <reference types="vite/client" />

type ImportMetaEnvAugmented =
  import('@julr/vite-plugin-validate-env').ImportMetaEnvAugmented<
    typeof import('../env').default
  >

// eslint-disable-next-line no-unused-vars
interface ImportMetaEnv extends ImportMetaEnvAugmented {}
