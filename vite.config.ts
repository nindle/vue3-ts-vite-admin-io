import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
export default defineConfig({
  plugins: [
    vue(),

    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],

  resolve: {
    alias: {
      '@': '/src'
    }
  },

  server: {
    // https: true,
    // proxy: {
    //   '/api': {
    //     target: 'https://data-access.topcj.com/',
    //     changeOrigin: true,
    //     rewrite: path => path.replace(/^\/api/, ''),
    //   },
    // },
  },

  css: {
    //css预处理
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/base.scss";'
      }
    }
  }
})
