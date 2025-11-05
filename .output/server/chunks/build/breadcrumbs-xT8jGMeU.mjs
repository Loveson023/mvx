import { _ as __nuxt_component_0 } from './nuxt-link-D7qS_3ag.mjs';
import { computed, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { House, ChevronsRight } from 'lucide-vue-next';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "TemplatesBreadcrumbs",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const crumbs = computed(() => {
      const parts = route.path.split("/").filter(Boolean);
      return parts.map((part, i) => ({
        label: decodeURIComponent(part).replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        // capitalize
        path: "/" + parts.slice(0, i + 1).join("/")
      }));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "mavrix-breadcrumbs w-auto" }, _attrs))} data-v-a3e3c6d5><ul class="flex flex-wrap mt-5 justify-center items-center text-sm" data-v-a3e3c6d5><li data-v-a3e3c6d5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-primary font-medium text-white flex gap-2 items-center transition-colors mavrix-text"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(House), { color: "#c99171" }, null, _parent2, _scopeId));
            _push2(` Home `);
          } else {
            return [
              createVNode(unref(House), { color: "#c99171" }),
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><!--[-->`);
      ssrRenderList(crumbs.value, (crumb, index) => {
        _push(`<!--[--><li class="mx-2 text-neutral-400" data-v-a3e3c6d5>`);
        _push(ssrRenderComponent(unref(ChevronsRight), { color: "#c99171" }, null, _parent));
        _push(`</li><li data-v-a3e3c6d5>`);
        if (index < crumbs.value.length - 1) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: crumb.path,
            class: "hover:text-primary transition-colors mavrix-text"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(crumb.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(crumb.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<span class="mavrix-text font-semibold" data-v-a3e3c6d5>${ssrInterpolate(crumb.label)}</span>`);
        }
        _push(`</li><!--]-->`);
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/templates/breadcrumbs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Breadcrumbs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a3e3c6d5"]]);

export { Breadcrumbs as B };
//# sourceMappingURL=breadcrumbs-xT8jGMeU.mjs.map
