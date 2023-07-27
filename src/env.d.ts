/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_FIREBASE_APIKEY: string
  readonly VITE_FIREBASE_AUTHDOMAIN: string
  readonly VITE_FIREBASE_PROJECTID: string
  readonly VITE_FIREBASE_STORAGEBUCKET: string
  readonly VITE_FIREBASE_MESSAGINGSENDERID: string
  readonly VITE_FIREBASE_APPID: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}