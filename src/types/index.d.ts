declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.gif'
declare module 'react-tilt'
declare module 'maath/random/dist/maath-random.esm'

interface ImportMeta {
  readonly env: {
    VITE_APP_EMAILJS_SERVICE_ID: string
    VITE_APP_EMAILJS_TEMPLATE_ID: string
    VITE_APP_EMAILJS_PUBLIC_KEY: string
    VITE_APP_API_KEY: string
    VITE_APP_AUTH_DOMAIN: string
    VITE_APP_PROJECT_ID: string
    VITE_APP_STORAGE_BUCKET: string
    VITE_APP_MESSAGING_SENDER_ID: string
    VITE_APP_APP_ID: string
    VITE_APP_MEASUREMENT_ID: string
  }
}
