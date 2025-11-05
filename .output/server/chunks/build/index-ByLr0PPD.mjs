import { _ as __nuxt_component_0 } from './nuxt-link-D7qS_3ag.mjs';
import { ref, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { D as Divider } from './divider-CD-0niJo.mjs';
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
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const categories = ref([]);
    const loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pt-20 pb-16 text-white max-w-7xl mx-auto px-6 lg:px-12" }, _attrs))}>`);
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(`<h1 class="text-3xl md:text-4xl font-light uppercase mb-10">Property Categories</h1>`);
      if (loading.value) {
        _push(`<div class="text-center text-gray-400 py-20">Loading categories...</div>`);
      } else {
        _push(`<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"><!--[-->`);
        ssrRenderList(categories.value, (category) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: category.slug,
            to: `/categories/${category.slug}`,
            class: "bg-neutral-900 hover:bg-neutral-800 rounded-xl overflow-hidden shadow-lg transition-all"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", category.image)}${ssrRenderAttr("alt", category.name)} class="h-56 w-full object-cover"${_scopeId}><div class="p-5"${_scopeId}><h2 class="text-lg font-semibold capitalize"${_scopeId}>${ssrInterpolate(category.name)}</h2></div>`);
              } else {
                return [
                  createVNode("img", {
                    src: category.image,
                    alt: category.name,
                    class: "h-56 w-full object-cover"
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", { class: "p-5" }, [
                    createVNode("h2", { class: "text-lg font-semibold capitalize" }, toDisplayString(category.name), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-ByLr0PPD.mjs.map
