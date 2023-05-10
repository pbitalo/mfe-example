import { createApp } from "vue";
import Hello from "./component/Hello";

const fetch_el = document.getElementById("dev-vue");

const mount = (el) => {
  const app = createApp(Hello);
  app.mount(el);
};

if (fetch_el) {
  mount(fetch_el);
}

export { mount };
