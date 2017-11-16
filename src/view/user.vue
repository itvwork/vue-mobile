<template lang="html">

    <section  m class="wrap-main">
        <vuk-text></vuk-text>
        <vuk-alert ref="alert" name="/user" :title.aync="user" ></vuk-alert>
        <button @click="show()">alert</button>
        <button v-for="(item,index) in list" >{{item.title}}</button>
    </section>

</template>
<script>
import VukText from "../components/VukText";
import VukAlert from "../components/VukAlert/index.vue";
export default {
  components: {
    VukText,
    VukAlert
  },
  data(){
      return {
        list:[],
        warn:'',
        'user':'warn'
      }
  },
  activated(){

  },
  created(){
    let self=this;
    console.log(window.history);
    setTimeout(function(){

      self.list=[
        {
          title:'111111111111'
        },
        {
          title:'22222222'
        },
        {
          title:'3333333333'
        },
        {
          title:'44444444444'
        },
      ]
    },2000)
  },
  methods: {
    show() {

      this.user='我没钱';
      this.$refs.alert.toggle = true;
    }
  }
};
</script>
