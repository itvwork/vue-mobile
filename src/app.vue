
<template lang="html">
      <section m class="app-main-wrap">
            <router-view></router-view>
            <vuk-alert></vuk-alert>
      </section>
</template>

<script>
import VukAlert from "./components/VukAlert/index.vue";
export default {
  data() {
    return {};
  },
  components: {
    VukAlert
  }
};
</script>
