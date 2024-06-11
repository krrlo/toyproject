import { createApp } from "vue";
import App from "./App.vue";

//라우터
import router from "./router/index";

//부트스트랩
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

createApp(App).use(router).use(BootstrapVue3).mount("#app");
