import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import router from "@/router";

// 引入全域樣式入口 (SCSS 變數已透過 Vite 注入，此處為基礎樣式與 reset)
import "@/assets/css/main.scss";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount("#app");
