import { computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { P as PropertyGallery } from './PropertyGallery-CBco0del.mjs';
import { D as Divider } from './divider-CD-0niJo.mjs';
import { B as Breadcrumbs } from './breadcrumbs-xT8jGMeU.mjs';
import { p as properties } from './properties-5a0AL7Gl.mjs';
import 'embla-carousel-vue';
import 'reka-ui';
import '@vueuse/core';
import './useLocale-DNEMYcP0.mjs';
import './index-3UlAPwuq.mjs';
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
import './tv-Dyxj8f8C.mjs';
import 'tailwind-variants';
import './server.mjs';
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
import './useFormField-WbuSM5T2.mjs';
import './Link-CYf1dq5X.mjs';
import './nuxt-link-D7qS_3ag.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'lucide-vue-next';

const _sfc_main = {
  __name: "[slug] copy",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const property = computed(
      () => properties.find((p) => p.slug === route.params.slug)
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-8" }, _attrs))}>`);
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(ssrRenderComponent(Breadcrumbs, null, null, _parent));
      if (unref(property)) {
        _push(`<div><h1 class="text-3xl font-bold mb-4">${ssrInterpolate(unref(property).title)}</h1>`);
        _push(ssrRenderComponent(PropertyGallery, {
          images: unref(property).images
        }, null, _parent));
        _push(`<div class="mt-6"><p class="text-gray-700 leading-relaxed">${ssrInterpolate(unref(property).content)}</p></div><ul class="mt-6 flex flex-wrap gap-3"><!--[-->`);
        ssrRenderList(unref(property).amenities, (amenity, i) => {
          _push(`<li class="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">${ssrInterpolate(amenity)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<div><p class="text-center text-gray-500">Property not found.</p></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/properties/[slug] copy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_ copy-CqziAJvT.mjs.map
