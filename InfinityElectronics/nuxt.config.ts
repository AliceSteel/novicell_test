import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  future: { compatibilityVersion: 4 },
  devtools: { enabled: true },
   devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@pinia/nuxt',
  ],
   vite: {
    plugins: [
      tailwindcss() as any
    ]
  },
  css: ['~/assets/css/main.css'],
  nitro: {
    preset: 'vercel'
  }
 
})
