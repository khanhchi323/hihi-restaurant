import { unref, withCtx, createVNode, createTextVNode, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import Head, { useForm, Link } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-CE-vXLbb.js";
import "./ApplicationLogo-3H3I4iid.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    table: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      table_name: props.table.table_name,
      area_name: props.table.area_name
    });
    const submit = () => {
      form.post(route("table.update", props.table.id), {
        forceFormData: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Edit Table" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Edit Table </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Edit Table ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-6"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8 w-2/3"${_scopeId}><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 bg-white border-b border-gray-200"${_scopeId}><form${_scopeId}><div class="flex flex-col"${_scopeId}><div class="mb-4"${_scopeId}><label for="name" class="block text-sm font-medium text-gray-700"${_scopeId}>Name Table:</label><input type="text" id="name"${ssrRenderAttr("value", unref(form).table_name)} class="mt-1 p-2 border rounded-md w-full"${_scopeId}></div><div class="mb-4"${_scopeId}><label for="name" class="block text-sm font-medium text-gray-700"${_scopeId}>Name:</label><input type="text" id="name"${ssrRenderAttr("value", unref(form).area_name)} class="mt-1 p-2 border rounded-md w-full"${_scopeId}></div><div class="flex items-center justify-between mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "px-6 py-2 text-white bg-red-500 rounded-md focus:outline-none",
              href: _ctx.route("table.list")
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
            _push2(`<button type="submit" class="px-6 py-2 font-bold text-white bg-green-500 rounded"${_scopeId}> Save </button></div></div></form></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-6" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8 w-2/3" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 bg-white border-b border-gray-200" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"])
                      }, [
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", {
                              for: "name",
                              class: "block text-sm font-medium text-gray-700"
                            }, "Name Table:"),
                            withDirectives(createVNode("input", {
                              type: "text",
                              id: "name",
                              "onUpdate:modelValue": ($event) => unref(form).table_name = $event,
                              class: "mt-1 p-2 border rounded-md w-full"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).table_name]
                            ])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", {
                              for: "name",
                              class: "block text-sm font-medium text-gray-700"
                            }, "Name:"),
                            withDirectives(createVNode("input", {
                              type: "text",
                              id: "name",
                              "onUpdate:modelValue": ($event) => unref(form).area_name = $event,
                              class: "mt-1 p-2 border rounded-md w-full"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).area_name]
                            ])
                          ]),
                          createVNode("div", { class: "flex items-center justify-between mb-6" }, [
                            createVNode(unref(Link), {
                              class: "px-6 py-2 text-white bg-red-500 rounded-md focus:outline-none",
                              href: _ctx.route("table.list")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Back ")
                              ]),
                              _: 1
                            }, 8, ["href"]),
                            createVNode("button", {
                              type: "submit",
                              class: "px-6 py-2 font-bold text-white bg-green-500 rounded"
                            }, " Save ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Table/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
