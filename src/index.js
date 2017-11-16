import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './app';
import routes from './router/index'
import './style/index.less';
import stateManage from './modules/index';




Vue.use(VueRouter);
Vue.use(Vuex);
Vue.config.devtools = true;
const router = new VueRouter({
    mode: 'history',
    routes
})


// router.beforeEach(function (to, from, next) {
//   if (to.path === '/user') {
//     next({name:'login'})
//   } else {
//     next()
//   }
 
// })
var store = new Vuex.Store(stateManage);


new Vue({
    el: '#app',
    store,
    router: router,
    render: h => h(App)
    // data: {
    //     uievent: new Vue()
    // }
})