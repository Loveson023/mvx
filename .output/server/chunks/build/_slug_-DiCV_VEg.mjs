import { _ as __nuxt_component_0 } from './nuxt-link-D7qS_3ag.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { D as Divider } from './divider-CD-0niJo.mjs';
import { c as createSlug } from './slugify-CVBoEp9i.mjs';
import { MapPin, Wallet, Building2, BedDouble, Bath, LandPlot, PhoneCall } from 'lucide-vue-next';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const slug = route.params.slug;
    const properties = ref([]);
    const loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pt-20 pb-16 text-white max-w-7xl mx-auto px-6 lg:px-12" }, _attrs))}>`);
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(`<h1 class="text-3xl md:text-4xl font-light uppercase mb-10"> Properties for ${ssrInterpolate(unref(slug).replace("-", " "))} in Dubai </h1>`);
      if (loading.value) {
        _push(`<div class="text-center text-gray-400 py-20"> Loading properties... </div>`);
      } else if (properties.value.length) {
        _push(`<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
        ssrRenderList(properties.value, (property) => {
          _push(`<div class="bg-[#212121] rounded-2xl property_card shadow-md hover:shadow-xl transition overflow-hidden group">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/${unref(createSlug)(property)}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="relative"${_scopeId}><img${ssrRenderAttr("src", property.photos?.[0]?.full_path || "/images/properties/mavrix.jpg")} alt="Property" class="h-40 w-full object-cover transform group-hover:scale-105 transition-transform duration-500 cursor-pointer"${_scopeId}><span class="absolute top-3 right-3 property-badge text-white text-xs px-3 py-1 rounded-full"${_scopeId}>${ssrInterpolate(property.purpose)}</span></div>`);
              } else {
                return [
                  createVNode("div", { class: "relative" }, [
                    createVNode("img", {
                      src: property.photos?.[0]?.full_path || "/images/properties/mavrix.jpg",
                      alt: "Property",
                      class: "h-40 w-full object-cover transform group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                    }, null, 8, ["src"]),
                    createVNode("span", { class: "absolute top-3 right-3 property-badge text-white text-xs px-3 py-1 rounded-full" }, toDisplayString(property.purpose), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="p-5 flex flex-col flex-1"><h2 class="text-lg font-light text-gray-200 line-clamp-2">${ssrInterpolate(property.title)}</h2><div class="flex gap-2 items-center py-4">`);
          _push(ssrRenderComponent(unref(MapPin), {
            color: "#c99171",
            class: "h-8 w-8",
            "stroke-width": 1
          }, null, _parent));
          _push(`<p class="text-gray-400 text-sm">${ssrInterpolate(property.location?.full_path)}</p></div><div class="flex gap-2 border-t border-b py-3 my-2 justify-between"><div class="flex gap-2 px-2 align-middle items-center">`);
          _push(ssrRenderComponent(unref(Wallet), {
            class: "h-6 w-6",
            "stroke-width": 1
          }, null, _parent));
          _push(`<p class="text-md font-light text-mavrix"> AED ${ssrInterpolate(property.price?.toLocaleString())}</p></div><div class="flex gap-2 px-2 align-middle items-center">`);
          _push(ssrRenderComponent(unref(Building2), {
            class: "h-6 w-6",
            "stroke-width": 1
          }, null, _parent));
          _push(`<p class="text-xs text-gray-400">${ssrInterpolate(property.category || "N/A")}</p></div></div><div class="flex gap-2 py-3"><div class="flex gap-2 px-2 items-center border-r border-r-gray-600">`);
          _push(ssrRenderComponent(unref(BedDouble), {
            class: "h-8 w-8",
            "stroke-width": 1
          }, null, _parent));
          _push(`<p class="text-xs text-gray-400">${ssrInterpolate(property.bed?.name || "N/A")}</p></div><div class="flex gap-2 px-2 items-center border-r border-r-gray-600">`);
          _push(ssrRenderComponent(unref(Bath), {
            class: "h-8 w-8",
            "stroke-width": 1
          }, null, _parent));
          _push(`<p class="text-xs text-gray-400">${ssrInterpolate(property.bath?.name || "N/A")}</p></div><div class="flex gap-2 px-2 items-center">`);
          _push(ssrRenderComponent(unref(LandPlot), {
            class: "h-8 w-8",
            "stroke-width": 1
          }, null, _parent));
          _push(`<p class="text-xs text-gray-400">${ssrInterpolate(property.built_size)} Sq.Ft.</p></div></div><div class="flex justify-between gap-4 items-center mt-4">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/${unref(createSlug)(property)}`,
            class: "button-mavrix w-full text-center font-light uppercase text-sm"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` View Details → `);
              } else {
                return [
                  createTextVNode(" View Details → ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<a${ssrRenderAttr("href", `tel:${property.user?.mobile}`)} class="button-mavrix-outline">`);
          _push(ssrRenderComponent(unref(PhoneCall), {
            color: "#c99171",
            class: "h-4 w-4",
            "stroke-width": 1
          }, null, _parent));
          _push(`</a></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center mt-16 bg-neutral-900 rounded-2xl py-10 border border-neutral-800"><h2 class="text-2xl font-light text-gray-300"> No properties found for this purpose. </h2></div>`);
      }
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/purposes/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-DiCV_VEg.mjs.map
