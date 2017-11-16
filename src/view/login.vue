<template lang="html">

    <section  m class="wrap-main">
   <vuk-text></vuk-text>
   <vuk-alert ref="alert" title="login" name="/login"></vuk-alert>
    <button @click="show()">alert</button>

    </section>

</template>
<script>
import VukText from "../components/VukText";
import VukAlert from "../components/VukAlert";
export default {
  components: {
    VukText,VukAlert
  },
   watch:{
    '$route': function(to, from) {
        console.log('---------login');
    }
  },
  mounted () {
      window.onpopstate=function(e){
        e.preventDefault();

      }
  },
  methods: {
    show(){
      this.$refs.alert.toggle = true;
    }
  }
};
</script>
