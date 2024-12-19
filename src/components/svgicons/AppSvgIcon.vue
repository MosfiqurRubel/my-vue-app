<template>
  <!-- <component :is="icon" /> -->
  <component v-if="icon !== null" :is="icon" :class="iconClass" />
</template>

<script>
import IconClock from "@/components/svgicons/common-icons/IconClock.vue";
import IconInfo from "@/components/svgicons/common-icons/IconInfo.vue";
import IconDashboard from "@/components/svgicons/navigation/IconDashboard.vue";

export default {
  name: "AppSvgIcon",
  props: {
    icon: null,
    iconClass: null,
  },
  components: {
    "icon-info": IconInfo,
    "icon-clock": IconClock,
    "icon-dashboard": IconDashboard,
  },
};
</script>
