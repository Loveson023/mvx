import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _sfc_main$1$1, a as _imports_1$1, I as InquiryForm } from './InquiryForm-Bs-BTmqv.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-D7qS_3ag.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, computed, unref, createBlock, openBlock, Fragment, renderList, renderSlot, useSSRContext } from 'vue';
import { _ as _sfc_main$7 } from './PageSection-DnzQmio-.mjs';
import { _ as _imports_0$1 } from './effect-cards-nYSHKtHe.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { O as OurTeam, C as Counter } from './OurTeam-DwsS5ote.mjs';
import { D as Divider } from './divider-CD-0niJo.mjs';
import { Primitive } from 'reka-ui';
import { t as tv } from './tv-Dyxj8f8C.mjs';
import { k as useSeoMeta, e as useAppConfig } from './server.mjs';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import './Button-DdQxHajf.mjs';
import './Avatar-BMtAh9aM.mjs';
import './NuxtImg-D9WVKGOy.mjs';
import './Icon-BXHY_Wln.mjs';
import './index-BifeFrQR.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './asyncData-DzZ9Lhv5.mjs';
import '@vueuse/core';
import './useFormField-WbuSM5T2.mjs';
import './index-3UlAPwuq.mjs';
import './Link-CYf1dq5X.mjs';
import 'swiper/vue';
import 'swiper/modules';
import './agents-D2hQc5FU.mjs';
import 'tailwind-variants';
import 'vue-router';
import 'tailwindcss/colors';
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

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HeroSectionTwo",
  __ssrInlineRender: true,
  setup(__props) {
    ref([
      {
        label: "Explore Mavrix",
        to: "/about",
        // icon: 'i-lucide-square-play',
        class: "button-mavrix"
      },
      {
        label: "Discover Dubai Living",
        to: "/properties",
        color: "neutral",
        variant: "subtle",
        trailingIcon: "i-lucide-arrow-right",
        class: "button-mavrix-outline text-white"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageHero = _sfc_main$1$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative w-full h-[100vh] overflow-hidden flex items-end pb-8 justify-center mavrix-hero-section snap-y snap-mandatory overflow-y-scroll" }, _attrs))}><div class="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div><div class="relative z-10 w-full px-6 md:px-12 lg:px-20">`);
      _push(ssrRenderComponent(_component_UPageHero, {
        orientation: "vertical",
        class: "relative overflow-hidden px-6 md:px-16 p-0"
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-4xl uppercase font-light text-white leading-tight mavrix-title tracking-in-contract"${_scopeId}> Discover Dubai’s Most Prestigious Properties </h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-4xl uppercase font-light text-white leading-tight mavrix-title tracking-in-contract" }, " Discover Dubai’s Most Prestigious Properties ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-base md:text-lg text-gray-300 mt-3 mavrix-description"${_scopeId}> At Mavrix Luxury Properties, we don’t just sell homes — we curate lifestyles. </p>`);
          } else {
            return [
              createVNode("p", { class: "text-base md:text-lg text-gray-300 mt-3 mavrix-description" }, " At Mavrix Luxury Properties, we don’t just sell homes — we curate lifestyles. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex gap-4 mt-8 items-center justify-center max-sm:flex-col">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "button-mavrix text-white text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` EXPLORE MAVRIX `);
          } else {
            return [
              createTextVNode(" EXPLORE MAVRIX ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/properties",
        class: "button-mavrix-outline text-white text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` DISCOVER DUBAI LIVING `);
          } else {
            return [
              createTextVNode(" DISCOVER DUBAI LIVING ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex justify-center mt-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#next-section",
        class: "block hover:opacity-80 transition-opacity duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1$1)} alt="Scroll Down" class="w-[60px] md:w-[80px] object-contain" loading="lazy"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1$1,
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSectionTwo.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const HeroSectionTwo = Object.assign(_sfc_main$6, { __name: "HeroSectionTwo" });
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_UPageSection = _sfc_main$7;
  const _component_NuxtLink = __nuxt_component_0;
  _push(ssrRenderComponent(_component_UPageSection, mergeProps({
    orientation: "horizontal",
    reverse: "",
    links: _ctx.links
  }, _attrs), {
    headline: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4 class="uppercase mavrix-title text-mavrix"${_scopeId}> About Mavrix </h4>`);
      } else {
        return [
          createVNode("h4", { class: "uppercase mavrix-title text-mavrix" }, " About Mavrix ")
        ];
      }
    }),
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="tracking-in-contract text-3xl uppercase font-light text-white mt-2 mb-4 tracking-tight mavrix-title"${_scopeId}> Redefining Real Estate Through Integrity and Innovation </h2>`);
      } else {
        return [
          createVNode("h2", { class: "tracking-in-contract text-3xl uppercase font-light text-white mt-2 mb-4 tracking-tight mavrix-title" }, " Redefining Real Estate Through Integrity and Innovation ")
        ];
      }
    }),
    description: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="text-gray-300 text-base leading-relaxed max-w-2xl mavrix-description"${_scopeId}> Mavrix is not just a brokerage — it’s a legacy of refined living. Founded in Dubai, the global hub of luxury and architectural brilliance, Mavrix serves as a bridge between visionary investors and iconic developments. Every property we represent reflects craftsmanship, exclusivity, and purpose. From sleek waterfront penthouses to bespoke villas and branded residences, we go beyond listings — we connect you to a lifestyle. Our approach is personal. We understand that real estate isn’t just about location or price — it’s about emotion, identity, and long-term value. With Mavrix, your property journey becomes effortless, insightful, and deeply rewarding. </p><div class="mt-8"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          class: "button-mavrix cursor-pointer",
          type: "button",
          to: "/projects"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Explore Communities `);
            } else {
              return [
                createTextVNode(" Explore Communities ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("p", { class: "text-gray-300 text-base leading-relaxed max-w-2xl mavrix-description" }, " Mavrix is not just a brokerage — it’s a legacy of refined living. Founded in Dubai, the global hub of luxury and architectural brilliance, Mavrix serves as a bridge between visionary investors and iconic developments. Every property we represent reflects craftsmanship, exclusivity, and purpose. From sleek waterfront penthouses to bespoke villas and branded residences, we go beyond listings — we connect you to a lifestyle. Our approach is personal. We understand that real estate isn’t just about location or price — it’s about emotion, identity, and long-term value. With Mavrix, your property journey becomes effortless, insightful, and deeply rewarding. "),
          createVNode("div", { class: "mt-8" }, [
            createVNode(_component_NuxtLink, {
              class: "button-mavrix cursor-pointer",
              type: "button",
              to: "/projects"
            }, {
              default: withCtx(() => [
                createTextVNode(" Explore Communities ")
              ]),
              _: 1
            })
          ])
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const AboutSection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]), { __name: "AboutSection" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MarvixPropertiesSection",
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
            _push2(`<h3 class="uppercase mavrix-title text-mavrix"${_scopeId}> mavrix Properties </h3>`);
          } else {
            return [
              createVNode("h3", { class: "uppercase mavrix-title text-mavrix" }, " mavrix Properties ")
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-3xl uppercase font-light text-white leading-tight mavrix-title tracking-in-contract"${_scopeId}> Handpicked. Iconic. Unforgettable. </h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-3xl uppercase font-light text-white leading-tight mavrix-title tracking-in-contract" }, " Handpicked. Iconic. Unforgettable. ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-base md:text-lg text-gray-300 mt-3 mavrix-description"${_scopeId}> Explore Dubai’s finest selection of luxury properties curated by Mavrix — from ultra-modern penthouses with skyline views to serene villas in the city’s most sought-after communities. Every home we represent is a statement of design, comfort, and distinction — tailored for those who appreciate excellence in every detail. </p>`);
          } else {
            return [
              createVNode("p", { class: "text-base md:text-lg text-gray-300 mt-3 mavrix-description" }, " Explore Dubai’s finest selection of luxury properties curated by Mavrix — from ultra-modern penthouses with skyline views to serene villas in the city’s most sought-after communities. Every home we represent is a statement of design, comfort, and distinction — tailored for those who appreciate excellence in every detail. ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="App screenshot" class="rounded shadow-2xl ring ring-white/20 md:mt-0" height="200" width="500" loading="lazy"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "App screenshot",
                class: "rounded shadow-2xl ring ring-white/20 md:mt-0",
                height: "200",
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MarvixPropertiesSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const MarvixPropertiesSection = Object.assign(_sfc_main$4, { __name: "MarvixPropertiesSection" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CallToActionSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col align-middle items-center justify-center" }, _attrs))} data-v-5a63699c>`);
      _push(ssrRenderComponent(InquiryForm, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CallToActionSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CallToActionSection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-5a63699c"]]), { __name: "CallToActionSection" });
const theme = {
  "slots": {
    "root": "group relative flex items-center overflow-hidden gap-(--gap) [--gap:--spacing(16)] [--duration:20s]",
    "content": "flex items-center shrink-0 justify-around gap-(--gap) min-w-max"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "content": "w-full"
      },
      "vertical": {
        "content": "h-full"
      }
    },
    "pauseOnHover": {
      "true": {
        "content": "group-hover:[animation-play-state:paused]"
      }
    },
    "reverse": {
      "true": {
        "content": "![animation-direction:reverse]"
      }
    },
    "overlay": {
      "true": {
        "root": 'before:absolute before:pointer-events-none before:content-[""] before:z-2 before:from-default before:to-transparent after:absolute after:pointer-events-none after:content-[""] after:z-2 after:from-default after:to-transparent'
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "class": {
        "root": "flex-row",
        "content": "flex-row animate-[marquee_var(--duration)_linear_infinite] rtl:animate-[marquee-rtl_var(--duration)_linear_infinite] backface-hidden"
      }
    },
    {
      "orientation": "horizontal",
      "overlay": true,
      "class": {
        "root": "before:inset-y-0 before:left-0 before:h-full before:w-1/3 before:bg-gradient-to-r after:inset-y-0 after:right-0 after:h-full after:w-1/3 after:bg-gradient-to-l backface-hidden"
      }
    },
    {
      "orientation": "vertical",
      "class": {
        "root": "flex-col",
        "content": "flex-col animate-[marquee-vertical_var(--duration)_linear_infinite] rtl:animate-[marquee-vertical-rtl_var(--duration)_linear_infinite] h-[fit-content] backface-hidden"
      }
    },
    {
      "orientation": "vertical",
      "overlay": true,
      "class": {
        "root": "before:inset-x-0 before:top-0 before:w-full before:h-1/3 before:bg-gradient-to-b after:inset-x-0 after:bottom-0 after:w-full after:h-1/3 after:bg-gradient-to-t backface-hidden"
      }
    }
  ]
};
const _sfc_main$2 = {
  __name: "UMarquee",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    pauseOnHover: { type: Boolean, required: false },
    reverse: { type: Boolean, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    repeat: { type: Number, required: false, default: 4 },
    overlay: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.marquee || {} })({
      pauseOnHover: props.pauseOnHover,
      orientation: props.orientation,
      reverse: props.reverse,
      overlay: props.overlay
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.repeat, (i) => {
              _push2(`<div class="${ssrRenderClass(ui.value.content({ class: [props.ui?.content] }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.repeat, (i) => {
                return openBlock(), createBlock("div", {
                  key: i,
                  class: ui.value.content({ class: [props.ui?.content] })
                }, [
                  renderSlot(_ctx.$slots, "default")
                ], 2);
              }), 128))
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Marquee.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/images/developers/1.jpg");
const _imports_1 = publicAssetsURL("/images/developers/2.jpg");
const _imports_2 = publicAssetsURL("/images/developers/3.png");
const _imports_3 = publicAssetsURL("/images/developers/4.jpg");
const _imports_4 = publicAssetsURL("/images/developers/5.jpg");
const _imports_5 = publicAssetsURL("/images/developers/6.jpg");
const _imports_6 = publicAssetsURL("/images/developers/7.jpg");
const _imports_7 = publicAssetsURL("/images/developers/8.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UMarquee = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-8 w-full" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_UMarquee, {
    repeat: 8,
    class: "flex gap-8 items-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Developers" class="h-24"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="Developers" class="h-24"${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="Developers" class="h-24"${_scopeId}><img${ssrRenderAttr("src", _imports_3)} alt="Developers" class="h-24"${_scopeId}><img${ssrRenderAttr("src", _imports_4)} alt="Developers" class="h-24"${_scopeId}><img${ssrRenderAttr("src", _imports_5)} alt="Developers" class="h-24"${_scopeId}><img${ssrRenderAttr("src", _imports_6)} alt="Developers" class="h-24"${_scopeId}><img${ssrRenderAttr("src", _imports_7)} alt="Developers" class="h-24"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "Developers",
            class: "h-24"
          }),
          createVNode("img", {
            src: _imports_1,
            alt: "Developers",
            class: "h-24"
          }),
          createVNode("img", {
            src: _imports_2,
            alt: "Developers",
            class: "h-24"
          }),
          createVNode("img", {
            src: _imports_3,
            alt: "Developers",
            class: "h-24"
          }),
          createVNode("img", {
            src: _imports_4,
            alt: "Developers",
            class: "h-24"
          }),
          createVNode("img", {
            src: _imports_5,
            alt: "Developers",
            class: "h-24"
          }),
          createVNode("img", {
            src: _imports_6,
            alt: "Developers",
            class: "h-24"
          }),
          createVNode("img", {
            src: _imports_7,
            alt: "Developers",
            class: "h-24"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/templates/logos.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Logos = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "TemplatesLogos" });
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Marvix Properties | Luxury RealEstate in UAE",
      ogTitle: "Marvix Luxury Properties",
      description: "This is my amazing site, let me tell you all about it.",
      ogDescription: "This is my amazing site, let me tell you all about it.",
      ogImage: "/images/mavrix_properties.png",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-976a95d9> \\ `);
      _push(ssrRenderComponent(HeroSectionTwo, null, null, _parent));
      _push(ssrRenderComponent(Divider, { id: "next-section" }, null, _parent));
      _push(ssrRenderComponent(MarvixPropertiesSection, null, null, _parent));
      _push(ssrRenderComponent(Logos, null, null, _parent));
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(ssrRenderComponent(OurTeam, null, null, _parent));
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(ssrRenderComponent(Counter, null, null, _parent));
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(ssrRenderComponent(AboutSection, null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-976a95d9"]]);

export { index as default };
//# sourceMappingURL=index-3zngGYKa.mjs.map
