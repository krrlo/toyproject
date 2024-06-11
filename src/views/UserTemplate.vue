<template>
  <Header />
  <router-view :key="$route.fullPath" />
  <Footer />
</template>

<script>
import Header from "../layouts/user/UserHeader.vue";
import Footer from "../layouts/user/UserFooter.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
