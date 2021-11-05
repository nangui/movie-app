import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  loading: { color: '#fff' },
  css: ['~/assets/css/main.css'],
  publicRuntimeConfig: {
    TVMAZE_URL: process.env.TVMAZE_URL,
    supabaseUrl: process.env.SUPABASE_URL,
    supabasePublicKey: process.env.SUPABASE_PUBLIC_KEY,
  },
})
