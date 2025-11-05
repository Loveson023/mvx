import { _ as _sfc_main$1$1, a as _imports_1, I as InquiryForm } from './InquiryForm-Bs-BTmqv.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-D7qS_3ag.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _imports_0 = publicAssetsURL("/images/agents/agents_banner.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HeroSectionTwo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageHero = _sfc_main$1$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative w-full h-[100vh] overflow-hidden flex items-end justify-center mavrix-hero-section" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="" srcset="" class="absolute inset-0 w-full h-full object-cover top-center"><div class="absolute inset-0"></div><div class="relative z-10 w-full pb-8 px-6 md:px-12 lg:px-20">`);
      _push(ssrRenderComponent(_component_UPageHero, {
        orientation: "vertical",
        class: "relative overflow-hidden px-6 md:px-16 p-0"
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-4xl uppercase font-light text-white leading-tight mavrix-title tracking-in-contract"${_scopeId}> REAL ESTATE AGENTS IN DUBAI</h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-4xl uppercase font-light text-white leading-tight mavrix-title tracking-in-contract" }, " REAL ESTATE AGENTS IN DUBAI")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-base md:text-lg text-gray-300 mt-3 mavrix-description"${_scopeId}> Team of real estate experts </p>`);
          } else {
            return [
              createVNode("p", { class: "text-base md:text-lg text-gray-300 mt-3 mavrix-description" }, " Team of real estate experts ")
            ];
          }
        }),
        _: 1
      }, _parent));
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/our-agents/HeroSectionTwo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HeroSectionTwo = Object.assign(_sfc_main$1, { __name: "OurAgentsHeroSectionTwo" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CallToActionSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col align-middle items-center justify-center" }, _attrs))} data-v-67b86c44>`);
      _push(ssrRenderComponent(InquiryForm, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/our-agents/CallToActionSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CallToActionSection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-67b86c44"]]), { __name: "OurAgentsCallToActionSection" });

export { CallToActionSection as C, HeroSectionTwo as H };
//# sourceMappingURL=CallToActionSection-VqhfhFLr.mjs.map
