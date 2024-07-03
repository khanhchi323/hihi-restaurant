import { unref, withCtx, createVNode, createTextVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, Fragment, renderList, toDisplayString, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-CE-vXLbb.js";
import { useForm, Head, Link } from "@inertiajs/inertia-vue3";
import "./ApplicationLogo-3H3I4iid.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  props: ["areas"],
  setup(__props) {
    const props = __props;
    const { data: form, post } = useForm({
      table_name: "",
      area_name: ""
    });
    const submit = () => {
      post(route("table.store"), form);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Create Table" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Create Table </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Create Table ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-6"${_scopeId}><div class="max-w-2xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 bg-white border-b border-gray-200"${_scopeId}><form${_scopeId}><div class="mb-4"${_scopeId}><label for="table_name" class="block text-gray-700"${_scopeId}> Table </label><input${ssrRenderAttr("value", unref(form).table_name)} type="text" id="table_name" name="table_name" class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"${_scopeId}></div><div class="mb-4"${_scopeId}><label for="area_name" class="block text-gray-700"${_scopeId}> Area </label><select id="area_name" name="area_name" class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).area_name) ? ssrLooseContain(unref(form).area_name, "") : ssrLooseEqual(unref(form).area_name, "")) ? " selected" : ""}${_scopeId}>Select an area</option><!--[-->`);
            ssrRenderList(props.areas, (area) => {
              _push2(`<option${ssrRenderAttr("value", area.id)}${_scopeId}>${ssrInterpolate(area.area_name)}</option>`);
            });
            _push2(`<!--]--></select></div><div class="flex items-center justify-between mb-6"${_scopeId}>`);
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
            _push2(`<button type="submit" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"${_scopeId}> Save </button></div></form></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-6" }, [
                createVNode("div", { class: "max-w-2xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 bg-white border-b border-gray-200" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"])
                      }, [
                        createVNode("div", { class: "mb-4" }, [
                          createVNode("label", {
                            for: "table_name",
                            class: "block text-gray-700"
                          }, " Table "),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).table_name = $event,
                            type: "text",
                            id: "table_name",
                            name: "table_name",
                            class: "mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).table_name]
                          ])
                        ]),
                        createVNode("div", { class: "mb-4" }, [
                          createVNode("label", {
                            for: "area_name",
                            class: "block text-gray-700"
                          }, " Area "),
                          withDirectives(createVNode("select", {
                            "onUpdate:modelValue": ($event) => unref(form).area_name = $event,
                            id: "area_name",
                            name: "area_name",
                            class: "mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          }, [
                            createVNode("option", { value: "" }, "Select an area"),
                            (openBlock(true), createBlock(Fragment, null, renderList(props.areas, (area) => {
                              return openBlock(), createBlock("option", {
                                key: area.id,
                                value: area.id
                              }, toDisplayString(area.area_name), 9, ["value"]);
                            }), 128))
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(form).area_name]
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
                            class: "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                          }, " Save ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Table/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
