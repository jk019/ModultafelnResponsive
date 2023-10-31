import App from "./App.svelte";

var app = new App({
  target: document.body,
});

export const prerender = true;
export default app;
