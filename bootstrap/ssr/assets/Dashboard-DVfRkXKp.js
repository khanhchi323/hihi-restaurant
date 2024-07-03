import { mergeProps, unref, withCtx, createTextVNode, useSSRContext, computed, ref, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./AuthenticatedLayout-CE-vXLbb.js";
import { Link, Head } from "@inertiajs/inertia-vue3";
import "./ApplicationLogo-3H3I4iid.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
const _sfc_main$2 = {
  __name: "HomeforStaff",
  __ssrInlineRender: true,
  emits: ["add-to-order"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full" }, _attrs))}><div class="w-full h-20 p-4 bg-slate-100 flex items-center justify-between"><div><h1 class="text-3xl text-gray-700 font-semibold"> Welcome to our service! </h1><p class="text-sm text-gray-500"> Discover whatever you need easily </p></div><div>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "px-6 py-3 text-white font-bold bg-green-500 rounded-md focus:outline-none",
        href: _ctx.route("reservation.list")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Reservation `);
          } else {
            return [
              createTextVNode(" Reservation ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="w-full h-16 my-2 flex justify-center items-center"><div class="grid grid-cols-5 gap-6"><div class="flex flex-col items-center border hover:bg-orange-500 bg-white shadow-lg rounded-lg w-32 transition duration-300 hover:text-white"><div class="flex items-center"><img src="/images/beef.png" alt="Beef Icon" class="h-12 w-6 object-contain"><b class="ml-2 text-base icon-text">Beef</b></div></div><div class="flex flex-col items-center border hover:bg-orange-500 bg-white shadow-lg rounded-lg w-32 transition duration-300 hover:text-white"><div class="flex items-center"><img src="/images/chicken-leg.png" alt="Chicken Icon" class="h-12 w-6 object-contain"><b class="ml-2 text-base icon-text">Chicken</b></div></div><div class="flex flex-col items-center border hover:bg-orange-500 bg-white shadow-lg rounded-lg w-32 transition duration-300 hover:text-white"><div class="flex items-center"><img src="/images/meat.png" alt="Pork Icon" class="h-12 w-6 object-contain"><b class="ml-2 text-base icon-text">Pork</b></div></div><div class="flex flex-col items-center border hover:bg-orange-500 bg-white shadow-lg rounded-lg w-32 transition duration-300 hover:text-white"><div class="flex items-center"><img src="/images/fish.png" alt="Fish Icon" class="h-12 w-6 object-contain"><b class="ml-2 text-base icon-text">Fish</b></div></div><div class="flex flex-col items-center border hover:bg-orange-500 bg-white shadow-lg rounded-lg w-32 transition duration-300 hover:text-white"><div class="flex items-center"><img src="/images/hot-beverage.png" alt="Beverage Icon" class="h-12 w-6 object-contain"><b class="ml-2 text-base icon-text">Beverage</b></div></div></div></div><div class="w-full h-screen mb-6"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(_ctx.$page.props.menus, (menu) => {
        _push(`<div class="bg-white rounded-lg shadow-md p-2"><img${ssrRenderAttr("src", `/storage/${menu.image}`)} alt="Menu Image" class="h-44 w-full object-cover shadow-lg"><h2 class="text-lg text-center font-semibold text-gray-800 mt-2">${ssrInterpolate(menu.menu_name)}</h2><p class="text-gray-500">${ssrInterpolate(menu.description)}</p><p class="text-orange-400 font-bold"> Price: ${ssrInterpolate(menu.price)}</p><div class="text-center"><button class="mt-4 bg-white text-orange-600 border-solid hover:text-white hover:border-white hover:bg-orange-600 border-2 border-orange-400 text-red py-1 px-4 rounded"> Add to Order </button></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HomeforStaff.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Order",
  __ssrInlineRender: true,
  props: {
    orderItems: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const subtotal = computed(() => {
      return props.orderItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    });
    const discountOptions = [
      { label: "0%", value: 0 },
      { label: "10%", value: 0.1 },
      { label: "15%", value: 0.15 },
      { label: "20%", value: 0.2 }
    ];
    const selectedDiscount = ref(discountOptions[0].value);
    const totalSalesTax = computed(() => {
      return subtotal.value * 0.05;
    });
    const discountAmount = computed(() => {
      return subtotal.value * selectedDiscount.value;
    });
    const total = computed(() => {
      return subtotal.value + totalSalesTax.value - discountAmount.value;
    });
    const formatCurrency = (value) => {
      return `${value.toFixed(0)}`;
    };
    const showModal = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="flex justify-between flex-col mt-[21%]"><div><div class="w-full h-12 bg-white p-2"><b class="text-2xl text-gray-700">Current Order</b></div><div class="text-gray-800 w-full h-64 overflow-y-auto bg-white p-2"><!--[-->`);
      ssrRenderList(__props.orderItems, (item) => {
        _push(`<div class="flex items-center mb-2 py-2 pr-2 border-b border-gray-200"><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)} class="w-16 h-16 mr-4 rounded-sm shadow-lg"><div class="flex flex-col flex-grow"><span class="">${ssrInterpolate(item.name)}</span><span class="text-orange-400 font-bold">${ssrInterpolate(formatCurrency(item.price * item.quantity))}</span></div><div class="flex items-center"><button class="border text-black py-1 px-2 rounded"> - </button><span class="mx-2">${ssrInterpolate(item.quantity)}</span><button class="border text-black py-1 px-2 rounded"> + </button></div></div>`);
      });
      _push(`<!--]--></div></div><div><div class="bg-white shadow-md p-4"><div class="flex justify-between py-2"><span class="font-bold text-gray-700">Subtotal</span><span class="text-gray-700">${ssrInterpolate(formatCurrency(subtotal.value))} đ</span></div><div class="flex justify-between"><span class="font-bold text-gray-700 py-1">Discount</span><select class="w-1/2 border-gray-300 rounded p-1px shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"><!--[-->`);
      ssrRenderList(discountOptions, (option, index) => {
        _push(`<option${ssrRenderAttr("value", option.value)}>${ssrInterpolate(option.label)}</option>`);
      });
      _push(`<!--]--></select></div><div class="flex justify-between py-2"><span class="font-bold text-gray-700">Total sales tax</span><span class="text-gray-700">${ssrInterpolate(formatCurrency(totalSalesTax.value))} đ</span></div><hr class="my-"><div class="flex justify-between font-bold text-lg"><span>Total</span><span class="text-green-500">${ssrInterpolate(formatCurrency(total.value))}đ</span></div><div class="w-full text-center"><button class="bg-white rounded-md hover:text-white hover:border-white hover:bg-orange-600 text-orange-500 border-2 border-orange-400 text-center py-2 px-4 mt-4"> Continue to Payment </button></div></div></div></div>`);
      if (showModal.value) {
        _push(`<div class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"><div class="bg-white p-6 rounded-lg shadow-lg max-w-md text-center"><p class="text-lg font-semibold mb-4">Confirm Payment</p><div class="flex justify-between"><div class="px-2"><button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"> Not Paid </button></div><div class="px-2"><button class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"> Paid </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Order.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const orderItems = ref([]);
    const addToOrder = (menu) => {
      const existingItem = orderItems.value.find((item) => item.id === menu.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        orderItems.value.push({
          id: menu.id,
          name: menu.menu_name,
          price: menu.price,
          image: `/storage/${menu.image}`,
          quantity: 1
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$3, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Staff " }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><div class="w-[74%] bg-slate-100 pl-6 h-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { onAddToOrder: addToOrder }, null, _parent2, _scopeId));
            _push2(`</div><div class="fixed top-0 right-0 w-[26%] px-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, { orderItems: orderItems.value }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Staff " }),
              createVNode("div", null, [
                createVNode("div", { class: "w-[74%] bg-slate-100 pl-6 h-full" }, [
                  createVNode(_sfc_main$2, { onAddToOrder: addToOrder })
                ]),
                createVNode("div", { class: "fixed top-0 right-0 w-[26%] px-4" }, [
                  createVNode(_sfc_main$1, { orderItems: orderItems.value }, null, 8, ["orderItems"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
