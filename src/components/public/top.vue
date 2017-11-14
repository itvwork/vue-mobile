<style lang="less">
    @import "./top.less";
    
</style>
<template lang="html">
    <div class="vue-top-bar" m  :class="{'vue-top-fixed':less=='fixed'}"   >
    <i m class="icon icon-retreat"></i>
        <span>{{title}}</span>
        <div class="bg"></div>
    </div>
</template>
<script>

export default {
   props: {
    title: {
      type: String,
      default: "home"
    },
    less:{
        type:String,
        default:'fixed'
        
    }
  },
};
</script>
