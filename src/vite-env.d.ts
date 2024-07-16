/// <reference types="vite/client" />

// 通过dotenv从环境目录中读取对应的配置文件中的变量，并将这些变量添加到自身身上。
interface ImportMetaEnv {
  readonly VITE_BASE_API: string
  readonly VITE_PORT: number
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
