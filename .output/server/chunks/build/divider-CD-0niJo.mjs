import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _imports_0 = publicAssetsURL("/Mavrix.svg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mavrix-divider" }, _attrs))} data-v-f971e2c9><div class="divider-line" data-v-f971e2c9><div class="line-left" data-v-f971e2c9></div><img${ssrRenderAttr("src", _imports_0)} alt="Mavrix Logo" class="mavrix-icon" data-v-f971e2c9><div class="line-right" data-v-f971e2c9></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/templates/divider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Divider = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f971e2c9"]]), { __name: "TemplatesDivider" });

export { Divider as D };
//# sourceMappingURL=divider-CD-0niJo.mjs.map
