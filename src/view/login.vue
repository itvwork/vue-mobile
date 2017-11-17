<style lang="less">
@import "../components/const.less";
.login-wrap {
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
    background: url(/style/mobile/css/img/login.jpg) center no-repeat;
    background-size: cover;
  
  
  
}
.login-box {
  .p50;
  .tranxy; width: 80%;
  max-width:80mm ;
  .btn{ margin-top: 5mm;}
  .login-logo{ text-align: center;}
    margin-top: -30mm;
   
}
</style>
<template lang="html">
  <section m class="login-wrap">
    <div class="login-box"> 
       <h2 class="login-logo">微改车</h2>
    <vuk-text></vuk-text>
    <vuk-text></vuk-text>
    <vuk-alert ref="alert" title="login" name="/login"></vuk-alert>
    <vuk-btn title="登录" :click="show"></vuk-btn>
   </div>
  </section>
</template>
<script>
import VukText from "../components/VukText";
import VukAlert from "../components/VukAlert";
import VukBtn from "../components/VukBtn";

export default {
  components: {
    VukText,
    VukAlert,
    VukBtn
  },
  watch: {
    $route: function(to, from) {}
  },
  mounted() {
    window.onpopstate = function(e) {
      e.preventDefault();
    };
  },
  methods: {
    show() {
      tips.show("提示一下你");
    }
  }
};
</script>
