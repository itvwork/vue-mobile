<style lang="less">
@import "./style.less";
</style>
<template lang="html" >
     <button class="btn" :class="{'vuk-full':type=='full'}"  @click="click()">{{title}}</button>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "title"
    },
    click:{
      String:Function,
      default:''
    },
    type:{
      type:String,
      default:'full'
    }
    
  },
  data() {
    return{

    }
  },
  created() {
  
  },
  
};
</script>
