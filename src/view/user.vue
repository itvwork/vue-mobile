<template lang="html">

    <section  m class="wrap-main">
        <vuk-text></vuk-text>
        <vuk-alert ref="alert"></vuk-alert> 
        <button @click="$refs.alert.toggle = true">alert</button>
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
  methods: {
    show() {
      this.$refs.alert.toggle = true;
    }
  }
};
</script>
