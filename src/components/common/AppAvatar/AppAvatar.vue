<template>
  <Avatar
    :type="type"
    :size="size"
    :theme-color="themeColor"
    :rounded="rounded"
    :border="border"
    :fill-mode="fillMode"
    :class="avatarClass"
    :altName="altName"
  >
    <img v-if="src" :src="imageUrl(src)" :style="imageStyle" :alt="alt" />

    <span
      v-else
      class="flex items-center justify-center text-sm uppercase leading-loose"
      >{{ getNameInProfile(altName) }}</span
    >
  </Avatar>
</template>

<script>
import { Avatar } from "@progress/kendo-vue-layout";

export default {
  name: "AppAvatar",
  components: {
    Avatar,
  },
  props: {
    type: {
      type: String,
      default: "image",
    },
    size: {
      type: String,
      default: "medium",
    },
    themeColor: {
      type: String,
      default: "primary",
    },
    fillMode: {
      type: String,
      default: "solid",
    },
    rounded: {
      type: String,
      default: "medium",
    },
    border: {
      type: Boolean,
      default: false,
    },
    avatarClass: {
      type: String,
      default: "mx-auto",
    },
    imageStyle: {
      type: String,
    },
    alt: {
      type: String,
      default: "",
    },
    altName: {
      type: String,
      default: "",
    },
    src: {
      type: String,
      default: "",
    },
  },
  methods: {
    imageUrl(imageName) {
      let baseImageUrl = "/assets/images/";
      return baseImageUrl + imageName;
    },
    getNameInProfile(name) {
      let initials = "";

      if (name && name.includes(" ")) {
        const names = name.split(" ");
        initials = names[0].charAt(0);

        if (names.length > 1) {
          initials += names[names.length - 1].charAt(0);
        }
      } else if (name) {
        initials = name.charAt(0);
      }
      return initials;
    },
  },
};
</script>
