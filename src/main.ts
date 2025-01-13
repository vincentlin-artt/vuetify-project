// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from "vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles"; // 必須：引入 Vuetify 樣式
import "@mdi/font/css/materialdesignicons.css"; // 必須：引入 Material Design Icons
import "vuetify/dist/vuetify.min.css";
// Components
import App from "./App.vue";
//import Vuetify from "@/plugins/vuetify";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).mount("#app");
