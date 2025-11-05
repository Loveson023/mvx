import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { H as HeroSectionTwo, C as CallToActionSection } from './CallToActionSection-VqhfhFLr.mjs';
import { D as Divider } from './divider-CD-0niJo.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-D7qS_3ag.mjs';
import { a as agents } from './agents-D2hQc5FU.mjs';
import { House, ChevronsRight } from 'lucide-vue-next';
import './InquiryForm-Bs-BTmqv.mjs';
import 'reka-ui';
import './tv-Dyxj8f8C.mjs';
import 'tailwind-variants';
import './server.mjs';
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
import 'vue-router';
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
import '@vueuse/core';
import './useFormField-WbuSM5T2.mjs';
import './index-3UlAPwuq.mjs';
import './Link-CYf1dq5X.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$1 = {
  __name: "PropertiesAgentsGrid",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedSpecialization = ref("all");
    const selectedLanguage = ref("all");
    const agents$1 = ref(agents);
    const uniqueSpecializations = computed(() => [
      ...new Set(agents$1.value.map((a) => a.specialization))
    ]);
    const uniqueLanguages = computed(() => [
      ...new Set(agents$1.value.flatMap((a) => a.languages))
    ]);
    const filteredAgents = computed(() => {
      return agents$1.value.filter((agent) => {
        const matchSpec = selectedSpecialization.value === "all" || agent.specialization === selectedSpecialization.value;
        const matchLang = selectedLanguage.value === "all" || agent.languages.includes(selectedLanguage.value);
        return matchSpec && matchLang;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-white" }, _attrs))}><div class="container mx-auto px-6"><div class="flex flex-wrap justify-between"><div class="flex justify-start gap-2 flex-col"><div class="flex justify-start gap-2">`);
      _push(ssrRenderComponent(unref(House), { color: "#c99171" }, null, _parent));
      _push(ssrRenderComponent(unref(ChevronsRight), { color: "#c99171" }, null, _parent));
      _push(`<span>Real Estate Agents In Dubai </span></div><h1 class="text-3xl md:text-4xl font-light uppercase mb-8 text-center"> FIND YOUR PARTNER </h1></div><div class="gap-4 flex-wrap"><select class="border px-4 py-2 mx-2 text-sm focus:outline-none"><option value="all"${ssrIncludeBooleanAttr(Array.isArray(selectedSpecialization.value) ? ssrLooseContain(selectedSpecialization.value, "all") : ssrLooseEqual(selectedSpecialization.value, "all")) ? " selected" : ""}>All Specializations</option><!--[-->`);
      ssrRenderList(uniqueSpecializations.value, (spec) => {
        _push(`<option${ssrRenderAttr("value", spec)}${ssrIncludeBooleanAttr(Array.isArray(selectedSpecialization.value) ? ssrLooseContain(selectedSpecialization.value, spec) : ssrLooseEqual(selectedSpecialization.value, spec)) ? " selected" : ""}>${ssrInterpolate(spec)}</option>`);
      });
      _push(`<!--]--></select><select class="border px-4 py-2 text-sm focus:outline-none"><option value="all"${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, "all") : ssrLooseEqual(selectedLanguage.value, "all")) ? " selected" : ""}>All Languages</option><!--[-->`);
      ssrRenderList(uniqueLanguages.value, (lang) => {
        _push(`<option${ssrRenderAttr("value", lang)}${ssrIncludeBooleanAttr(Array.isArray(selectedLanguage.value) ? ssrLooseContain(selectedLanguage.value, lang) : ssrLooseEqual(selectedLanguage.value, lang)) ? " selected" : ""}>${ssrInterpolate(lang)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"><!--[-->`);
      ssrRenderList(filteredAgents.value, (agent) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: agent.slug,
          to: `/agents/${agent.slug}`,
          class: "overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative h-100 overflow-hidden"${_scopeId}><img${ssrRenderAttr("src", agent.image)}${ssrRenderAttr("alt", agent.name)} class="object-cover h-full w-full transform group-hover:scale-105 transition-transform duration-500"${_scopeId}></div><div class="p-5 bg-gradient-to-t from-black/80 via-black/60 to-transparent -mt-24 backdrop-blur-2xl relative z-10"${_scopeId}><h2 class="text-lg font-semibold"${_scopeId}>${ssrInterpolate(agent.name)}</h2><p class="text-sm text-gray-300"${_scopeId}>${ssrInterpolate(agent.title)}</p><p class="text-xs mt-2 text-gray-400"${_scopeId}> Experience: ${ssrInterpolate(agent.experience)}</p><p class="text-xs text-gray-400"${_scopeId}> Languages: ${ssrInterpolate(agent.languages.join(", "))}</p></div>`);
            } else {
              return [
                createVNode("div", { class: "relative h-100 overflow-hidden" }, [
                  createVNode("img", {
                    src: agent.image,
                    alt: agent.name,
                    class: "object-cover h-full w-full transform group-hover:scale-105 transition-transform duration-500"
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("div", { class: "p-5 bg-gradient-to-t from-black/80 via-black/60 to-transparent -mt-24 backdrop-blur-2xl relative z-10" }, [
                  createVNode("h2", { class: "text-lg font-semibold" }, toDisplayString(agent.name), 1),
                  createVNode("p", { class: "text-sm text-gray-300" }, toDisplayString(agent.title), 1),
                  createVNode("p", { class: "text-xs mt-2 text-gray-400" }, " Experience: " + toDisplayString(agent.experience), 1),
                  createVNode("p", { class: "text-xs text-gray-400" }, " Languages: " + toDisplayString(agent.languages.join(", ")), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/properties/agents/AgentsGrid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index copy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(HeroSectionTwo, null, null, _parent));
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(ssrRenderComponent(CallToActionSection, null, null, _parent));
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/agents/index copy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index copy-B8CThRXE.mjs.map
