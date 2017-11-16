<template lang="html">

    <section m class="page-wrap"style="height:20mm;"   >
         <vuk-top ></vuk-top>
    </section>

</template>
<script>
import VukTop from "../components/VukTop";
export default {
  components: {
    VukTop
  },
  watch:{
    '$route': function(to, from) {
        console.log('---------home-');
    }
  },
  created() {
    
  },
  methods: {

  }
};
</script>
