<style lang="less">
@import "./style.less";
</style>
<template lang="html" >
 
   <transition name="custom-classes-transition" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
      <div class="vuk-tips"  v-show="toggle" >
         {{title}}
      </div>
      </transition>
  
</template>
<script>
export default {
 
  data() {
    return {
      toggle: false,
      shows:false,
      title:'',
      time:''
    }
  },
  created() {
    window.tips=this;

  },
  methods: {
    show(data) {
     let self=this;
      clearTimeout(this.time);
      this.time=setTimeout(function(){
            self.toggle=false;
      },1500)
      this.title=data;
      this.toggle = true;
    }
  },

};
</script>
