// import "./main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; // add store if you're using Vuex

createApp(App).use(router).use(store).mount("#app");
