import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { p as properties } from './properties-5a0AL7Gl.mjs';
import { _ as _sfc_main$1, C as ConsultantCard } from './ConsultantCard-B2Vgdra8.mjs';
import { D as Divider } from './divider-CD-0niJo.mjs';
import { B as Breadcrumbs } from './breadcrumbs-xT8jGMeU.mjs';
import './nuxt-link-D7qS_3ag.mjs';
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
import 'lucide-vue-next';

const _sfc_main = {
  __name: "index copy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black min-h-screen text-white px-4 md:px-10 py-10" }, _attrs))}>`);
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(ssrRenderComponent(Breadcrumbs, null, null, _parent));
      _push(`<h1 class="text-center text-3xl md:text-4xl font-semibold mb-8"> PROPERTIES FOR SALE IN DUBAI </h1><div class="grid grid-cols-1 lg:grid-cols-4 gap-8"><div class="lg:col-span-3 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(properties), (property) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          key: property.id,
          property
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="lg:col-span-1">`);
      _push(ssrRenderComponent(ConsultantCard, null, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/properties/index copy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index copy-CP11rE66.mjs.map
