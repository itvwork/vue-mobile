import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './app';
import routes from './router/index'
import './style/index.less';




Vue.use(VueRouter);
Vue.use(Vuex);
Vue.config.devtools = true;
const router = new VueRouter({
    //mode: 'history',
    routes
})


new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
    // data: {
    //     uievent: new Vue()
    // }
})