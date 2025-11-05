import { defineComponent, mergeProps, withCtx, createVNode, ref, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$1$1, a as _imports_1, I as InquiryForm } from './InquiryForm-Bs-BTmqv.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-D7qS_3ag.mjs';
import { B as Breadcrumbs } from './breadcrumbs-xT8jGMeU.mjs';
import { D as Divider } from './divider-CD-0niJo.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { Mail, Phone, MapPin } from 'lucide-vue-next';
import 'reka-ui';
import './tv-Dyxj8f8C.mjs';
import 'tailwind-variants';
import './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:path';
import 'better-sqlite3';
import 'ipx';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './Button-DdQxHajf.mjs';
import './Avatar-BMtAh9aM.mjs';
import './NuxtImg-D9WVKGOy.mjs';
import './Icon-BXHY_Wln.mjs';
import './index-BifeFrQR.mjs';
import '@iconify/utils/lib/css/icon';
import './asyncData-DzZ9Lhv5.mjs';
import '@vueuse/core';
import './useFormField-WbuSM5T2.mjs';
import './index-3UlAPwuq.mjs';
import './Link-CYf1dq5X.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "HeroSectionTwo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageHero = _sfc_main$1$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative w-full h-[70vh] overflow-hidden flex items-end justify-center mavrix-hero-section-other" }, _attrs))}><div class="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div><div class="relative z-10 w-full px-6 md:px-12 lg:px-20">`);
      _push(ssrRenderComponent(_component_UPageHero, {
        orientation: "vertical",
        class: "relative overflow-hidden px-6 md:px-16 p-0"
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-4xl uppercase font-light text-white leading-tight mavrix-title tracking-in-contract"${_scopeId}> CONTACT US </h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-4xl uppercase font-light text-white leading-tight mavrix-title tracking-in-contract" }, " CONTACT US ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-base md:text-lg text-gray-300 mt-3 mavrix-description"${_scopeId}> Experience real estate that’s personal, precise, and perfectly aligned with your aspirations. </p>`);
          } else {
            return [
              createVNode("p", { class: "text-base md:text-lg text-gray-300 mt-3 mavrix-description" }, " Experience real estate that’s personal, precise, and perfectly aligned with your aspirations. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Breadcrumbs, null, null, _parent));
      _push(`<div class="flex justify-center mt-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#next-section",
        class: "block hover:opacity-80 transition-opacity duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="Scroll Down" class="w-[60px] md:w-[80px] object-contain" loading="lazy"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                alt: "Scroll Down",
                class: "w-[60px] md:w-[80px] object-contain",
                loading: "lazy"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact-us/HeroSectionTwo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const HeroSectionTwo = Object.assign(_sfc_main$3, { __name: "ContactUsHeroSectionTwo" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CallToActionSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col align-middle items-center justify-center" }, _attrs))} data-v-8d293b5b>`);
      _push(ssrRenderComponent(InquiryForm, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact-us/CallToActionSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CallToActionSection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-8d293b5b"]]), { __name: "ContactUsCallToActionSection" });
const _sfc_main$1 = {
  __name: "ContactUsContactInfo",
  __ssrInlineRender: true,
  setup(__props) {
    const showPhone = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-[#212121] text-white" }, _attrs))} data-v-744f864a><div class="bg-[#212121] container mx-auto text-center" data-v-744f864a><div class="bg-[#212121] grid grid-cols-1 md:grid-cols-3 gap-16 w-7xl max-sm:w-full items-center justify-center mx-auto align-middle bg-transparent p-16 mavrix-gradient-border" data-v-744f864a><div class="flex flex-col items-center gap-4" data-v-744f864a>`);
      _push(ssrRenderComponent(unref(Mail), { class: "w-8 h-8 text-[#AE7353]" }, null, _parent));
      _push(`<h3 class="text-lg font-light tracking-wide" data-v-744f864a>E-Mail</h3><a href="mailto:info@mavrixproperties.ae" class="hover:underline transition-all duration-300" data-v-744f864a> info@mavrixproperties.ae </a></div><div class="flex flex-col items-center gap-4" data-v-744f864a>`);
      _push(ssrRenderComponent(unref(Phone), { class: "w-8 h-8 text-[#AE7353]" }, null, _parent));
      _push(`<h3 class="text-lg font-light tracking-wide" data-v-744f864a>Call us</h3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: ($event) => showPhone.value = !showPhone.value,
        to: "tel:+971501234567",
        class: "button-mavrix-outline cursor-pointer border-[#AE7353] text-[#AE7353] tracking-wide uppercase px-8 py-3 rounded-md hover:bg-[#AE7353] hover:text-white transition-all duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(showPhone.value ? "+971 50 123 4567" : "Show Phone Number")}`);
          } else {
            return [
              createTextVNode(toDisplayString(showPhone.value ? "+971 50 123 4567" : "Show Phone Number"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col items-center gap-4" data-v-744f864a>`);
      _push(ssrRenderComponent(unref(MapPin), { class: "w-8 h-8 text-[#AE7353]" }, null, _parent));
      _push(`<h3 class="text-lg font-light tracking-wide" data-v-744f864a>Mailing Address</h3><p class="text-gray-400 max-w-xs leading-relaxed" data-v-744f864a> Office 4004-4005, Single Business Tower,<br data-v-744f864a> Business Bay, Dubai. </p></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact-us/ContactInfo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ContactInfo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-744f864a"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(HeroSectionTwo, null, null, _parent));
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(ssrRenderComponent(ContactInfo, null, null, _parent));
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(ssrRenderComponent(CallToActionSection, null, null, _parent));
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Contact-DNN-b-6K.mjs.map
