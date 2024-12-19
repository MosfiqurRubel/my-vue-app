<template>
  <div class="flex flex-col gap-6">
    <AppAvatar
      :type="'text'"
      :size="'medium'"
      :rounded="'full'"
      :fillMode="'solid'"
      :border="true"
      :avatarClass="'shrink-0'"
      :altName="'Mosfiqur Rahman'"
    />
    <h1 class="text-5xl text-green-600">Header s</h1>
    <p class="font-opensans text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati delectus doloribus voluptates facilis quasi illum, atque dolore saepe sed, enim, distinctio at? Esse quis perspiciatis nam commodi harum aliquid earum?</p>
    <k-button
      @click="handleClick"
      :theme-color="'primary'"
      :fill-mode="'solid'"
      :rounded="'medium'"
      >Click me</k-button
    >
  </div>
</template>

<script>
import { Button } from "@progress/kendo-vue-buttons";
import AppAvatar from "@/components/common/AppAvatar/AppAvatar.vue";

export default {
  components: {
    "k-button": Button,
    AppAvatar,
  },
  methods: {
    handleClick() {
      // alert("Button clicked!");
      this.$router.push('/dashboard');
    },
  },
};
</script>
