import { mount } from "svelte";
import "./app.css";
//@ts-ignore App is exported
import App from "./App.svelte";

//@ts-ignore document exists
const target = document.getElementById("app");
if (!target) throw new Error("Root element not found");
const app = mount(App, {
  target,
});

export default app;
