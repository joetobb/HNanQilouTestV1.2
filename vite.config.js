import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      cesium: 'cesium/Build/Cesium'
    }
  },
  define: {
    CESIUM_BASE_URL: JSON.stringify('/cesium')
  }
})