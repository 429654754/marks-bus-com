import { App, Plugin } from 'vue';
import TableBox from './src/index.vue';

export const TableBoxPlugin: Plugin = {
  install(app: App) {
    app.component('m-table-box', TableBox);
  },
};

export {
  TableBox,
};
