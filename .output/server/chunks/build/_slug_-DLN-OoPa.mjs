import { unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { p as projects } from './projects-DC0tM7q0.mjs';
import { MapPin, Building2, Ruler, KeyRound } from 'lucide-vue-next';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const project = projects.find((p) => p.slug === route.params.slug);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(project)) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-gray-20" }, _attrs))}><div class="relative"><img${ssrRenderAttr("src", unref(project).gallery[0])} class="w-full h-[100vh] object-cover"><div class="absolute inset-0 bg-black/50 flex flex-col justify-end px-8 lg:px-24"><h1 class="text-4xl font-light">${ssrInterpolate(unref(project).name)}</h1><p class="mt-2 flex items-center gap-2 text-gray-300">`);
        _push(ssrRenderComponent(unref(MapPin), { class: "h-4 w-4 text-mavrix" }, null, _parent));
        _push(` ${ssrInterpolate(unref(project).location)}</p><p class="mt-4 text-mavrix font-semibold text-xl">${ssrInterpolate(unref(project).startingPrice)}</p></div></div><div class="max-w-7xl mx-auto px-6 py-12 space-y-6"><h2 class="text-2xl font-semibold text-white">Project Overview</h2><p class="text-gray-400 leading-relaxed">${ssrInterpolate(unref(project).description)}</p><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 text-gray-300"><div class="flex items-center gap-3">`);
        _push(ssrRenderComponent(unref(Building2), null, null, _parent));
        _push(` <span>${ssrInterpolate(unref(project).developer)}</span></div><div class="flex items-center gap-3">`);
        _push(ssrRenderComponent(unref(Ruler), null, null, _parent));
        _push(` <span>${ssrInterpolate(unref(project).propertyTypes.join(", "))}</span></div><div class="flex items-center gap-3">`);
        _push(ssrRenderComponent(unref(KeyRound), null, null, _parent));
        _push(` <span>${ssrInterpolate(unref(project).status)}</span></div><div class="flex items-center gap-3">`);
        _push(ssrRenderComponent(unref(MapPin), null, null, _parent));
        _push(` <span>${ssrInterpolate(unref(project).location)}</span></div></div></div><div class="max-w-7xl mx-auto px-6 py-12"><h2 class="text-2xl font-semibold text-white mb-6">Gallery</h2><div class="grid grid-cols-2 md:grid-cols-4 gap-4"><!--[-->`);
        ssrRenderList(unref(project).gallery, (img, i) => {
          _push(`<img${ssrRenderAttr("src", img)} class="rounded-lg object-cover">`);
        });
        _push(`<!--]--></div></div><div class="mx-auto px-6 py-12 relative bg-black text-white py-24 overflow-hidden"><div class="absolute inset-0 bg-cover bg-center-no-repeat opacity-30 parallax-bg" style="${ssrRenderStyle({ backgroundImage: `url('/img_1.jpg')` })}"></div><h2 class="text-2xl font-semibold text-white mb-6 text-center">Payment Plan</h2><div class="grid grid-cols-1 sm:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(unref(project).paymentPlan.milestones, (item, index) => {
          _push(`<div class="p-6 mavrix-gradient-border backdrop-blur-sm bg-black/40 shadow hover:shadow-lg transition-all text-center"><div class="text-4xl font-bold text-mavrix">${ssrInterpolate(item.percentage)}</div><p class="uppercase tracking-wider text-gray-400">${ssrInterpolate(item.label)}</p></div>`);
        });
        _push(`<!--]--></div></div><div class="max-w-7xl mx-auto px-6 py-12"><h2 class="text-2xl font-semibold text-white mb-6">Features &amp; Amenities</h2><div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-gray-300"><!--[-->`);
        ssrRenderList(unref(project).amenities, (a, i) => {
          _push(`<div class="bg-zinc-900 py-3 px-4 border text-center">${ssrInterpolate(a)}</div>`);
        });
        _push(`<!--]--></div></div>`);
        _push(ssrRenderComponent(Divider, null, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-center py-20 text-gray-400" }, _attrs))}> Project not found. </section>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-DLN-OoPa.mjs.map
