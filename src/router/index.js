import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Dashboard from "@/views/admin/dashboard/Dashboard.vue";
import Navigation from "@/components/navigation/Navigation.vue";
import Header from "@/components/header/Header.vue";
import IconsShowcase from "@/components/common/IconsShowcase/IconsShowcase.vue";
import StyleGuides from "@/components/style-guide/StyleGuides.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/dashboard",
    name: "Dashboard",
    props: true,
    params: true,
    meta: { requiresAuth: true, title: "Dashboard" },
    components: {
      default: Dashboard,
      nav: Navigation,
      header: Header,
    },
  },
  {
    path: "/icons-showcase",
    name: "IconsShowcase",
    component: IconsShowcase,
    meta: { requiresAuth: false, title: "Style Guide" },
  },
  {
    path: '/style-guide',
    name: 'StyleGuides',
    props: true,
    params: true,
    meta: { requiresAuth: true, title: 'style Guide' },
    components: {
      default: StyleGuides,
      nav: Navigation,
      header: Header
    }
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: "history",
  routes,
});

export default router;
