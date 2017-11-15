<template lang="html">
    <section m class="page-wrap"style="height:20mm;"  @click="alert()"  >
         <vuk-top ></vuk-top>
    </section>
</template>
<script>
import VukTop from "../components/VukTop";
import { mapMutations } from "vuex";
export default {
  components: {
    VukTop
  },
  created(){

  },
  watch(){
   
  },
  methods: {
       ...mapMutations([
         'alertHide','alertShow'
       ]),
       alert(){
         this.alertShow({
           title:'你是谁',
           info:'你是个二货',
           bgIndex:99,

         })
       }
    }
};
</script>
