<template>
  <AppNotification />
  <Wrapper />
</template>

<script>
import Wrapper from "@/views/wrapper/wrapper.vue";
import AppNotification from '@/components/common/AppNotification/AppNotification.vue';

export default {
  name: "App",
  components: { Wrapper, AppNotification },
};
</script>

<style lang="scss">
@import "./assets/scss/utilities/variables.scss";
@import "@progress/kendo-theme-default/dist/all.scss";
@import "main.css";
@import "./assets/scss/app.scss";
</style>
