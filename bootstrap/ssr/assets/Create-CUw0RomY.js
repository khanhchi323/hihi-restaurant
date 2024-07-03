import { unref, withCtx, createVNode, createTextVNode, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-CE-vXLbb.js";
import { useForm, Head, Link } from "@inertiajs/inertia-vue3";
import "./ApplicationLogo-3H3I4iid.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      customer_name: "",
      phone_number: "",
      reservation_date: "",
      reservation_time: "",
      number_of_guests: "",
      table_id: ""
    });
    function submit() {
      form.post(route("reservation.store"));
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Create Reservation" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Create Reservation </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Create Reservation ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-6 flex justify-center items-center"${_scopeId}><div class="w-full max-w-2xl"${_scopeId}><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 bg-white border-b border-gray-200"${_scopeId}><form name="createForm"${_scopeId}><div class="flex flex-col"${_scopeId}><div class="mb-4"${_scopeId}><label class="block text-gray-700 text-sm font-bold mb-2" for="customer_name"${_scopeId}>Tên Khách Hàng:</label><input type="text" id="customer_name"${ssrRenderAttr("value", unref(form).customer_name)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required${_scopeId}></div><div class="mb-4"${_scopeId}><label class="block text-gray-700 text-sm font-bold mb-2" for="phone_number"${_scopeId}>Số Điện Thoại:</label><input type="text" id="phone_number"${ssrRenderAttr("value", unref(form).phone_number)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required${_scopeId}></div><div class="mb-4"${_scopeId}><label class="block text-gray-700 text-sm font-bold mb-2" for="reservation_date"${_scopeId}>Ngày Đặt:</label><input type="date" id="reservation_date"${ssrRenderAttr("value", unref(form).reservation_date)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required${_scopeId}></div><div class="mb-4"${_scopeId}><label class="block text-gray-700 text-sm font-bold mb-2" for="reservation_time"${_scopeId}>Giờ Đặt:</label><input type="time" id="reservation_time"${ssrRenderAttr("value", unref(form).reservation_time)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required${_scopeId}></div><div class="mb-4"${_scopeId}><label class="block text-gray-700 text-sm font-bold mb-2" for="number_of_guests"${_scopeId}>Số Khách:</label><input type="number" id="number_of_guests"${ssrRenderAttr("value", unref(form).number_of_guests)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required${_scopeId}></div><div class="mb-4"${_scopeId}><label class="block text-gray-700 text-sm font-bold mb-2" for="table_id"${_scopeId}>ID Bàn:</label><input type="text" id="table_id"${ssrRenderAttr("value", unref(form).table_id)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required${_scopeId}></div><div class="flex items-center justify-between mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "px-6 py-2 text-white bg-red-500 rounded-md focus:outline-none",
              href: _ctx.route("reservation.list")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Back `);
                } else {
                  return [
                    createTextVNode(" Back ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<button type="submit" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"${_scopeId}> Create </button></div></div></form></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-6 flex justify-center items-center" }, [
                createVNode("div", { class: "w-full max-w-2xl" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 bg-white border-b border-gray-200" }, [
                      createVNode("form", {
                        name: "createForm",
                        onSubmit: withModifiers(submit, ["prevent"])
                      }, [
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", {
                              class: "block text-gray-700 text-sm font-bold mb-2",
                              for: "customer_name"
                            }, "Tên Khách Hàng:"),
                            withDirectives(createVNode("input", {
                              type: "text",
                              id: "customer_name",
                              "onUpdate:modelValue": ($event) => unref(form).customer_name = $event,
                              class: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).customer_name]
                            ])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", {
                              class: "block text-gray-700 text-sm font-bold mb-2",
                              for: "phone_number"
                            }, "Số Điện Thoại:"),
                            withDirectives(createVNode("input", {
                              type: "text",
                              id: "phone_number",
                              "onUpdate:modelValue": ($event) => unref(form).phone_number = $event,
                              class: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).phone_number]
                            ])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", {
                              class: "block text-gray-700 text-sm font-bold mb-2",
                              for: "reservation_date"
                            }, "Ngày Đặt:"),
                            withDirectives(createVNode("input", {
                              type: "date",
                              id: "reservation_date",
                              "onUpdate:modelValue": ($event) => unref(form).reservation_date = $event,
                              class: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).reservation_date]
                            ])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", {
                              class: "block text-gray-700 text-sm font-bold mb-2",
                              for: "reservation_time"
                            }, "Giờ Đặt:"),
                            withDirectives(createVNode("input", {
                              type: "time",
                              id: "reservation_time",
                              "onUpdate:modelValue": ($event) => unref(form).reservation_time = $event,
                              class: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).reservation_time]
                            ])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", {
                              class: "block text-gray-700 text-sm font-bold mb-2",
                              for: "number_of_guests"
                            }, "Số Khách:"),
                            withDirectives(createVNode("input", {
                              type: "number",
                              id: "number_of_guests",
                              "onUpdate:modelValue": ($event) => unref(form).number_of_guests = $event,
                              class: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).number_of_guests]
                            ])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", {
                              class: "block text-gray-700 text-sm font-bold mb-2",
                              for: "table_id"
                            }, "ID Bàn:"),
                            withDirectives(createVNode("input", {
                              type: "text",
                              id: "table_id",
                              "onUpdate:modelValue": ($event) => unref(form).table_id = $event,
                              class: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).table_id]
                            ])
                          ]),
                          createVNode("div", { class: "flex items-center justify-between mb-6" }, [
                            createVNode(unref(Link), {
                              class: "px-6 py-2 text-white bg-red-500 rounded-md focus:outline-none",
                              href: _ctx.route("reservation.list")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Back ")
                              ]),
                              _: 1
                            }, 8, ["href"]),
                            createVNode("button", {
                              type: "submit",
                              class: "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                            }, " Create ")
                          ])
                        ])
                      ], 32)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Reservation/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
