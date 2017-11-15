import alert from './model/alert'

export default {
    state:{
        count: 0,
        meun:0,
        bg:false,
        loading:0,
        token:sessionStorage.getItem("itvadmintoken"),
        admin:sessionStorage.getItem("itvusername")
    },
    modules: {
        alert,
   
    },
}
