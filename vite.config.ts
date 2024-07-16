import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite' // 导入按需自动加载API插件

// https://vitejs.dev/config/
export default defineConfig((conditionalConfig: any) => {
  // conditionalConfig 对象包含 4 个字段, mode/command/isSsrbuild/isPreview
  console.log(conditionalConfig)

  // 解构出来
  const { mode, command, isSsrBuild, isPreview } = conditionalConfig

  // __dirname是node.js的一个全局变量，用于指向当前执行脚本所在的目录路径，而且是绝对路径。
  // process.cwd()是在启动项目时动态获取的，__dirname则是根据当前文件的目录结构决定的
  console.log(process.cwd(), __dirname)

  // 根据 mode 来判断当前是何种环境
  const env = loadEnv(mode, __dirname)
  console.log(env)

  return {
    // 配置插件，默认配置只有 vue 插件
    plugins: [vue(), vueJsx(), vueDevTools(), AutoImport({ imports: ['vue', 'vue-router'] })], // 配置vue、vue-router的API自动加载
    server: {
      host: '0.0.0.0', // 指定服务器应该监听哪个 IP 地址，默认localhost，可设置为'0.0.0.0'或 true
      port: env.VITE_PORT,
      open: env.VITE_OPEN, // 开发服务器启动时，自动在浏览器中打开应用程序
      // 本地代理
      proxy: {
        // 简写（字符串）
        '/mock': env.VITE_BASE_API,
        // 带选项写法（对象）
        '/api': {
          target: env.VITE_BASE_API, // 从环境变量文件取值
          changeOrigin: true, // 支持跨域
          rewrite: (path) => path.replace(/^\/api/, '') // 路径重写
        },
        // 代理 websockets 或 socket.io 写法：ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
        '/socket.io': {
          target: 'ws://localhost:5174',
          // 支持 websocket
          ws: true
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
