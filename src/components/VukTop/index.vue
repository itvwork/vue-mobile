<style lang="less">
    @import "./style.less";
    
</style>
<template lang="html">
    <div class="vue-top-bar" m :class="{'vue-top-fixed':less=='fixed'}"   >
    <i m class="icon icon-retreat"></i>
        <span>{{title}}</span>
    </div>
</template>
<script>

export default {
  name:'VukTop',
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
