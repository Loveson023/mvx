import { mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { D as Divider } from './divider-CD-0niJo.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-D7qS_3ag.mjs';
import { p as projects } from './projects-DC0tM7q0.mjs';
import { B as Breadcrumbsv2 } from './breadcrumbsv2-DDg0Vc0z.mjs';
import { MapPin, Building2, Wallet, Handshake, Hourglass } from 'lucide-vue-next';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main$1 = {
  __name: "ProjectsProjectCard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-12 text-gray-800" }, _attrs))}><div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">`);
      _push(ssrRenderComponent(Breadcrumbsv2, null, null, _parent));
      _push(`<h1 class="text-3xl font-light uppercase text-white mb-8 text-center md:text-left"> Latest Projects </h1><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(unref(projects), (project) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: project.id,
          to: `/projects/${project.slug}`,
          class: "block bg-mavrix transition duration-300 overflow-hidden"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative h-100 overflow-hidden"${_scopeId}><img${ssrRenderAttr("src", project.images[0])} alt="project image" class="object-cover h-full w-full transform group-hover:scale-105 transition-transform duration-500"${_scopeId}></div><div class="p-5 bg-gradient-to-t from-black/80 via-black/60 to-transparent -mt-24 backdrop-blur-md relative z-10"${_scopeId}><div class="flex flex-col gap-2"${_scopeId}><h2 class="text-lg md:text-xl font-light text-white text-gray-900 line-clamp-1"${_scopeId}>${ssrInterpolate(project.name)}</h2><div class="flex gap-2 border-t border-t-old-neutral-200 py-2"${_scopeId}><span class="font-medium text-gray-200"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(MapPin), { color: "#AF7554" }, null, _parent2, _scopeId));
              _push2(`</span><span class="font-medium text-gray-200"${_scopeId}>${ssrInterpolate(project.location)}</span></div><div class="flex justify-between border-b border-b-old-neutral-200 border-t border-t-old-neutral-200 py-2"${_scopeId}><div class="flex gap-2"${_scopeId}><span class="font-medium text-gray-200"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Building2), { color: "#AF7554" }, null, _parent2, _scopeId));
              _push2(`</span><span class="font-medium text-gray-200"${_scopeId}>${ssrInterpolate(project.developer)}</span></div><div class="flex gap-2"${_scopeId}><span class="font-medium text-gray-200"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Wallet), { color: "#AF7554" }, null, _parent2, _scopeId));
              _push2(`</span><span class="font-medium text-gray-200"${_scopeId}>${ssrInterpolate(project.priceFrom)}</span></div></div><div class="flex flex-row justify-between border-b border-b-old-neutral-200 py-2"${_scopeId}><div class="flex gap-2"${_scopeId}><span class="font-medium text-gray-200"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Handshake), { color: "#AF7554" }, null, _parent2, _scopeId));
              _push2(`</span><span class="font-medium text-gray-200"${_scopeId}>${ssrInterpolate(project.handover)}</span></div><div class="flex gap-2"${_scopeId}><span class="font-medium text-gray-200"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Hourglass), { color: "#AF7554" }, null, _parent2, _scopeId));
              _push2(`</span><span class="font-medium text-gray-200"${_scopeId}>${ssrInterpolate(project.status)}</span></div></div><p class="text-sm button-mavrix font-light text-center"${_scopeId}> EXPLORE PROJECT </p></div></div>`);
            } else {
              return [
                createVNode("div", { class: "relative h-100 overflow-hidden" }, [
                  createVNode("img", {
                    src: project.images[0],
                    alt: "project image",
                    class: "object-cover h-full w-full transform group-hover:scale-105 transition-transform duration-500"
                  }, null, 8, ["src"])
                ]),
                createVNode("div", { class: "p-5 bg-gradient-to-t from-black/80 via-black/60 to-transparent -mt-24 backdrop-blur-md relative z-10" }, [
                  createVNode("div", { class: "flex flex-col gap-2" }, [
                    createVNode("h2", { class: "text-lg md:text-xl font-light text-white text-gray-900 line-clamp-1" }, toDisplayString(project.name), 1),
                    createVNode("div", { class: "flex gap-2 border-t border-t-old-neutral-200 py-2" }, [
                      createVNode("span", { class: "font-medium text-gray-200" }, [
                        createVNode(unref(MapPin), { color: "#AF7554" })
                      ]),
                      createVNode("span", { class: "font-medium text-gray-200" }, toDisplayString(project.location), 1)
                    ]),
                    createVNode("div", { class: "flex justify-between border-b border-b-old-neutral-200 border-t border-t-old-neutral-200 py-2" }, [
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode("span", { class: "font-medium text-gray-200" }, [
                          createVNode(unref(Building2), { color: "#AF7554" })
                        ]),
                        createVNode("span", { class: "font-medium text-gray-200" }, toDisplayString(project.developer), 1)
                      ]),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode("span", { class: "font-medium text-gray-200" }, [
                          createVNode(unref(Wallet), { color: "#AF7554" })
                        ]),
                        createVNode("span", { class: "font-medium text-gray-200" }, toDisplayString(project.priceFrom), 1)
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-row justify-between border-b border-b-old-neutral-200 py-2" }, [
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode("span", { class: "font-medium text-gray-200" }, [
                          createVNode(unref(Handshake), { color: "#AF7554" })
                        ]),
                        createVNode("span", { class: "font-medium text-gray-200" }, toDisplayString(project.handover), 1)
                      ]),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode("span", { class: "font-medium text-gray-200" }, [
                          createVNode(unref(Hourglass), { color: "#AF7554" })
                        ]),
                        createVNode("span", { class: "font-medium text-gray-200" }, toDisplayString(project.status), 1)
                      ])
                    ]),
                    createVNode("p", { class: "text-sm button-mavrix font-light text-center" }, " EXPLORE PROJECT ")
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/projects/ProjectCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pt-16" }, _attrs))}>`);
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-fbATIoxQ.mjs.map
