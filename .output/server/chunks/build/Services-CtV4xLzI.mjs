import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { defineComponent, mergeProps, withCtx, createVNode, ref, unref, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _sfc_main$1$1, a as _imports_1, I as InquiryForm } from './InquiryForm-Bs-BTmqv.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-D7qS_3ag.mjs';
import { B as Breadcrumbs } from './breadcrumbs-xT8jGMeU.mjs';
import { _ as _sfc_main$7 } from './PageSection-DnzQmio-.mjs';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { _ as _imports_0$2 } from './effect-cards-nYSHKtHe.mjs';
import { F as Features } from './features-HTLs0K6E.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCards, Navigation } from 'swiper/modules';
import { D as Divider } from './divider-CD-0niJo.mjs';
import 'reka-ui';
import './tv-Dyxj8f8C.mjs';
import 'tailwind-variants';
import './server.mjs';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
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

const _sfc_main$6 = {
  __name: "OurServicesCounter",
  __ssrInlineRender: true,
  setup(__props) {
    const counters = ref([
      { value: 30, label: "Languages" },
      { value: 700, label: "Specialists" },
      { value: 7e3, label: "Offers in the Database" },
      { value: 14e3, label: "Number of Deals" }
    ]);
    const currentValues = ref([0, 0, 0, 0]);
    const displayValue = (value, index) => currentValues.value[index];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative bg-black text-white py-24 overflow-hidden" }, _attrs))} data-v-e12ccb99><div class="absolute inset-0 bg-cover bg-center-no-repeat opacity-30 parallax-bg" style="${ssrRenderStyle({ backgroundImage: `url('../../img_1.jpg')` })}" data-v-e12ccb99></div><div class="relative container mx-auto text-center px-6" data-v-e12ccb99><h2 class="text-3xl md:text-4xl font-light tracking-wider mb-16" data-v-e12ccb99> IN NUMBERS </h2><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 bg-black/40 mavrix-gradient-border border-gray-600 py-12 px-6 md:px-10 rounded-xl backdrop-blur-sm" data-v-e12ccb99><!--[-->`);
      ssrRenderList(counters.value, (item, index) => {
        _push(`<div class="flex flex-col items-center justify-center" data-v-e12ccb99><h3 class="text-4xl md:text-5xl font-light mb-2" data-v-e12ccb99>${ssrInterpolate(displayValue(item.value, index))}+ </h3><p class="text-sm tracking-widest uppercase text-gray-300" data-v-e12ccb99>${ssrInterpolate(item.label)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/our-services/counter.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Counter = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-e12ccb99"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "HeroSectionTwo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageHero = _sfc_main$1$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative w-full h-[100vh] overflow-hidden flex items-center justify-center mavrix-hero-section" }, _attrs))}><div class="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div><div class="relative z-10 w-full px-6 md:px-12 lg:px-20">`);
      _push(ssrRenderComponent(_component_UPageHero, {
        class: "transition-all",
        title: "OUR SERVICES",
        description: "Find handpicked villas, apartments, and townhouses across Dubai’s prime communities — Downtown Dubai, Dubai Hills, Palm Jumeirah, and more."
      }, null, _parent));
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/our-services/HeroSectionTwo.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const HeroSectionTwo = Object.assign(_sfc_main$5, { __name: "OurServicesHeroSectionTwo" });
const _imports_0$1 = publicAssetsURL("/img_2.jpg");
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UPageSection = _sfc_main$7;
  _push(ssrRenderComponent(_component_UPageSection, mergeProps({
    orientation: "horizontal",
    reverse: "",
    links: _ctx.links
  }, _attrs), {
    headline: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4 class="uppercase mavrix-title text-mavrix"${_scopeId}> Explore Dubai’s Premier Communities </h4>`);
      } else {
        return [
          createVNode("h4", { class: "uppercase mavrix-title text-mavrix" }, " Explore Dubai’s Premier Communities ")
        ];
      }
    }),
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="text-4xl font-bold text-white mt-2 mb-4 tracking-tight mavrix-title"${_scopeId}> Our Story </h2>`);
      } else {
        return [
          createVNode("h2", { class: "text-4xl font-bold text-white mt-2 mb-4 tracking-tight mavrix-title" }, " Our Story ")
        ];
      }
    }),
    description: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="text-gray-300 text-base leading-relaxed max-w-2xl mavrix-description"${_scopeId}> Founded with a clear purpose: to bring clarity, dedication and unmatched professionalism into Dubai’s dynamic property market. Our team brings together seasoned specialists who speak multiple languages, understand diverse investor needs and are committed to delivering results. From early beginnings to now working across the city’s most sought-after neighbourhoods, Mavrix has earned its reputation by staying true to the values that matter. </p>`);
      } else {
        return [
          createVNode("p", { class: "text-gray-300 text-base leading-relaxed max-w-2xl mavrix-description" }, " Founded with a clear purpose: to bring clarity, dedication and unmatched professionalism into Dubai’s dynamic property market. Our team brings together seasoned specialists who speak multiple languages, understand diverse investor needs and are committed to delivering results. From early beginnings to now working across the city’s most sought-after neighbourhoods, Mavrix has earned its reputation by staying true to the values that matter. ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="Team Member" class="slide-image"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$1,
            alt: "Team Member",
            class: "slide-image"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/our-services/OurStory.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const OurStory = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]), { __name: "OurServicesOurStory" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "WhatWeDo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageHero = _sfc_main$1$1;
      _push(ssrRenderComponent(_component_UPageHero, mergeProps({
        orientation: "horizontal",
        reverse: "",
        class: "relative overflow-hidden px-6 md:px-16 p-0"
      }, _attrs), {
        headline: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-lg md:text-2xl font-semibold uppercase tracking-widest text-mavrix"${_scopeId}> Our Approach </h3>`);
          } else {
            return [
              createVNode("h3", { class: "text-lg md:text-2xl font-semibold uppercase tracking-widest text-mavrix" }, " Our Approach ")
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-4xl md:text-6xl font-extrabold text-white leading-tight mavrix-title"${_scopeId}> What We Do </h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-4xl md:text-6xl font-extrabold text-white leading-tight mavrix-title" }, " What We Do ")
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
            _push2(`<img${ssrRenderAttr("src", _imports_0$2)} alt="App screenshot" class="rounded shadow-2xl ring ring-white/20 md:mt-0" height="400" width="500" loading="lazy"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$2,
                alt: "App screenshot",
                class: "rounded shadow-2xl ring ring-white/20 md:mt-0",
                height: "400",
                width: "500",
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/our-services/WhatWeDo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const WhatWeDo = Object.assign(_sfc_main$3, { __name: "OurServicesWhatWeDo" });
const _imports_0 = publicAssetsURL("/member.jpg");
const _sfc_main$2 = {
  __name: "OurServicesOurTeam",
  __ssrInlineRender: true,
  setup(__props) {
    const links = ref([
      {
        label: "Explore components",
        to: "/docs/components/app",
        color: "neutral",
        trailingIcon: "i-lucide-arrow-right",
        class: "button-mavrix"
      }
    ]);
    const modules = [EffectCards, Navigation];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageSection = _sfc_main$7;
      _push(ssrRenderComponent(_component_UPageSection, mergeProps({
        headline: "Experienced. Transparent. Dedicated.",
        title: "MEET OUR TEAM",
        description: "Our team of real estate professionals is committed to providing exceptional service and expert guidance to help you find your perfect property in Dubai.",
        icon: "i-lucide-rocket",
        orientation: "horizontal",
        links: links.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative flex justify-center items-center" data-v-686d3296${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Swiper), {
              effect: "cards",
              grabCursor: true,
              modules,
              navigation: "",
              class: "mySwiper team-swiper"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(8, (n) => {
                    _push3(ssrRenderComponent(unref(SwiperSlide), { key: n }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", _imports_0)} width="352" alt="Team Member" class="slide-image" data-v-686d3296${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: _imports_0,
                              width: "352",
                              alt: "Team Member",
                              class: "slide-image"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(8, (n) => {
                      return createVNode(unref(SwiperSlide), { key: n }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_0,
                            width: "352",
                            alt: "Team Member",
                            class: "slide-image"
                          })
                        ]),
                        _: 1
                      });
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative flex justify-center items-center" }, [
                createVNode(unref(Swiper), {
                  effect: "cards",
                  grabCursor: true,
                  modules,
                  navigation: "",
                  class: "mySwiper team-swiper"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(8, (n) => {
                      return createVNode(unref(SwiperSlide), { key: n }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_0,
                            width: "352",
                            alt: "Team Member",
                            class: "slide-image"
                          })
                        ]),
                        _: 1
                      });
                    }), 64))
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/our-services/OurTeam.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const OurTeam = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-686d3296"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CallToActionSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "cta-section" }, _attrs))} data-v-07938a42><div class="w-full flex flex-col align-middle items-center justify-center" data-v-07938a42>`);
      _push(ssrRenderComponent(InquiryForm, null, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/our-services/CallToActionSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CallToActionSection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-07938a42"]]), { __name: "OurServicesCallToActionSection" });
const _sfc_main = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f9b5234f>`);
      _push(ssrRenderComponent(HeroSectionTwo, null, null, _parent));
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(ssrRenderComponent(OurStory, null, null, _parent));
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(ssrRenderComponent(OurTeam, null, null, _parent));
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(ssrRenderComponent(WhatWeDo, null, null, _parent));
      _push(ssrRenderComponent(Divider, null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Services = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f9b5234f"]]);

export { Services as default };
//# sourceMappingURL=Services-CtV4xLzI.mjs.map
