
<template lang="html">
      <section m class="app-main-wrap">
        <router-link :to="{name:'user'}">user</router-link>
        <router-link :to="{name:'login'}">home</router-link>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
      </section>
</template>

<script>

export default {
  data() {
    return {};
  },
  components: {

  }
};
</script>
