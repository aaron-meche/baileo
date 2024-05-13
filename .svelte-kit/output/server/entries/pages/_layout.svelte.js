import { c as create_ssr_component } from "../../chunks/ssr.js";
import "../../chunks/data.js";
/* empty css                                                      *//* empty css                                                 */const main = "";
const style = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <div class="app"><div class="body">${slots.default ? slots.default({}) : ``}</div></div> `;
});
export {
  Layout as default
};
