import VueIndex from "./svg/index"
import http from './common/http';
Vue.use(http);
new Vue({
    el: '#app',
    components: {
        VueIndex
     },
    created(){
      
    }
})