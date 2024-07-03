import { onMounted, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-CE-vXLbb.js";
import { useForm, Head, Link } from "@inertiajs/inertia-vue3";
import "./ApplicationLogo-3H3I4iid.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "List",
  __ssrInlineRender: true,
  props: ["areas"],
  setup(__props) {
    const props = __props;
    const form = useForm();
    function destroy(id) {
      if (confirm("Bạn có chắc chắn muốn xóa không?")) {
        form.delete(route("area.destroy", id));
      }
    }
    onMounted(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "List Area" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Area Management </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Area Management ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-6"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 bg-white border-b border-gray-200"${_scopeId}><div class="flex items-center justify-between mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none",
              href: _ctx.route("area.create")
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
            _push2(`</div><table class="w-full bg-gray-100"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th class="border px-4 py-2 w-32"${_scopeId}>ID</th><th class="border px-4 py-2"${_scopeId}>Name</th><th class="border px-4 py-2 w-32"${_scopeId}> Action </th></tr></thead><tbody class="text-center"${_scopeId}><!--[-->`);
            ssrRenderList(props.areas, (area) => {
              _push2(`<tr${_scopeId}><td class="border px-4 py-2"${_scopeId}>${ssrInterpolate(area.id)}</td><td class="border px-4 py-2"${_scopeId}>${ssrInterpolate(area.area_name)}</td><td class="border px-4 py-2"${_scopeId}><div class="flex flex-col space-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                tabIndex: "1",
                class: "px-4 py-2 text-sm text-center text-white bg-blue-500 rounded",
                href: _ctx.route("area.edit", area.id)
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
              _push2(`<button class="px-2 py-1 bg-red-500 text-white text-center rounded hover:bg-red-600"${_scopeId}> Delete </button></div></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (props.areas && props.areas.length === 0) {
              _push2(`<tr${_scopeId}><td colspan="4" class="border px-4 py-2 text-center"${_scopeId}> Không có danh mục nào. </td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-6" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 bg-white border-b border-gray-200" }, [
                      createVNode("div", { class: "flex items-center justify-between mb-6" }, [
                        createVNode(unref(Link), {
                          class: "px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none",
                          href: _ctx.route("area.create")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Create ")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ]),
                      createVNode("table", { class: "w-full bg-gray-100" }, [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", { class: "border px-4 py-2 w-32" }, "ID"),
                            createVNode("th", { class: "border px-4 py-2" }, "Name"),
                            createVNode("th", { class: "border px-4 py-2 w-32" }, " Action ")
                          ])
                        ]),
                        createVNode("tbody", { class: "text-center" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(props.areas, (area) => {
                            return openBlock(), createBlock("tr", {
                              key: area.id
                            }, [
                              createVNode("td", { class: "border px-4 py-2" }, toDisplayString(area.id), 1),
                              createVNode("td", { class: "border px-4 py-2" }, toDisplayString(area.area_name), 1),
                              createVNode("td", { class: "border px-4 py-2" }, [
                                createVNode("div", { class: "flex flex-col space-y-2" }, [
                                  createVNode(unref(Link), {
                                    tabIndex: "1",
                                    class: "px-4 py-2 text-sm text-center text-white bg-blue-500 rounded",
                                    href: _ctx.route("area.edit", area.id)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Edit ")
                                    ]),
                                    _: 2
                                  }, 1032, ["href"]),
                                  createVNode("button", {
                                    onClick: ($event) => destroy(area.id),
                                    class: "px-2 py-1 bg-red-500 text-white text-center rounded hover:bg-red-600"
                                  }, " Delete ", 8, ["onClick"])
                                ])
                              ])
                            ]);
                          }), 128)),
                          props.areas && props.areas.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                            createVNode("td", {
                              colspan: "4",
                              class: "border px-4 py-2 text-center"
                            }, " Không có danh mục nào. ")
                          ])) : createCommentVNode("", true)
                        ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Area/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
