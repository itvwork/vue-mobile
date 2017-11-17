
<template lang="html">
      <section m class="app-main-wrap">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <vuk-tips></vuk-tips>
      </section>
</template>

<script>
import VukTips from "./components/VukTips";
export default {
  data() {
    return {};
  },
  components: {
    VukTips
  }
};
</script>
