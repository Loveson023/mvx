import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { H as HeroSectionTwo, C as CallToActionSection } from './CallToActionSection-VqhfhFLr.mjs';
import { D as Divider } from './divider-CD-0niJo.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-D7qS_3ag.mjs';
import { House, ChevronsRight } from 'lucide-vue-next';
import { _ as _sfc_main$4 } from './Select-DAuroahV.mjs';
import { a as agents } from './agents-D2hQc5FU.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './usePortal-Brbu9lm4.mjs';

const _sfc_main$3 = {
  __name: "PropertiesAgentsFiltersLanguages",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const localValue = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val)
    });
    const languages = [
      ...new Set(agents.flatMap((a) => a.languages))
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USelect = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col text-white" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: localValue.value,
        "onUpdate:modelValue": ($event) => localValue.value = $event,
        items: languages,
        placeholder: "Select Language",
        class: "w-52 border text-sm rounded-none text-white"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/properties/agents/filters/languages.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "PropertiesAgentsFiltersSpecialization",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const localValue = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val)
    });
    const specializations = [...new Set(agents.map((a) => a.specialization))];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USelect = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col text-white" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: localValue.value,
        "onUpdate:modelValue": ($event) => localValue.value = $event,
        items: specializations,
        placeholder: "Select Specialization",
        class: "w-52 border text-sm rounded-none text-white"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/properties/agents/filters/specialization.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "PropertiesAgentsAgentList",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedLang = ref(null);
    const selectedSpec = ref(null);
    const agents2 = ref([]);
    const filteredAgents = computed(() => {
      return agents2.value.filter((agent) => {
        const langMatch = !selectedLang.value || agent.languages.includes(selectedLang.value);
        const specMatch = !selectedSpec.value || agent.title.toLowerCase().includes(selectedSpec.value.toLowerCase());
        return langMatch && specMatch;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pt-16 pb-20 text-white max-w-7xl mx-auto px-6 lg:px-12" }, _attrs))} data-v-f29b02a5><div class="flex flex-wrap justify-between" data-v-f29b02a5><div class="flex justify-start gap-2 flex-col" data-v-f29b02a5><div class="flex justify-start gap-2 items-center" data-v-f29b02a5>`);
      _push(ssrRenderComponent(unref(House), { color: "#c99171" }, null, _parent));
      _push(ssrRenderComponent(unref(ChevronsRight), { color: "#c99171" }, null, _parent));
      _push(`<span data-v-f29b02a5>Real Estate Agents In Dubai</span></div><h1 class="text-3xl md:text-4xl font-light uppercase mb-8 text-center lg:text-left" data-v-f29b02a5> FIND YOUR PARTNER </h1></div><div class="flex gap-4 flex-wrap" data-v-f29b02a5>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: selectedLang.value,
        "onUpdate:modelValue": ($event) => selectedLang.value = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: selectedSpec.value,
        "onUpdate:modelValue": ($event) => selectedSpec.value = $event
      }, null, _parent));
      _push(`</div></div>`);
      if (filteredAgents.value.length > 0) {
        _push(`<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" data-v-f29b02a5><!--[-->`);
        ssrRenderList(filteredAgents.value, (agent) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: agent.id,
            to: `/agents/${agent.slug}`,
            class: "overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group rounded-xl bg-neutral-900"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="relative h-96 overflow-hidden" data-v-f29b02a5${_scopeId}><img${ssrRenderAttr("src", agent.image)}${ssrRenderAttr("alt", agent.name)} class="object-cover h-full w-full transform group-hover:scale-105 transition-transform duration-500" data-v-f29b02a5${_scopeId}></div><div class="p-5 bg-gradient-to-t from-black/80 via-black/60 to-transparent -mt-24 backdrop-blur-2xl relative z-10" data-v-f29b02a5${_scopeId}><h2 class="text-lg font-semibold" data-v-f29b02a5${_scopeId}>${ssrInterpolate(agent.name)}</h2><p class="text-sm text-gray-300" data-v-f29b02a5${_scopeId}>${ssrInterpolate(agent.title)}</p><p class="text-xs mt-2 text-gray-400" data-v-f29b02a5${_scopeId}>Experience: ${ssrInterpolate(agent.experience)}</p><p class="text-xs text-gray-400" data-v-f29b02a5${_scopeId}>Languages: ${ssrInterpolate(agent.languages.join(", "))}</p></div>`);
              } else {
                return [
                  createVNode("div", { class: "relative h-96 overflow-hidden" }, [
                    createVNode("img", {
                      src: agent.image,
                      alt: agent.name,
                      class: "object-cover h-full w-full transform group-hover:scale-105 transition-transform duration-500"
                    }, null, 8, ["src", "alt"])
                  ]),
                  createVNode("div", { class: "p-5 bg-gradient-to-t from-black/80 via-black/60 to-transparent -mt-24 backdrop-blur-2xl relative z-10" }, [
                    createVNode("h2", { class: "text-lg font-semibold" }, toDisplayString(agent.name), 1),
                    createVNode("p", { class: "text-sm text-gray-300" }, toDisplayString(agent.title), 1),
                    createVNode("p", { class: "text-xs mt-2 text-gray-400" }, "Experience: " + toDisplayString(agent.experience), 1),
                    createVNode("p", { class: "text-xs text-gray-400" }, "Languages: " + toDisplayString(agent.languages.join(", ")), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center mt-16 bg-neutral-900 rounded-2xl py-10 border border-neutral-800" data-v-f29b02a5><h2 class="text-2xl font-light text-gray-300" data-v-f29b02a5>Sorry!</h2><p class="text-gray-500 mt-2" data-v-f29b02a5>Your query doesn’t match any agents.</p></div>`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/properties/agents/AgentList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AgentList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f29b02a5"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(HeroSectionTwo, null, null, _parent));
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(ssrRenderComponent(AgentList, null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/agents/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BRGSq5gK.mjs.map
