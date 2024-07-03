import { ref, unref, withCtx, createVNode, createTextVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import Head, { useForm, Link } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-CE-vXLbb.js";
import "./ApplicationLogo-3H3I4iid.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    category: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      category_name: props.category.category_name,
      image: props.category.image
    });
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        form.image = file;
        imagePreview.value = URL.createObjectURL(file);
      }
    };
    const submit = () => {
      form.post(route("category.update", props.category.id), {
        forceFormData: true
      });
    };
    const imagePreview = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Edit Category" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Edit Category </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Edit Category ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-6"${_scopeId}><div class="max-w-7xl sm:px-6 w-2/3"${_scopeId}><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 bg-white border-b border-gray-200"${_scopeId}><form class="max-w-md"${_scopeId}><div class="mb-4"${_scopeId}><label for="name" class="block text-sm font-medium text-gray-700"${_scopeId}>Name:</label><input type="text" id="name"${ssrRenderAttr("value", unref(form).category_name)} class="mt-1 p-2 border rounded-md w-full"${_scopeId}></div><div class="mb-4"${_scopeId}><label for="image" class="block text-sm font-medium text-gray-700"${_scopeId}>Ảnh:</label><img className="px-4 py-2 text-blue-800"${ssrRenderAttr("src", `/storage/${__props.category.image}`)} alt="image" width="150" height="150"${_scopeId}><input type="file" id="image" class="mt-1 p-2 border rounded-md w-full"${_scopeId}>`);
            if (imagePreview.value) {
              _push2(`<img${ssrRenderAttr("src", imagePreview.value)} alt="Ảnh Danh Mục" class="mt-2" style="${ssrRenderStyle({ "max-width": "100px", "max-height": "100px" })}"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center justify-between mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "px-6 py-2 text-white bg-red-500 rounded-md focus:outline-none",
              href: _ctx.route("category.list")
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
                createVNode("div", { class: "max-w-7xl sm:px-6 w-2/3" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 bg-white border-b border-gray-200" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        class: "max-w-md"
                      }, [
                        createVNode("div", { class: "mb-4" }, [
                          createVNode("label", {
                            for: "name",
                            class: "block text-sm font-medium text-gray-700"
                          }, "Name:"),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "name",
                            "onUpdate:modelValue": ($event) => unref(form).category_name = $event,
                            class: "mt-1 p-2 border rounded-md w-full"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).category_name]
                          ])
                        ]),
                        createVNode("div", { class: "mb-4" }, [
                          createVNode("label", {
                            for: "image",
                            class: "block text-sm font-medium text-gray-700"
                          }, "Ảnh:"),
                          createVNode("img", {
                            className: "px-4 py-2 text-blue-800",
                            src: `/storage/${__props.category.image}`,
                            alt: "image",
                            width: "150",
                            height: "150"
                          }, null, 8, ["src"]),
                          createVNode("input", {
                            type: "file",
                            id: "image",
                            onChange: handleImageChange,
                            class: "mt-1 p-2 border rounded-md w-full"
                          }, null, 32),
                          imagePreview.value ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: imagePreview.value,
                            alt: "Ảnh Danh Mục",
                            class: "mt-2",
                            style: { "max-width": "100px", "max-height": "100px" }
                          }, null, 8, ["src"])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex items-center justify-between mb-6" }, [
                          createVNode(unref(Link), {
                            class: "px-6 py-2 text-white bg-red-500 rounded-md focus:outline-none",
                            href: _ctx.route("category.list")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Category/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
