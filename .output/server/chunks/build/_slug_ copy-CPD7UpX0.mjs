import { mergeProps, unref, computed, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { a as agents } from './agents-D2hQc5FU.mjs';
import { D as Divider } from './divider-CD-0niJo.mjs';
import { Mail, Phone, MessageCircle, MapPin, BedDouble, Bath, LandPlot } from 'lucide-vue-next';
import { B as Breadcrumbsv2 } from './breadcrumbsv2-DDg0Vc0z.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-D7qS_3ag.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { p as properties } from './properties-5a0AL7Gl.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './server.mjs';
import 'tailwindcss/colors';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$2 = {
  __name: "PropertiesAgentsAgentContact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mt-10 mavrix-gradient-border p-6" }, _attrs))}><div class="flex flex-col items-center justify-center space-y-2 hover:text-mavrix transition-colors">`);
      _push(ssrRenderComponent(unref(Mail), { class: "w-6 h-6 text-mavrix" }, null, _parent));
      _push(`<p class="text-gray-300 text-sm">Email</p><a${ssrRenderAttr("href", `mailto:${unref(agents).email}`)} class="text-white font-medium hover:underline">${ssrInterpolate(unref(agents).email)}</a></div><div class="flex flex-col items-center justify-center space-y-2 hover:text-mavrix transition-colors">`);
      _push(ssrRenderComponent(unref(Phone), { class: "w-6 h-6 text-mavrix" }, null, _parent));
      _push(`<p class="text-gray-300 text-sm">Call</p><a${ssrRenderAttr("href", `tel:${unref(agents).phone}`)} class="text-white font-medium hover:underline">${ssrInterpolate(unref(agents).phone)}</a></div><div class="flex flex-col items-center justify-center space-y-2 hover:text-mavrix transition-colors">`);
      _push(ssrRenderComponent(unref(MessageCircle), { class: "w-6 h-6 text-mavrix" }, null, _parent));
      _push(`<a${ssrRenderAttr("href", `https://wa.me/${unref(agents).whatsapp}`)} target="_blank" class="text-white font-light text-sm"> WhatsApp </a></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/properties/agents/AgentContact.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "PropertiesAgentsAgentProperties",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const agent = agents.find((a) => a.slug === route.params.slug);
    const agentProperties = computed(
      () => properties.filter((p) => p.agent?.agent_id === agent?.id)
    );
    const modules = [Navigation];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (agentProperties.value.length) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-white" }, _attrs))} data-v-b3628569><div class="max-w-7xl mx-auto px-6 lg:px-12" data-v-b3628569><h2 class="text-2xl font-semibold mb-6" data-v-b3628569> Properties by ${ssrInterpolate(unref(agent)?.name)}</h2>`);
        _push(ssrRenderComponent(unref(Swiper), {
          "slides-per-view": 1,
          "space-between": 10,
          breakpoints: {
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 }
          },
          modules,
          navigation: "",
          class: "pb-10"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(agentProperties.value, (property) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), {
                  key: property.id,
                  class: "overflow-hidden border rounded-none shadow-lg hover:shadow-2xl transition-all duration-300 !h-auto"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        to: `/properties/${property.slug}`
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<img${ssrRenderAttr("src", property.images[0])}${ssrRenderAttr("alt", property.title)} class="w-full aspect-[4/3] object-cover" data-v-b3628569${_scopeId3}>`);
                          } else {
                            return [
                              createVNode("img", {
                                src: property.images[0],
                                alt: property.title,
                                class: "w-full aspect-[4/3] object-cover"
                              }, null, 8, ["src", "alt"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`<div class="p-3" data-v-b3628569${_scopeId2}><h3 class="font-semibold text-gray-100 text-sm mb-1" data-v-b3628569${_scopeId2}>${ssrInterpolate(property.title)}</h3><div class="flex justify-between gap-2 border-b border-t border-gray-700 py-2" data-v-b3628569${_scopeId2}><div class="flex gap-2 items-center" data-v-b3628569${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(MapPin), {
                        color: "#c99171",
                        class: "h-4 w-4"
                      }, null, _parent3, _scopeId2));
                      _push3(`<p class="text-gray-400 text-sm" data-v-b3628569${_scopeId2}>${ssrInterpolate(property.location)}</p></div><p class="text-mavrix" data-v-b3628569${_scopeId2}>${ssrInterpolate(property.currency)} ${ssrInterpolate(property.price.toLocaleString())}</p></div><p class="text-xs text-gray-400 mt-1" data-v-b3628569${_scopeId2}>${ssrInterpolate(property.propertyType)}</p><div class="flex flex-col gap-2 mt-2" data-v-b3628569${_scopeId2}><div class="flex gap-2" data-v-b3628569${_scopeId2}><div class="flex gap-2 border px-2 py-4 items-center" data-v-b3628569${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(BedDouble), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                      _push3(`<p class="text-xs text-gray-400" data-v-b3628569${_scopeId2}>${ssrInterpolate(property.bedrooms)} Bed</p></div><div class="flex gap-2 border px-2 py-4 items-center" data-v-b3628569${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(Bath), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                      _push3(`<p class="text-xs text-gray-400" data-v-b3628569${_scopeId2}>${ssrInterpolate(property.bathrooms)} Bath</p></div><div class="flex gap-2 border px-2 py-4 items-center" data-v-b3628569${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(LandPlot), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                      _push3(`<p class="text-xs text-gray-400" data-v-b3628569${_scopeId2}>${ssrInterpolate(property.areaSqFt)} Sq.Ft. </p></div></div>`);
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        to: `/properties/${property.slug}`,
                        class: "button-mavrix text-white text-xs px-3 py-1 text-center"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` View Details `);
                          } else {
                            return [
                              createTextVNode(" View Details ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    } else {
                      return [
                        createVNode(_component_NuxtLink, {
                          to: `/properties/${property.slug}`
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: property.images[0],
                              alt: property.title,
                              class: "w-full aspect-[4/3] object-cover"
                            }, null, 8, ["src", "alt"])
                          ]),
                          _: 2
                        }, 1032, ["to"]),
                        createVNode("div", { class: "p-3" }, [
                          createVNode("h3", { class: "font-semibold text-gray-100 text-sm mb-1" }, toDisplayString(property.title), 1),
                          createVNode("div", { class: "flex justify-between gap-2 border-b border-t border-gray-700 py-2" }, [
                            createVNode("div", { class: "flex gap-2 items-center" }, [
                              createVNode(unref(MapPin), {
                                color: "#c99171",
                                class: "h-4 w-4"
                              }),
                              createVNode("p", { class: "text-gray-400 text-sm" }, toDisplayString(property.location), 1)
                            ]),
                            createVNode("p", { class: "text-mavrix" }, toDisplayString(property.currency) + " " + toDisplayString(property.price.toLocaleString()), 1)
                          ]),
                          createVNode("p", { class: "text-xs text-gray-400 mt-1" }, toDisplayString(property.propertyType), 1),
                          createVNode("div", { class: "flex flex-col gap-2 mt-2" }, [
                            createVNode("div", { class: "flex gap-2" }, [
                              createVNode("div", { class: "flex gap-2 border px-2 py-4 items-center" }, [
                                createVNode(unref(BedDouble), { class: "h-4 w-4" }),
                                createVNode("p", { class: "text-xs text-gray-400" }, toDisplayString(property.bedrooms) + " Bed", 1)
                              ]),
                              createVNode("div", { class: "flex gap-2 border px-2 py-4 items-center" }, [
                                createVNode(unref(Bath), { class: "h-4 w-4" }),
                                createVNode("p", { class: "text-xs text-gray-400" }, toDisplayString(property.bathrooms) + " Bath", 1)
                              ]),
                              createVNode("div", { class: "flex gap-2 border px-2 py-4 items-center" }, [
                                createVNode(unref(LandPlot), { class: "h-4 w-4" }),
                                createVNode("p", { class: "text-xs text-gray-400" }, toDisplayString(property.areaSqFt) + " Sq.Ft. ", 1)
                              ])
                            ]),
                            createVNode(_component_NuxtLink, {
                              to: `/properties/${property.slug}`,
                              class: "button-mavrix text-white text-xs px-3 py-1 text-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" View Details ")
                              ]),
                              _: 1
                            }, 8, ["to"])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(agentProperties.value, (property) => {
                  return openBlock(), createBlock(unref(SwiperSlide), {
                    key: property.id,
                    class: "overflow-hidden border rounded-none shadow-lg hover:shadow-2xl transition-all duration-300 !h-auto"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: `/properties/${property.slug}`
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: property.images[0],
                            alt: property.title,
                            class: "w-full aspect-[4/3] object-cover"
                          }, null, 8, ["src", "alt"])
                        ]),
                        _: 2
                      }, 1032, ["to"]),
                      createVNode("div", { class: "p-3" }, [
                        createVNode("h3", { class: "font-semibold text-gray-100 text-sm mb-1" }, toDisplayString(property.title), 1),
                        createVNode("div", { class: "flex justify-between gap-2 border-b border-t border-gray-700 py-2" }, [
                          createVNode("div", { class: "flex gap-2 items-center" }, [
                            createVNode(unref(MapPin), {
                              color: "#c99171",
                              class: "h-4 w-4"
                            }),
                            createVNode("p", { class: "text-gray-400 text-sm" }, toDisplayString(property.location), 1)
                          ]),
                          createVNode("p", { class: "text-mavrix" }, toDisplayString(property.currency) + " " + toDisplayString(property.price.toLocaleString()), 1)
                        ]),
                        createVNode("p", { class: "text-xs text-gray-400 mt-1" }, toDisplayString(property.propertyType), 1),
                        createVNode("div", { class: "flex flex-col gap-2 mt-2" }, [
                          createVNode("div", { class: "flex gap-2" }, [
                            createVNode("div", { class: "flex gap-2 border px-2 py-4 items-center" }, [
                              createVNode(unref(BedDouble), { class: "h-4 w-4" }),
                              createVNode("p", { class: "text-xs text-gray-400" }, toDisplayString(property.bedrooms) + " Bed", 1)
                            ]),
                            createVNode("div", { class: "flex gap-2 border px-2 py-4 items-center" }, [
                              createVNode(unref(Bath), { class: "h-4 w-4" }),
                              createVNode("p", { class: "text-xs text-gray-400" }, toDisplayString(property.bathrooms) + " Bath", 1)
                            ]),
                            createVNode("div", { class: "flex gap-2 border px-2 py-4 items-center" }, [
                              createVNode(unref(LandPlot), { class: "h-4 w-4" }),
                              createVNode("p", { class: "text-xs text-gray-400" }, toDisplayString(property.areaSqFt) + " Sq.Ft. ", 1)
                            ])
                          ]),
                          createVNode(_component_NuxtLink, {
                            to: `/properties/${property.slug}`,
                            class: "button-mavrix text-white text-xs px-3 py-1 text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" View Details ")
                            ]),
                            _: 1
                          }, 8, ["to"])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-10 text-center text-gray-400" }, _attrs))} data-v-b3628569><p data-v-b3628569>Sorry! No properties found for this agent.</p></section>`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/properties/agents/AgentProperties.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AgentProperties = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b3628569"]]);
const _sfc_main = {
  __name: "[slug] copy",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const agent = agents.find((a) => a.slug === route.params.slug);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-white pt-16" }, _attrs))}>`);
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(`<div class="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-start gap-10"><div class="w-full md:w-1/3 flex flex-col">`);
      _push(ssrRenderComponent(Breadcrumbsv2, null, null, _parent));
      _push(`<img${ssrRenderAttr("src", unref(agent).image)}${ssrRenderAttr("alt", unref(agent).name)} class="object-cover shadow-2xl"></div><div class="w-full md:w-2/3 pt-12 flex flex-col gap-4"><h1 class="text-3xl md:text-4xl font-light">${ssrInterpolate(unref(agent).name)}</h1><p class="text-gray-400">${ssrInterpolate(unref(agent).title)}</p><div class="text-sm text-gray-300 flex flex-col gap-3"><p><span class="text-mavrix font-medium">Experience:</span> ${ssrInterpolate(unref(agent).experience)}</p><p><span class="text-mavrix font-medium">Specialization:</span> ${ssrInterpolate(unref(agent).specialization)}</p><p><span class="text-mavrix font-medium">Languages:</span> ${ssrInterpolate(unref(agent).languages.join(", "))}</p></div><div class="text-gray-200 leading-relaxed mt-4"><p>${ssrInterpolate(unref(agent).bio)}</p>`);
      if (unref(agent).personal) {
        _push(`<div class="mt-4"><strong class="block mb-1 text-white text-lg"> A little about personal life </strong><p>${ssrInterpolate(unref(agent).personal)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$2, { agent: unref(agent) }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(ssrRenderComponent(AgentProperties, { agent: unref(agent) }, null, _parent));
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/agents/[slug] copy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_ copy-CPD7UpX0.mjs.map
