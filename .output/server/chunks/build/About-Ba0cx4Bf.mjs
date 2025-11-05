import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { O as OurTeam, C as Counter } from './OurTeam-DwsS5ote.mjs';
import { _ as _sfc_main$1$1, a as _imports_1, I as InquiryForm } from './InquiryForm-Bs-BTmqv.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-D7qS_3ag.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { B as Breadcrumbs } from './breadcrumbs-xT8jGMeU.mjs';
import { _ as _imports_0 } from './effect-cards-nYSHKtHe.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { F as Features } from './features-HTLs0K6E.mjs';
import { D as Divider } from './divider-CD-0niJo.mjs';
import 'swiper/vue';
import 'swiper/modules';
import './agents-D2hQc5FU.mjs';
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
import 'lucide-vue-next';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
            _push2(`<h1 class="text-4xl uppercase font-light text-white leading-tight mavrix-title tracking-in-contract"${_scopeId}> EXPLORE MAVRIX </h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-4xl uppercase font-light text-white leading-tight mavrix-title tracking-in-contract" }, " EXPLORE MAVRIX ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-base md:text-lg text-gray-300 mt-3 mavrix-description"${_scopeId}> Mavrix is not just a real estate brokerage, it’s a statement of refinement, integrity, and modern luxury. </p>`);
          } else {
            return [
              createVNode("p", { class: "text-base md:text-lg text-gray-300 mt-3 mavrix-description" }, " Mavrix is not just a real estate brokerage, it’s a statement of refinement, integrity, and modern luxury. ")
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about-us/HeroSectionTwo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const HeroSectionTwo = Object.assign(_sfc_main$4, { __name: "AboutUsHeroSectionTwo" });
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UPageHero = _sfc_main$1$1;
  _push(ssrRenderComponent(_component_UPageHero, mergeProps({
    orientation: "horizontal",
    reverse: ""
  }, _attrs), {
    headline: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="text-custom text-9xl text-white"${_scopeId}> 1 </h1><h4 class="uppercase mavrix-title text-mavrix"${_scopeId}> About Mavrix </h4>`);
      } else {
        return [
          createVNode("h1", { class: "text-custom text-9xl text-white" }, " 1 "),
          createVNode("h4", { class: "uppercase mavrix-title text-mavrix" }, " About Mavrix ")
        ];
      }
    }),
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="text-3xl md:text-4xl font-light uppercase tracking-wider"${_scopeId}> Our Story </h2>`);
      } else {
        return [
          createVNode("h2", { class: "text-3xl md:text-4xl font-light uppercase tracking-wider" }, " Our Story ")
        ];
      }
    }),
    description: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="text-gray-300 text-base leading-relaxed max-w-2xl mavrix-description"${_scopeId}> Founded in Dubai, a global symbol of innovation and luxury, Mavrix was built for discerning investors who seek meaning behind every investment. We specialize in extraordinary properties, homes defined by craftsmanship, character, and timeless design. From waterfront penthouses and architectural villas to branded residences and landmark developments, Mavrix connects clients to spaces that mirror their ambitions and lifestyle. </p>`);
      } else {
        return [
          createVNode("p", { class: "text-gray-300 text-base leading-relaxed max-w-2xl mavrix-description" }, " Founded in Dubai, a global symbol of innovation and luxury, Mavrix was built for discerning investors who seek meaning behind every investment. We specialize in extraordinary properties, homes defined by craftsmanship, character, and timeless design. From waterfront penthouses and architectural villas to branded residences and landmark developments, Mavrix connects clients to spaces that mirror their ambitions and lifestyle. ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="App screenshot" class="services-image" loading="lazy"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "App screenshot",
            class: "services-image",
            loading: "lazy"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about-us/OurStory.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const OurStory = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]), { __name: "AboutUsOurStory" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "WhatWeDo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageHero = _sfc_main$1$1;
      _push(ssrRenderComponent(_component_UPageHero, mergeProps({
        orientation: "horizontal",
        class: "relative overflow-hidden px-6 md:px-16 p-0 sec-top"
      }, _attrs), {
        headline: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-custom-two text-9xl text-white"${_scopeId}> 2 </h1><h3 class="text-lg md:text-2xl font-light uppercase tracking-widest text-mavrix"${_scopeId}> Our philosophy </h3>`);
          } else {
            return [
              createVNode("h1", { class: "text-custom-two text-9xl text-white" }, " 2 "),
              createVNode("h3", { class: "text-lg md:text-2xl font-light uppercase tracking-widest text-mavrix" }, " Our philosophy ")
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-3xl md:text-4xl font-light tracking-wider"${_scopeId}> WHAT WE DO </h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-3xl md:text-4xl font-light tracking-wider" }, " WHAT WE DO ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Features, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Features)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="App screenshot" class="services-image-two" loading="lazy"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "App screenshot",
                class: "services-image-two",
                loading: "lazy"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about-us/WhatWeDo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const WhatWeDo = Object.assign(_sfc_main$2, { __name: "AboutUsWhatWeDo" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CallToActionSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col align-middle items-center justify-center" }, _attrs))} data-v-349ff6ad>`);
      _push(ssrRenderComponent(InquiryForm, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about-us/CallToActionSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CallToActionSection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-349ff6ad"]]), { __name: "AboutUsCallToActionSection" });
const _sfc_main = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-65f8b742>`);
      _push(ssrRenderComponent(HeroSectionTwo, null, null, _parent));
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(ssrRenderComponent(OurStory, null, null, _parent));
      _push(ssrRenderComponent(WhatWeDo, null, null, _parent));
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(ssrRenderComponent(OurTeam, null, null, _parent));
      _push(ssrRenderComponent(Counter, null, null, _parent));
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(ssrRenderComponent(CallToActionSection, null, null, _parent));
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-65f8b742"]]);

export { About as default };
//# sourceMappingURL=About-Ba0cx4Bf.mjs.map
