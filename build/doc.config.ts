// 交互式文档构建配置
import baseConfig from './base.config';
import { defineConfig } from 'vite';

export default defineConfig({
  ...baseConfig,
  base: '/marks-bus-com/',
  build: {
    outDir: 'docFiles',
  },
});
