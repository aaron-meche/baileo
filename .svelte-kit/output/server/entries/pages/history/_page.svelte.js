import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".error.svelte-h1ed74{width:fit-content;padding:15pt;margin:15pt auto;outline:solid 1pt red;background:rgb(50 0 0);text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `

${$$result.head += `<!-- HEAD_svelte-cp9d7c_START -->${$$result.title = `<title>History</title>`, ""}<!-- HEAD_svelte-cp9d7c_END -->`, ""}



<div class="${"error svelte-h1ed74"}">No watch history detected...
</div>

`;
});
export {
  Page as default
};
