import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const homeIcon = "/_app/immutable/assets/home.a30263cd.svg";
const playIcon = "/_app/immutable/assets/play.e490d560.svg";
const historyIcon = "/_app/immutable/assets/history.2e55d942.svg";
const settingsIcon = "/_app/immutable/assets/settings.840bf221.svg";
const searchIcon = "/_app/immutable/assets/search.65df0471.svg";
const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".navbar.svelte-vvgul{padding:15pt 0;text-align:center}.icon.svelte-vvgul{width:25pt;padding:7pt;border-radius:10pt;margin-bottom:15pt}.icon.active.svelte-vvgul{background:var(--hover-bg);box-shadow:inset 0 -2pt 0 0 var(--accent)}.icon.svelte-vvgul:hover{background:var(--hover-bg)}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `

<div class="${"navbar svelte-vvgul"}"><a href="${"/"}"><img class="${"icon " + escape($page.url.pathname === "/" ? "active" : "", true) + " svelte-vvgul"}"${add_attribute("src", homeIcon, 0)} alt="${"Home"}"></a>

    <a href="${"/watch/$continue"}"><img class="${"icon " + escape(
    $page.url.pathname.split("/")[1] === "watch" ? "active" : "",
    true
  ) + " svelte-vvgul"}"${add_attribute("src", playIcon, 0)} alt="${"Watch"}"></a>
    
    <a href="${"/history"}"><img class="${"icon " + escape($page.url.pathname === "/history" ? "active" : "", true) + " svelte-vvgul"}"${add_attribute("src", historyIcon, 0)} alt="${"History"}"></a>

    <a href="${"/settings"}"><img class="${"icon " + escape($page.url.pathname === "/settings" ? "active" : "", true) + " svelte-vvgul"}"${add_attribute("src", settingsIcon, 0)} alt="${"Settings"}"></a>

    <a href="${"/search"}"><img class="${"icon " + escape($page.url.pathname === "/search" ? "active" : "", true) + " svelte-vvgul"}"${add_attribute("src", searchIcon, 0)} alt="${"Search"}"></a></div>

`;
});
const style = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-15vbcl0{height:100vh;width:100vw;font-size:0}.hemisphere.svelte-15vbcl0{height:100vh;float:left;font-size:12pt;overflow:auto}:root{--navbar-width:50pt}.left.svelte-15vbcl0{width:var(--navbar-width)}.right.svelte-15vbcl0{width:calc(100vw - var(--navbar-width));background:var(--darker-bg)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `

<div class="${"app svelte-15vbcl0"}"><div class="${"left hemisphere svelte-15vbcl0"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}</div>
    <div class="${"right hemisphere svelte-15vbcl0"}">${slots.default ? slots.default({}) : ``}</div></div>

`;
});
export {
  Layout as default
};
