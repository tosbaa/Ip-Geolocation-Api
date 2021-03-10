import { createApp } from "vue";
import App from "./App.vue";
import Header from "./layout/Header.vue";
import Map from "./components/Map.vue";

const app = createApp(App);
app.component("app-header", Header);
app.component("map-component", Map);
app.mount("#app");
