// src/env.d.ts
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // 声明.vue文件的类型为Vue组件
  const component: DefineComponent<{}, {}, any>
  export default component
}
