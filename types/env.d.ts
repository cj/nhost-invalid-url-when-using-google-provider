export interface ENV {
  NEXT_PUBLIC_NHOST_BACKEND_URL: string
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends ENV {}
  }
}

export {}

