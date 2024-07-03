import { mergeProps, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { Head } from "@inertiajs/inertia-vue3";
import { N as NavbarCustom } from "./NavbarCustom-C0eHW9sC.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full" }, _attrs))}><div class="w-full h-20 p-4 bg-slate-100 flex items-center justify-between"><div><h1 class="text-3xl font-bold text-gray-700"> Welcome to our service! </h1><p class="text-sm text-gray-500"> Discover whatever you need easily </p></div><div class="my-4 w-[40%] flex justify-center border rounded-md relative"><input type="text" placeholder="Search..." class="pl-8 border-none rounded-lg w-full"><img src="/images/loupe.png" alt="Search Icon" class="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-auto"></div></div><div class="w-full h-16 my-6 flex justify-center items-center"><div class="grid grid-cols-5 gap-6"><div class="flex flex-col items-center border hover:bg-orange-500 bg-white shadow-lg rounded-lg w-32 transition duration-300 hover:text-white"><div class="flex items-center"><img src="/images/beef.png" alt="Beef Icon" class="h-12 w-6 object-contain"><b class="ml-2 text-base icon-text">Beef</b></div></div><div class="flex flex-col items-center border hover:bg-orange-500 bg-white shadow-lg rounded-lg w-32 transition duration-300 hover:text-white"><div class="flex items-center"><img src="/images/chicken-leg.png" alt="Chicken Icon" class="h-12 w-6 object-contain"><b class="ml-2 text-base icon-text">Chicken</b></div></div><div class="flex flex-col items-center border hover:bg-orange-500 bg-white shadow-lg rounded-lg w-32 transition duration-300 hover:text-white"><div class="flex items-center"><img src="/images/meat.png" alt="Pork Icon" class="h-12 w-6 object-contain"><b class="ml-2 text-base icon-text">Pork</b></div></div><div class="flex flex-col items-center border hover:bg-orange-500 bg-white shadow-lg rounded-lg w-32 transition duration-300 hover:text-white"><div class="flex items-center"><img src="/images/fish.png" alt="Fish Icon" class="h-12 w-6 object-contain"><b class="ml-2 text-base icon-text">Fish</b></div></div><div class="flex flex-col items-center border hover:bg-orange-500 bg-white shadow-lg rounded-lg w-32 transition duration-300 hover:text-white"><div class="flex items-center"><img src="/images/hot-beverage.png" alt="Beverage Icon" class="h-12 w-6 object-contain"><b class="ml-2 text-base icon-text">Beverage</b></div></div></div></div><div class="w-full h-screen mb-6"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
  ssrRenderList(_ctx.$page.props.menus, (menu) => {
    _push(`<div class="bg-white rounded-lg shadow-md p-2"><img${ssrRenderAttr("src", `/storage/${menu.image}`)} alt="Menu Image" class="h-44 w-full object-cover shadow-lg"><div class="text-lg text-center font-semibold text-gray-800 mt-2">${ssrInterpolate(menu.menu_name)}</div><div class="text-gray-500">${ssrInterpolate(menu.description)}</div><div class="text-orange-500 font-bold text-bottom"> Price: ${ssrInterpolate(menu.price)}</div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/MenuforGuest.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MenuforGuest = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "PublicLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Menu" }, null, _parent));
      _push(`<div class="flex"><div class="fixed top-0 left-0 w-[6%] bg-white h-[100vh]">`);
      _push(ssrRenderComponent(NavbarCustom, null, null, _parent));
      _push(`</div><div class="ml-[6%] w-[94%] bg-slate-100 px-6 h-full">`);
      _push(ssrRenderComponent(MenuforGuest, null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PublicLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
