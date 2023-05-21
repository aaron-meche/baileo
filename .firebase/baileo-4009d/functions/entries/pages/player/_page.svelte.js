import { c as create_ssr_component } from "../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".player.s-whEOB59-BsBH{position:relative;width:80vw;aspect-ratio:16 / 9;background:black;margin:auto}.video.s-whEOB59-BsBH{height:100%;width:100%;background:url('video.png') center center no-repeat;background-size:cover}.interface.s-whEOB59-BsBH{width:calc(100% - 30pt);padding:25pt;padding-top:100pt;background:linear-gradient(to top, black, rgb(0, 0, 0, 0));position:absolute;bottom:0;left:0}.information.s-whEOB59-BsBH{margin-bottom:15pt}.title.s-whEOB59-BsBH{font-size:15pt;font-weight:700}.caption.s-whEOB59-BsBH{font-size:11pt;font-weight:500;color:gray}.progress-wrapper.s-whEOB59-BsBH{display:grid;row-gap:1pt}.bar-wrapper.s-whEOB59-BsBH{background:gray;border-radius:100vh;overflow:hidden}.bar.s-whEOB59-BsBH{width:25%;padding:3pt 0;background:lightgray}.time-wrapper.s-whEOB59-BsBH{display:grid;grid-template-columns:1fr 1fr;font-size:10pt;color:lightgray}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `

${$$result.head += `<!-- HEAD_svelte-2vmd0l_START -->${$$result.title = `<title>Player</title>`, ""}<!-- HEAD_svelte-2vmd0l_END -->`, ""}

<div class="player s-whEOB59-BsBH"><div class="video s-whEOB59-BsBH"></div>
    <div class="interface s-whEOB59-BsBH"><div class="information s-whEOB59-BsBH"><div class="title s-whEOB59-BsBH">The Office</div>
            <div class="caption s-whEOB59-BsBH">S2 E4, Customer Relations</div></div>
        <div class="progress-wrapper s-whEOB59-BsBH"><div class="bar-wrapper s-whEOB59-BsBH"><div class="bar s-whEOB59-BsBH"></div></div>
            <div class="time-wrapper s-whEOB59-BsBH"><div class="past">9:26</div>
                <div class="future" style="text-align: right;">23:49</div></div></div></div></div>

`;
});
export {
  Page as default
};
