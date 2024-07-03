import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/inertia-vue3";
const _sfc_main = {
  __name: "Booking",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name_user: "",
      name_table: "",
      time: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative py-6 h-full" }, _attrs))}><div class="absolute inset-0 bg-black bg-opacity-40"></div><div class="relative z-10 max-w-2xl mx-auto sm:px-6 lg:px-8"><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg pt-4"><div class="text-center font-bold text-2xl">Create Booking</div><div class="px-6 pb-6 bg-white border-b border-gray-200"><form><div class="mb-4"><label for="name_user" class="block text-gray-700">User Name</label><input${ssrRenderAttr("value", unref(form).name_user)} type="text" id="name_user" name="name_user" class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></div><div class="mb-4"><label for="name_table" class="block text-gray-700">Table Name</label><input${ssrRenderAttr("value", unref(form).name_table)} type="text" id="name_table" name="name_table" class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></div><div class="mb-4"><label for="time" class="block text-gray-700">Time</label><input${ssrRenderAttr("value", unref(form).time)} type="datetime-local" id="time" name="time" class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></div><div class="flex items-center justify-between mb-6"><button type="submit" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-green-600"> Back </button><button type="submit" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"> Save </button></div></form></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Booking.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
