import { unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const Logo = "/build/assets/logohihi-CPnWUKt3.png";
const _sfc_main = {
  __name: "NavbarCustom",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-4a46ea04><div class="flex flex-col items-center" data-v-4a46ea04><div data-v-4a46ea04><a href="/Homepage" data-v-4a46ea04><img${ssrRenderAttr("src", unref(Logo))} alt="Logo" class="w-16 h-14 mt-4 mb-2" data-v-4a46ea04></a></div><div class="flex flex-col items-center my-4" data-v-4a46ea04><a href="/HomePage" class="group relative flex items-center justify-center mb-2 icon" data-v-4a46ea04><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon size-6 my-4 group-hover:text-orangered" data-v-4a46ea04><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" data-v-4a46ea04></path></svg><div class="absolute top-0 left-12 w-[3px] h-0 bg-red-500 bg-line transition-all" data-v-4a46ea04></div></a><a href="/Menu" class="group relative flex items-center justify-center mb-2 icon" data-v-4a46ea04><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon size-6 my-4 group-hover:text-orangered" data-v-4a46ea04><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" data-v-4a46ea04></path></svg><div class="absolute top-0 left-12 w-[3px] h-0 bg-red-500 bg-line transition-all" data-v-4a46ea04></div></a><a href="#" class="group relative flex items-center justify-center mb-2 icon" data-v-4a46ea04><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon size-6 my-4 group-hover:text-orangered" data-v-4a46ea04><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" data-v-4a46ea04></path></svg><div class="absolute top-0 left-12 w-[3px] h-0 bg-red-500 bg-line transition-all" data-v-4a46ea04></div></a><a href="#" class="group relative flex items-center justify-center mb-2 icon" data-v-4a46ea04><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon size-6 my-4 group-hover:text-orangered" data-v-4a46ea04><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" data-v-4a46ea04></path></svg><div class="absolute top-0 left-12 w-[3px] h-0 bg-red-500 bg-line transition-all" data-v-4a46ea04></div></a></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavbarCustom.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NavbarCustom = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4a46ea04"]]);
export {
  NavbarCustom as N
};
