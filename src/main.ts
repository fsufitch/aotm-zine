import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router.ts";
import { addDebugHook } from "./debug.ts";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

addDebugHook(globalThis, "aotmDebug");
