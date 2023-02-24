import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
const video = "/_app/immutable/assets/prom.1c455508.mp4";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".title-bar.svelte-1cghmt{background:var(--lighter-bg);padding:10pt;text-align:center}video.svelte-1cghmt{height:80vh;width:100%;background:black}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let urlParams = $page.params.slug;
  let mediaTitle = urlParams.split("-")[0];
  let mediaSeason = urlParams.split("-")[1];
  let mediaEpisode = urlParams.split("-")[2];
  $$result.css.add(css);
  $$unsubscribe_page();
  return `

${$$result.head += `<!-- HEAD_svelte-cofjwh_START -->${$$result.title = `<title>Watch</title>`, ""}<!-- HEAD_svelte-cofjwh_END -->`, ""}



<div class="${"title-bar svelte-1cghmt"}">${escape(mediaTitle)}
	${mediaSeason ? `: S${escape(mediaSeason)}E${escape(mediaEpisode)}` : ``}</div>


<video${add_attribute("src", video, 0)} controls autoplay class="${"svelte-1cghmt"}"></video>

`;
});
export {
  Page as default
};
