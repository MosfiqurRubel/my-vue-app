<template>
    <div class="h-full bg-slate-50 main-container max-lg:px-3 lg:px-10 py-10">
        <div class="h-full main-content bg-white p-2 md:p-4 lg:p-5 rounded shadow-md overflow-y-auto">
            <div class="flex gap-5 items-end flex-wrap">
                <div v-for="(icon, index) in icons" :key="index" class="text-center">
                    <AppSvgIcon :icon="icon" :iconClass="'mx-auto'"/>
                    <span class="block color-neutral-7">{{ icon }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppSvgIcon from "@/components/svgicons/AppSvgIcon.vue";

export default {
    name: "IconsShowcase",
    components: { AppSvgIcon },
    data() {
        return {
            icons: [
                "icon-info",
                "icon-clock",
                "icon-dashboard",
            ],
        };
    },
};
</script>