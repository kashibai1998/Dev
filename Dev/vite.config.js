import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import  federation from "@originjs/vite-plugin-federation";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    federation({
      name :"Dev",
      fileName:"remoteEntry.js",
      expose:{
        "./Dev":"./src/App.jsx"
      },
      shared:["react","react-dom"]
    })
  ],
  server:{
    port:3001
  }
})
