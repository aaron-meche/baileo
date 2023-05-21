import { c as create_ssr_component, a as validate_store, b as subscribe, e as escape, v as validate_component } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
import { s as storage } from "../../chunks/main.js";
const style = "";
const SideNavbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".wrapper.s-AwqogTx13ztS.s-AwqogTx13ztS{display:grid;row-gap:5px;padding:25px}.item.s-AwqogTx13ztS.s-AwqogTx13ztS{display:grid;align-items:center;grid-template-columns:min-content auto;column-gap:10px;padding:10px 20px;border-radius:10px;font-size:12pt;font-weight:400;cursor:pointer}.item.s-AwqogTx13ztS.s-AwqogTx13ztS:hover{background:var(--l-gradient)}.item.active.s-AwqogTx13ztS.s-AwqogTx13ztS{background:var(--b-gradient);font-weight:500}.item.active.s-AwqogTx13ztS.s-AwqogTx13ztS:hover{background:var(--b-gradient)}.item.s-AwqogTx13ztS img.s-AwqogTx13ztS{height:25px;display:inline-block}",
  map: null
};
const Side_Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `

<div class="wrapper s-AwqogTx13ztS"><button class="${"item " + escape($page.url.pathname === "/" ? "active" : "", true) + " s-AwqogTx13ztS"}"><img src="icons/home.svg" alt="Icon" class="s-AwqogTx13ztS">
        Home
    </button>

    <button class="${"item " + escape($page.url.pathname === "/search" ? "active" : "", true) + " s-AwqogTx13ztS"}"><img src="icons/search.svg" alt="Icon" class="s-AwqogTx13ztS">
        Search
    </button>

    <button class="${"item " + escape($page.url.pathname === "/watch" ? "active" : "", true) + " s-AwqogTx13ztS"}"><img src="icons/play.svg" alt="Icon" class="s-AwqogTx13ztS">
        Watch
    </button></div>

`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.s-7IPF32Wcq3s8.s-7IPF32Wcq3s8{position:relative}.backdrop.s-7IPF32Wcq3s8.s-7IPF32Wcq3s8{position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:9;background:rgb(0, 0, 0, 0.5);display:none}.side-bar.s-7IPF32Wcq3s8.s-7IPF32Wcq3s8{position:fixed;top:0;right:100vw;height:100vh;width:300px;max-width:90vw;background:var(--l-fg);z-index:10;backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);-moz-backdrop-filter:blur(15px);box-shadow:0 0 25px black;opacity:0;transition:transform 300ms, opacity 300ms}.top-bar.s-7IPF32Wcq3s8.s-7IPF32Wcq3s8{position:sticky;top:0;display:grid;grid-template-columns:min-content min-content;padding:10px 20px;background:var(--bg);z-index:8}.top-bar.s-7IPF32Wcq3s8>.s-7IPF32Wcq3s8{padding:10px;border-bottom:solid 2px rgb(0, 0, 0, 0)}.top-bar.s-7IPF32Wcq3s8>.s-7IPF32Wcq3s8:hover{border-color:var(--accent)}.top-bar.s-7IPF32Wcq3s8 img.s-7IPF32Wcq3s8{height:25px}.top-bar.s-7IPF32Wcq3s8 .logo.s-7IPF32Wcq3s8{display:inline-grid;grid-template-columns:min-content min-content;column-gap:5px;align-items:center;font-size:12pt;font-weight:500;color:var(--accent)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function default_storage_value(attr, val) {
    if (!storage.exists(attr)) {
      storage.set(attr, val);
    }
  }
  default_storage_value("watching title", "The Office");
  default_storage_value("shuffle", "false");
  default_storage_value("autoplay", "true");
  default_storage_value("autoplay buffer", 30);
  default_storage_value("menu status", "true");
  $$result.css.add(css);
  return `

<div class="app s-7IPF32Wcq3s8">
    <div class="backdrop s-7IPF32Wcq3s8"></div>
    <div class="side-bar s-7IPF32Wcq3s8">${validate_component(Side_Navbar, "SideNavbar").$$render($$result, {}, {}, {})}</div> 
    
    <div class="content"><div class="top-bar s-7IPF32Wcq3s8"><button class="s-7IPF32Wcq3s8"><img src="icons/menu.svg" alt="Icon" class="s-7IPF32Wcq3s8"></button>

            <button class="item logo s-7IPF32Wcq3s8"><img src="logo.png" alt="Icon" class="s-7IPF32Wcq3s8">
                baileo
            </button></div>

        ${slots.default ? slots.default({}) : ``}</div></div>

`;
});
export {
  Layout as default
};
