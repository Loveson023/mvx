import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { p as properties } from './properties-5a0AL7Gl.mjs';
import { _ as _sfc_main$1, A as AdvancedFilters } from './AdvancedFilters-BJFLwg2y.mjs';
import { _ as _sfc_main$1$1, C as ConsultantCard } from './ConsultantCard-B2Vgdra8.mjs';
import { D as Divider } from './divider-CD-0niJo.mjs';
import { B as Breadcrumbs } from './breadcrumbs-xT8jGMeU.mjs';
import './Select-DAuroahV.mjs';
import 'reka-ui';
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
import '@vueuse/core';
import './Avatar-BMtAh9aM.mjs';
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
import './NuxtImg-D9WVKGOy.mjs';
import './tv-Dyxj8f8C.mjs';
import 'tailwind-variants';
import './Icon-BXHY_Wln.mjs';
import './index-BifeFrQR.mjs';
import '@iconify/utils/lib/css/icon';
import './asyncData-DzZ9Lhv5.mjs';
import './useFormField-WbuSM5T2.mjs';
import './usePortal-Brbu9lm4.mjs';
import './index-3UlAPwuq.mjs';
import './Slider-C_LRI16S.mjs';
import './Input-LEel6pki.mjs';
import './Kbd-D2QeKaIj.mjs';
import 'lucide-vue-next';
import './Button-DdQxHajf.mjs';
import './Link-CYf1dq5X.mjs';
import './nuxt-link-D7qS_3ag.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const types = [...new Set(properties.map((p) => p.type))];
    const locations = [...new Set(properties.map((p) => p.location))];
    const bedrooms = [...new Set(properties.map((p) => p.bedrooms))];
    const filters = ref({ type: "", location: "", bedrooms: "" });
    const handleFilter = (f) => {
      filters.value = f;
    };
    const filteredProperties = computed(
      () => properties.filter((p) => {
        const matchType = !filters.value.type || p.type === filters.value.type;
        const matchLocation = !filters.value.location || p.location === filters.value.location;
        const matchBedrooms = !filters.value.bedrooms || p.bedrooms === filters.value.bedrooms;
        return matchType && matchLocation && matchBedrooms;
      })
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "p-2" }, _attrs))}>`);
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(ssrRenderComponent(Breadcrumbs, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        types,
        locations,
        bedrooms,
        onFilter: handleFilter
      }, null, _parent));
      _push(ssrRenderComponent(AdvancedFilters, null, null, _parent));
      _push(`<div class="grid grid-cols-1 lg:grid-cols-4 gap-8 py-8"><div class="lg:col-span-3 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"><!--[-->`);
      ssrRenderList(filteredProperties.value, (property) => {
        _push(ssrRenderComponent(_sfc_main$1$1, {
          key: property.id,
          property
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="lg:col-span-1">`);
      _push(ssrRenderComponent(ConsultantCard, null, null, _parent));
      _push(`</div>`);
      if (!filteredProperties.value.length) {
        _push(`<p class="text-dark text-light mt-8 text-center"> No properties match your filters. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/properties/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CpXmqCFU.mjs.map
