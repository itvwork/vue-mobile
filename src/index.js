import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './app';
import routes from './router/index'
import './style/index.less';
import stateManage from './modules/index';


Vue.use(VueRouter);
Vue.use(Vuex);

Vue.directive('tap', {
    bind: function (el, binding) {
        var startTx, startTy, endTx, endTy;
        el.addEventListener("touchstart", function (e) {
            var touch = e.touches[0];
            startTx = touch.clientX;
            startTy = touch.clientY;
           
        }, false);
        el.addEventListener("touchend", function (e) {
            var touch = e.changedTouches[0];
            endTx = touch.clientX;
            endTy = touch.clientY;
            if (Math.abs(startTx - endTx) < 6 && Math.abs(startTy - endTy) < 6) {
                var method = binding.value.method;
                var params = binding.value.params;
                method(params);
            }
        }, false);

    }
})
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