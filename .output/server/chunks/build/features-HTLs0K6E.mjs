import { defineComponent, mergeProps, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';
import { Home, Building2, Key } from 'lucide-vue-next';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "features",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      {
        icon: Home,
        title: "Luxury Villas",
        description: "Explore handpicked villas with stunning designs and modern amenities."
      },
      {
        icon: Building2,
        title: "Premium Apartments",
        description: "Discover high-rise apartments with breathtaking city views in Dubai."
      },
      {
        icon: Key,
        title: "Trusted Agents",
        description: "Our verified agents ensure seamless buying and renting experiences."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "mx-auto",
        style: { "margin-right": "30px" }
      }, _attrs))} data-v-7d2b0e77><div class="space-y-8" data-v-7d2b0e77><!--[-->`);
      ssrRenderList(features, (feature, index) => {
        _push(`<div class="flex items-center justify-center align-middle gap-4 p-4 mavrix-gradient-border bg-white shadow-sm hover:shadow-md transition-all border border-gray-100 dark:bg-[#212121] dark:border-gray-700" data-v-7d2b0e77><div class="flex items-center justify-center w-12 h-12 text-white flex-shrink-0 list-bg" data-v-7d2b0e77>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(feature.icon), {
          class: "w-6 h-6",
          "stroke-width": 1
        }, null), _parent);
        _push(`</div><div data-v-7d2b0e77><h3 class="text-lg font-semibold text-gray-800 dark:text-white" data-v-7d2b0e77>${ssrInterpolate(feature.title)}</h3><p class="text-gray-600 text-sm mt-1 dark:text-gray-400" data-v-7d2b0e77>${ssrInterpolate(feature.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/templates/features.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Features = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-7d2b0e77"]]), { __name: "TemplatesFeatures" });

export { Features as F };
//# sourceMappingURL=features-HTLs0K6E.mjs.map
