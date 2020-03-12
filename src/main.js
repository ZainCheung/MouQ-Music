import ElementUI from 'element-ui' //新添加
import 'element-ui/lib/theme-chalk/index.css' //新添加，避免后期打包样式不同，要放在import App from './App';之前
// import 'APlayer/dist/APlayer.min.css';
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './plugins/element.js'
import router from './router'

import vueAplayer from 'vue-aplayer';

  //新添加
Vue.use(ElementUI)   //新添加
// Vue.use(APlayer)   //新添加
Vue.use(VueAxios, axios)
Vue.use(vueAplayer) 
Vue.config.productionTip = false

// Vue.prototype.HOST='/api'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
