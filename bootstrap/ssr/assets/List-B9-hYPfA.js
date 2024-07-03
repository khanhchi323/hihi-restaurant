import { unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-CE-vXLbb.js";
import { useForm, Head, Link } from "@inertiajs/inertia-vue3";
import "./ApplicationLogo-3H3I4iid.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "List",
  __ssrInlineRender: true,
  props: ["reservations"],
  setup(__props) {
    const props = __props;
    const form = useForm();
    function destroy(id) {
      if (confirm("Bạn có chắc chắn muốn xóa không?")) {
        form.delete(route("reservation.destroy", id));
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Reservation" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Reservation Management </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Reservation Management ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-6"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 bg-white border-b border-gray-200 flex items-center justify-between"${_scopeId}><div class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none",
              href: _ctx.route("reservation.create")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Create `);
                } else {
                  return [
                    createTextVNode(" Create ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><table class="w-full"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th class="px-4 py-2 w-16"${_scopeId}>ID</th><th class="px-4 py-2 w-1/5"${_scopeId}>Customer Name</th><th class="px-4 py-2 w-1/5"${_scopeId}>Phone Number</th><th class="px-4 py-2 w-1/6"${_scopeId}> Reservation Date </th><th class="px-4 py-2 w-1/6"${_scopeId}> Reservation Time </th><th class="px-4 py-2 w-1/4"${_scopeId}> Number of Guests </th><th class="px-4 py-2 w-16"${_scopeId}>Table ID</th><th class="px-4 py-2"${_scopeId}>Actions</th></tr></thead><tbody class="text-center"${_scopeId}><!--[-->`);
            ssrRenderList(props.reservations, (reservation) => {
              _push2(`<tr class="text-center"${_scopeId}><td class="border px-4 py-2"${_scopeId}>${ssrInterpolate(reservation.reservation_id)}</td><td class="border px-4 py-2"${_scopeId}>${ssrInterpolate(reservation.customer_name)}</td><td class="border px-4 py-2"${_scopeId}>${ssrInterpolate(reservation.phone_number)}</td><td class="border px-4 py-2"${_scopeId}>${ssrInterpolate(reservation.reservation_date)}</td><td class="border px-4 py-2"${_scopeId}>${ssrInterpolate(reservation.reservation_time)}</td><td class="border px-4 py-2"${_scopeId}>${ssrInterpolate(reservation.number_of_guests)}</td><td class="border px-4 py-2"${_scopeId}>${ssrInterpolate(reservation.table_id)}</td><td class="border px-4 py-2"${_scopeId}><div class="flex items-center justify-center space-x-2"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route(
                  "reservation.edit",
                  reservation.id
                ),
                class: "px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Edit `);
                  } else {
                    return [
                      createTextVNode(" Edit ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<button class="px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"${_scopeId}> Delete </button></div></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (props.reservations && props.reservations.length === 0) {
              _push2(`<tr${_scopeId}><td colspan="8" class="border px-4 py-2 text-center"${_scopeId}> Không có danh mục nào </td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-6" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 bg-white border-b border-gray-200 flex items-center justify-between" }, [
                      createVNode("div", { class: "flex" }, [
                        createVNode(unref(Link), {
                          class: "px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none",
                          href: _ctx.route("reservation.create")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Create ")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ]),
                    createVNode("table", { class: "w-full" }, [
                      createVNode("thead", null, [
                        createVNode("tr", null, [
                          createVNode("th", { class: "px-4 py-2 w-16" }, "ID"),
                          createVNode("th", { class: "px-4 py-2 w-1/5" }, "Customer Name"),
                          createVNode("th", { class: "px-4 py-2 w-1/5" }, "Phone Number"),
                          createVNode("th", { class: "px-4 py-2 w-1/6" }, " Reservation Date "),
                          createVNode("th", { class: "px-4 py-2 w-1/6" }, " Reservation Time "),
                          createVNode("th", { class: "px-4 py-2 w-1/4" }, " Number of Guests "),
                          createVNode("th", { class: "px-4 py-2 w-16" }, "Table ID"),
                          createVNode("th", { class: "px-4 py-2" }, "Actions")
                        ])
                      ]),
                      createVNode("tbody", { class: "text-center" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(props.reservations, (reservation) => {
                          return openBlock(), createBlock("tr", {
                            key: reservation.id,
                            class: "text-center"
                          }, [
                            createVNode("td", { class: "border px-4 py-2" }, toDisplayString(reservation.reservation_id), 1),
                            createVNode("td", { class: "border px-4 py-2" }, toDisplayString(reservation.customer_name), 1),
                            createVNode("td", { class: "border px-4 py-2" }, toDisplayString(reservation.phone_number), 1),
                            createVNode("td", { class: "border px-4 py-2" }, toDisplayString(reservation.reservation_date), 1),
                            createVNode("td", { class: "border px-4 py-2" }, toDisplayString(reservation.reservation_time), 1),
                            createVNode("td", { class: "border px-4 py-2" }, toDisplayString(reservation.number_of_guests), 1),
                            createVNode("td", { class: "border px-4 py-2" }, toDisplayString(reservation.table_id), 1),
                            createVNode("td", { class: "border px-4 py-2" }, [
                              createVNode("div", { class: "flex items-center justify-center space-x-2" }, [
                                createVNode(unref(Link), {
                                  href: _ctx.route(
                                    "reservation.edit",
                                    reservation.id
                                  ),
                                  class: "px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Edit ")
                                  ]),
                                  _: 2
                                }, 1032, ["href"]),
                                createVNode("button", {
                                  onClick: ($event) => destroy(reservation.id),
                                  class: "px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"
                                }, " Delete ", 8, ["onClick"])
                              ])
                            ])
                          ]);
                        }), 128)),
                        props.reservations && props.reservations.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                          createVNode("td", {
                            colspan: "8",
                            class: "border px-4 py-2 text-center"
                          }, " Không có danh mục nào ")
                        ])) : createCommentVNode("", true)
                      ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Reservation/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
