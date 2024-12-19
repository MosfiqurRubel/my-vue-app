<template>
  <!-- <div class="flex flex-col gap-10 h-full"> -->
    <router-view name="header" />
    <router-view name="Home" />
    <router-view />
  <!-- </div> -->
</template>
<script>
import Navigation from "@/components/navigation/Navigation.vue";
import Header from "@/components/header/Header.vue";
import Home from "@/views/Home.vue";

export default {
  name: "wrapper",
  components: {
    Navigation,
    Header,
    Home,
  },
  data() {
    return {
      routeName: false,
    };
  },

  watch: {
    $route() {
      this.routeName = this.$route?.meta?.auth === true;
    },
  },
};
</script>
