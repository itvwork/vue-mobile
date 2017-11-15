<style lang="less">
@import "./style.less";
</style>
<template lang="html">
   <div class="vuk-alert">
     <transition name="custom-classes-transition" enter-active-class="ani2 fadeIn" leave-active-class="animated fadeOut">
      <div class="vuk-bg" :style="{'z-index':alert.bgIndex}" @click="alertHide()"  v-show="alert.toggle"></div>
  </transition>
   <transition name="custom-classes-transition" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
      <div class="vuk-log"  v-show="alert.toggle" >
          <h4 m class="log-title">{{alert.title}}</h4>
          <p m class="log-info">{{alert.info}}</p>
          <button class="btn-log-sure" @click="alertHide()">确定</button>
      </div>
      </transition>
   </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex';
export default {
  computed: {
    ...mapState(['alert']),

  },
  created(){
     console.log(this);
  },
  methods:{
    ...mapMutations([
      'alertHide','alertShow'
    ]),
  }


};
</script>
