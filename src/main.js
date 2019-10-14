import Vue from 'vue'
import App from './App.vue'
import routes from './router';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(ElementUI, {
  size: 'mini'
});
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')