import { c as create_ssr_component } from "../../../chunks/ssr.js";
import "../../../chunks/data.js";
/* empty css                                                   */const css = {
  code: ".window.svelte-1o28opk{height:100vmax;width:100vmax;position:fixed;top:0;left:0;background:black}.ui.svelte-1o28opk{display:grid;grid-template-columns:2fr 3fr;color:red;font-size:36pt;font-weight:300;opacity:0.5;cursor:none\n    }.clock.svelte-1o28opk{height:100%;font-family:LexendDeca;text-align:center}.time.svelte-1o28opk{padding-top:36pt;margin:auto;font-size:8vmax;font-weight:600}video.svelte-1o28opk{display:block;height:fit-content;width:100%;aspect-ratio:16 / 9;border-radius:4pt;opacity:0.5;background:black}.media-info.svelte-1o28opk{font-size:5vmax}.media-caption.svelte-1o28opk{font-family:LexendDeca}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` <div class="window svelte-1o28opk"><div class="ui svelte-1o28opk">${``}</div></div> `;
});
export {
  Page as default
};
