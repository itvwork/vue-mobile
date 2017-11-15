<style lang="less">
@import "./style.less";
</style>
<template lang="html">
   <div class="vuk-alert">       
      <div class="vuk-bg" :style="{'z-index':alert.bgIndex}"></div>
      <div class="vuk-log">
          <h4 m class="log-title">{{alert.title}}</h4>
          <p m class="log-info">{{alert.info}}</p>
          <button class="btn-log-sure">确定</button>  
      </div>
   </div>
</template>
<script>
import { mapGetters,mapState } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      vuk: 'getState',
  
    }),
    ...mapState(['alert'])
   
  }, 
  created(){
     
  }
};
</script>
