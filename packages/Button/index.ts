// 模块导出文件
import { App, Plugin } from 'vue'
import Button from './src/index.vue'

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component('m-button', Button)
  },
}

export { Button }