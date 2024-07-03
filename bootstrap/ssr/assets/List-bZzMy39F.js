import { onMounted, unref, withCtx, createVNode, createTextVNode, withDirectives, openBlock, createBlock, Fragment, renderList, toDisplayString, vModelSelect, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-CE-vXLbb.js";
import { useForm, Head, Link } from "@inertiajs/inertia-vue3";
import "./ApplicationLogo-3H3I4iid.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "List",
  __ssrInlineRender: true,
  props: ["menus", "categories"],
  setup(__props) {
    const props = __props;
    const form = useForm();
    function destroy(id) {
      if (confirm("Bạn có chắc chắn muốn xóa không?")) {
        form.delete(route("menu.destroy", id));
      }
    }
    onMounted(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "List Menu" }, null, _parent));
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
            _push2(`<div class="py-6"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 bg-white border-b border-gray-200 flex"${_scopeId}><div class="w-full"${_scopeId}><label for="category" class="block text-sm font-medium text-gray-700"${_scopeId}> Category </label><select id="category_name" class="mt-1 p-2 border rounded-md w-64"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(_ctx.selectedCategory) ? ssrLooseContain(_ctx.selectedCategory, "") : ssrLooseEqual(_ctx.selectedCategory, "")) ? " selected" : ""}${_scopeId}>All</option><!--[-->`);
            ssrRenderList(props.categories, (category_name, index) => {
              _push2(`<option${ssrRenderAttr("value", _ctx.category)}${_scopeId}>${ssrInterpolate(category_name)}</option>`);
            });
            _push2(`<!--]--></select></div><div class="flex mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none",
              href: _ctx.route("menu.create")
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
            _push2(`</div></div><table class="w-full"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th class="px-4 py-2 w-16"${_scopeId}>ID</th><th class="px-4 py-2 w-1/5"${_scopeId}>Category</th><th class="px-4 py-2 w-1/5"${_scopeId}>Name</th><th class="px-4 py-2 w-1/6"${_scopeId}>Price</th><th class="px-4 py-2 w-1/6"${_scopeId}>Description</th><th class="px-4 py-2 w-1/4"${_scopeId}>Image</th><th class="px-4 py-2 w-16"${_scopeId}>Actions</th></tr></thead><tbody class="text-center"${_scopeId}><!--[-->`);
            ssrRenderList(props.menus, (menu) => {
              _push2(`<tr class="text-center"${_scopeId}><td class="border px-2 py-2 w-16"${_scopeId}>${ssrInterpolate(menu.id)}</td><td class="border px-4 py-2 w-1/6"${_scopeId}>${ssrInterpolate(menu.category_name)}</td><td class="border px-4 py-2 w-1/5"${_scopeId}>${ssrInterpolate(menu.menu_name)}</td><td class="border px-4 py-2 w-1/6"${_scopeId}>${ssrInterpolate(menu.price)}</td><td class="border px-4 py-2 w-1/5"${_scopeId}>${ssrInterpolate(menu.description)}</td><td class="border px-4 py-2"${_scopeId}><img${ssrRenderAttr("src", `/storage/${menu.image}`)} alt="Menu Image" class="mx-auto" style="${ssrRenderStyle({ "width": "100px", "height": "100px", "object-fit": "cover" })}"${_scopeId}></td><td class="border px-4 py-2"${_scopeId}><div class="flex flex-col space-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                tabIndex: "1",
                className: "px-4 py-2 text-sm text-white bg-blue-500 rounded",
                href: _ctx.route("menu.edit", menu.id)
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
              _push2(`<button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"${_scopeId}> Delete </button></div></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (props.menus && props.menus.length === 0) {
              _push2(`<tr${_scopeId}><td colspan="4" class="border px-4 py-2 text-center"${_scopeId}> Không có danh mục nào </td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-6" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 bg-white border-b border-gray-200 flex" }, [
                      createVNode("div", { class: "w-full" }, [
                        createVNode("label", {
                          for: "category",
                          class: "block text-sm font-medium text-gray-700"
                        }, " Category "),
                        withDirectives(createVNode("select", {
                          id: "category_name",
                          "onUpdate:modelValue": ($event) => _ctx.selectedCategory = $event,
                          class: "mt-1 p-2 border rounded-md w-64"
                        }, [
                          createVNode("option", { value: "" }, "All"),
                          (openBlock(true), createBlock(Fragment, null, renderList(props.categories, (category_name, index) => {
                            return openBlock(), createBlock("option", {
                              key: index,
                              value: _ctx.category
                            }, toDisplayString(category_name), 9, ["value"]);
                          }), 128))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, _ctx.selectedCategory]
                        ])
                      ]),
                      createVNode("div", { class: "flex mb-6" }, [
                        createVNode(unref(Link), {
                          class: "px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none",
                          href: _ctx.route("menu.create")
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
                          createVNode("th", { class: "px-4 py-2 w-1/5" }, "Category"),
                          createVNode("th", { class: "px-4 py-2 w-1/5" }, "Name"),
                          createVNode("th", { class: "px-4 py-2 w-1/6" }, "Price"),
                          createVNode("th", { class: "px-4 py-2 w-1/6" }, "Description"),
                          createVNode("th", { class: "px-4 py-2 w-1/4" }, "Image"),
                          createVNode("th", { class: "px-4 py-2 w-16" }, "Actions")
                        ])
                      ]),
                      createVNode("tbody", { class: "text-center" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(props.menus, (menu) => {
                          return openBlock(), createBlock("tr", {
                            key: menu.id,
                            class: "text-center"
                          }, [
                            createVNode("td", { class: "border px-2 py-2 w-16" }, toDisplayString(menu.id), 1),
                            createVNode("td", { class: "border px-4 py-2 w-1/6" }, toDisplayString(menu.category_name), 1),
                            createVNode("td", { class: "border px-4 py-2 w-1/5" }, toDisplayString(menu.menu_name), 1),
                            createVNode("td", { class: "border px-4 py-2 w-1/6" }, toDisplayString(menu.price), 1),
                            createVNode("td", { class: "border px-4 py-2 w-1/5" }, toDisplayString(menu.description), 1),
                            createVNode("td", { class: "border px-4 py-2" }, [
                              createVNode("img", {
                                src: `/storage/${menu.image}`,
                                alt: "Menu Image",
                                class: "mx-auto",
                                style: { "width": "100px", "height": "100px", "object-fit": "cover" }
                              }, null, 8, ["src"])
                            ]),
                            createVNode("td", { class: "border px-4 py-2" }, [
                              createVNode("div", { class: "flex flex-col space-y-2" }, [
                                createVNode(unref(Link), {
                                  tabIndex: "1",
                                  className: "px-4 py-2 text-sm text-white bg-blue-500 rounded",
                                  href: _ctx.route("menu.edit", menu.id)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Edit ")
                                  ]),
                                  _: 2
                                }, 1032, ["href"]),
                                createVNode("button", {
                                  onClick: ($event) => destroy(menu.id),
                                  class: "px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                }, " Delete ", 8, ["onClick"])
                              ])
                            ])
                          ]);
                        }), 128)),
                        props.menus && props.menus.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                          createVNode("td", {
                            colspan: "4",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Menu/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
