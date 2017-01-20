import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routerMap from './routers'
//import 'highlight.js/styles/solarized-dark.css'
import 'highlight.js/styles/color-brewer.css';
import '../vb/style/index.less'
import vueBeauty from '../vb'
import components from './components'
//import locale from '../vb/locale/lang/en'
import locale from '../vb/locale/lang/zh-CN'

Vue.use(VueRouter);
Vue.use(vueBeauty,{locale});
Vue.use(components);

window.router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: routerMap
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})