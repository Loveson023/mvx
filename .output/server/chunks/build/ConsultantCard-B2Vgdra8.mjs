import { _ as __nuxt_component_0 } from './nuxt-link-D7qS_3ag.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$1 = {
  __name: "PropertiesPropertyCard",
  __ssrInlineRender: true,
  props: {
    property: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border theme-light theme-dark shadow hover:shadow-lg transition overflow-hidden" }, _attrs))}><img${ssrRenderAttr("src", __props.property.images[0])}${ssrRenderAttr("alt", __props.property.title)} class="h-48 w-full object-cover"><div class="p-4 bg-black">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/properties/${__props.property.slug}`,
        class: "block text-lg text-light font-semibold mt-3 hover:text-[#ffd700] transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.property.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.property.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-theme-light text-theme-dark text-sm">${ssrInterpolate(__props.property.location)}</p><div class="mt-2 text-gray-200 text-sm"><p>${ssrInterpolate(__props.property.bedrooms)} | ${ssrInterpolate(__props.property.area)}</p><p class="font-semibold text-mavrix mt-1">${ssrInterpolate(__props.property.price)}</p></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/properties/PropertyCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#111] text-white p-5 rounded-xl text-center mavrix-gradient-border" }, _attrs))}><img src="https://picsum.photos/120" alt="Consultant" class="w-20 h-20 rounded-full mx-auto mb-3"><h4 class="text-lg font-semibold">Azeeza Al-Sham</h4><p class="text-sm text-gray-400 mb-4">Property Consultant</p><button class="w-full button-mavrix py-2 rounded mb-2">CALL US</button><button class="w-full border button-mavrix-outline py-2 rounded hover:text-white"> INQUIRY </button><p class="text-xs mt-3 text-gray-400">Or contact via WhatsApp</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/properties/ConsultantCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ConsultantCard = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "PropertiesConsultantCard" });

export { ConsultantCard as C, _sfc_main$1 as _ };
//# sourceMappingURL=ConsultantCard-B2Vgdra8.mjs.map
