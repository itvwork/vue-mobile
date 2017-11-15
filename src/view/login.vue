<template lang="html">
    <section  m class="wrap-main">
        
   <vuk-text></vuk-text>
    
    </section>
</template>
<script>
import VuKText from '../components/VukText'
export default {
   beforeCreate(){
       document.getElementById('pop').innerHTML='<vue-text></vue-text>'
      
   },

   components: {
    VuKTextt
  },
};
</script>
