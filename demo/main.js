import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import Vue from 'vue';
import App from './app';
import router from './router';

Vue.config.productionTip = false;
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<app />',
  components: { App },
});
