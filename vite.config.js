import { defineConfig } from 'vite'
import dotenv from 'dotenv'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const org = process.env.VITE_ORGANIZATION || '';
  const envFilePath = resolve(__dirname, `.env.development.${org}`);
  dotenv.config({ path: envFilePath })
  return {
    plugins: [react()]
  }
})
