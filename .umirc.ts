import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { exact: true, path: '/', component: '@/pages/index' },
    { exact: true, path: '/test', component: '@/pages/test/test' },
    { exact: true, path: '*', component: '@/pages/404' },
  ],
  fastRefresh: {},
});
