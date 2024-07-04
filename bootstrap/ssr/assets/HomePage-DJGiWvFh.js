import { mergeProps, useSSRContext, ref, onMounted, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { N as NavbarCustom } from "./NavbarCustom-Dtm_faHj.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { Head } from "@inertiajs/inertia-vue3";
const _sfc_main$2 = {
  __name: "Thumbnail",
  __ssrInlineRender: true,
  props: {
    thumbnailImage: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group relative rounded-md shadow-lg m-2 bg-white" }, _attrs))}><img class="w-full transition-transform duration-500 ease-in-out transform group-hover:scale-125"${ssrRenderAttr("src", __props.thumbnailImage)} alt="Thumbnail"></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Thumbnail.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-gray-800 text-white py-8" }, _attrs))}><div class="container mx-auto flex flex-wrap justify-around px-4"><div class="footer-section w-full sm:w-1/2 lg:w-1/4 mb-4 text-left"><h3 class="text-lg font-semibold border-b-2 border-gray-600 pb-2">Contact Information</h3><p class="mt-4">Address: 18A Cong Hoa,P.14, Tan Binh, TP.HCM</p><p>Phone: 0909.868.686</p><p>Email: nguyenduongbang194@gmail.com</p></div><div class="footer-section w-full sm:w-1/2 lg:w-1/4 mb-4"><h3 class="text-lg font-semibold border-b-2 border-gray-600 pb-2">Important Links</h3><ul class="mt-4"><li><a href="#" class="hover:underline">Home</a></li><li><a href="#" class="hover:underline">About Us</a></li><li><a href="#" class="hover:underline">Services</a></li><li><a href="#" class="hover:underline">Contact</a></li></ul></div><div class="footer-section w-full sm:w-1/2 lg:w-1/4 mb-4"><h3 class="text-lg font-semibold border-b-2 border-gray-600 pb-2">Social Media</h3><div class="social-links mt-4"><a href="#" class="mr-4 hover:underline">Facebook</a><a href="#" class="mr-4 hover:underline">Twitter</a><a href="#" class="mr-4 hover:underline">LinkedIn</a><a href="#" class="hover:underline">Instagram</a></div></div><div class="footer-section w-full sm:w-1/2 lg:w-1/4 mb-4"><h3 class="text-lg font-semibold border-b-2 border-gray-600 pb-2">Newsletter</h3></div></div><div class="footer-bottom text-center pt-4 border-t border-gray-600"><p>© HiHi Restaurant. All rights reserved.</p></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "HomePage",
  __ssrInlineRender: true,
  setup(__props) {
    const banners = [
      "/images/Banner.jpg",
      "/images/Banner1.png",
      "/images/Banner2.png",
      "/images/Banner3.jpg",
      "/images/Banner4.jpg",
      "/images/Banner5.jpg",
      "/images/Banner6.jpg"
    ];
    const thumbnails = [
      { image: "/images/vuheonuong.jpg" },
      { image: "/images/thitbachiuopsate.jpg" },
      { image: "/images/suonnuongmoi.jpg" },
      { image: "/images/OIP.jpg" },
      { image: "/images/OIP (2).jpg" }
    ];
    const currentBannerIndex = ref(0);
    const currentBannerImage = ref(banners[currentBannerIndex.value]);
    onMounted(() => {
      setInterval(() => {
        currentBannerIndex.value = (currentBannerIndex.value + 1) % banners.length;
        currentBannerImage.value = banners[currentBannerIndex.value];
      }, 2e3);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home flex min-h-screen overflow-hidden relative text-center bg-gray-100 font-sans" }, _attrs))}><div class="w-[6%] bg-white relative z-20">`);
      _push(ssrRenderComponent(NavbarCustom, null, null, _parent));
      _push(`</div><div class="absolute inset-0 bg-gradient-to-b from-gray-300 to-transparent z-10"></div><div class="main-content w-[94%] h-full right-0 flex-1 flex flex-col items-center justify-center relative z-50">`);
      _push(ssrRenderComponent(unref(Head), { title: "Home" }, null, _parent));
      _push(`<div><img${ssrRenderAttr("src", currentBannerImage.value)} alt="Banner Image" class="object-cover mx-auto rounded-lg shadow-lg w-full h-screen max-w-screen"></div><div class="flex flex-wrap justify-center p-8"><!--[-->`);
      ssrRenderList(thumbnails, (thumbnail, index) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          key: index,
          thumbnailImage: thumbnail.image,
          class: "rounded-lg hover:z-10"
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="bg-slate-800 w-1/2 h-px"></div><div class="my-4"><div class="text-4xl font-semibold">Discount</div></div><div class="bg-slate-800 w-1/2 h-px"></div><div class="my-4"><div class="text-4xl font-semibold">NEWS &amp; Event</div></div><div class="w-full">`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/HomePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
