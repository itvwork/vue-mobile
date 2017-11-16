<style lang="less">
@import "./style.less";
</style>
<template lang="html">
    <div  m class="vue-text" >
        <input :type="type" :placeholder="placeholder"  />
    </div>
</template>
<script>

export default {
   props: {
    title: {
      type: String,
      default: "home"
    },
    type:{
       type:String,
       default:'text' 
    },
    less:{
        type:String,
        default:'fixed'
        
    },
    placeholder:{
        type:String,
        default:'请输入内容'
    }
  },

   components: {
        
  },
};
</script>
