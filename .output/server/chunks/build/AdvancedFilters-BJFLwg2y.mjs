import { ref, mergeProps, computed, unref, createVNode, resolveDynamicComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import { _ as _sfc_main$7 } from './Select-DAuroahV.mjs';
import { a as propertyTypes, b as propertyLocations } from './properties-5a0AL7Gl.mjs';
import { _ as _sfc_main$8 } from './Slider-C_LRI16S.mjs';
import { LucideSearch, Waves, Dumbbell, Car, Flower, ShieldCheck, Home, Dog, Key } from 'lucide-vue-next';
import { _ as _sfc_main$9 } from './Input-LEel6pki.mjs';
import { _ as _sfc_main$a } from './Button-DdQxHajf.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$6 = {
  __name: "PropertiesFiltersPropertyTypeSelect",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: [String, Array],
      default: () => []
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
    const items = propertyTypes.map((t) => t.name);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USelect = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col text-white" }, _attrs))}><h2 class="text-sm uppercase text-gray-400 mb-2">Property Type</h2>`);
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: localValue.value,
        "onUpdate:modelValue": ($event) => localValue.value = $event,
        multiple: "",
        items: unref(items),
        placeholder: "Select property type",
        class: "w-52 bg-[#1a1918] border text-sm rounded-none text-white"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/properties/filters/PropertyTypeSelect.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "PropertiesFiltersLocationSelect",
  __ssrInlineRender: true,
  props: {
    modelValue: [String, Number]
    // default: () => []
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const localValue = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val)
    });
    const items = propertyLocations.map((t) => t.name);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USelect = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col text-white" }, _attrs))}><h2 class="text-sm uppercase text-gray-400 mb-2">Locations</h2><div class="flex items-center gap-2 border bg-[#1a1918]">`);
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: localValue.value,
        "onUpdate:modelValue": ($event) => localValue.value = $event,
        multiple: "",
        items: unref(items),
        placeholder: "Select Locations",
        class: "w-52 bg-[#1a1918] text-sm rounded-none text-white"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/properties/filters/LocationSelect.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "PropertiesFiltersBedroomsSelect",
  __ssrInlineRender: true,
  props: {
    modelValue: [String, Number]
    // default: () => []
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const items = [1, 2, 3, 4, 5];
    const localValue = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val)
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USelect = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col text-white" }, _attrs))}><h2 class="text-sm uppercase text-gray-400 mb-2">Bedrooms</h2><div class="flex items-center gap-2 border bg-[#1a1918]">`);
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: localValue.value,
        "onUpdate:modelValue": ($event) => localValue.value = $event,
        multiple: "",
        items,
        placeholder: "Select Bedrooms",
        class: "w-52 bg-[#1a1918] text-sm rounded-none text-white"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/properties/filters/BedroomsSelect.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "PropertiesFiltersPriceRangeSlider",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Array, default: () => [0, 1e7] }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const localValue = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val)
    });
    function formatPrice(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "AED",
        maximumFractionDigits: 0
      }).format(value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USlider = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col text-white w-full sm:w-80" }, _attrs))}><h2 class="text-sm uppercase text-gray-400 mb-2">Price Range (AED)</h2><div class="bg-[#1a1918]">`);
      _push(ssrRenderComponent(_component_USlider, {
        modelValue: localValue.value,
        "onUpdate:modelValue": ($event) => localValue.value = $event,
        min: 0,
        max: 1e7,
        step: 5e4,
        color: "blue"
      }, null, _parent));
      _push(`<div class="flex justify-between text-xs mt-2 text-gray-400"><span>${ssrInterpolate(formatPrice(localValue.value[0]))}</span><span>${ssrInterpolate(formatPrice(localValue.value[1]))}</span></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/properties/filters/PriceRangeSlider.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "PropertiesFiltersApplyButton",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "flex items-center w-auto gap-2 button-mavrix cursor-pointer font-light px-4 py-4 transition" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(LucideSearch), { class: "w-4 h-4" }, null, _parent));
      _push(` Apply </button>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/properties/filters/ApplyButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "PropertiesFiltersPropertyFilters",
  __ssrInlineRender: true,
  emits: ["filter"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const filters = ref({
      type: "",
      location: "",
      bedrooms: "",
      price: [0, 5e6]
    });
    const applyFilters = () => {
      emit("filter", { ...filters.value });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "backdrop-blur-md shadow-md border border-neutral-800 rounded-xl p-4 flex flex-wrap gap-4 items-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        modelValue: filters.value.type,
        "onUpdate:modelValue": ($event) => filters.value.type = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        modelValue: filters.value.location,
        "onUpdate:modelValue": ($event) => filters.value.location = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: filters.value.bedrooms,
        "onUpdate:modelValue": ($event) => filters.value.bedrooms = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: filters.value.price,
        "onUpdate:modelValue": ($event) => filters.value.price = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { onClick: applyFilters }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/properties/filters/PropertyFilters.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "PropertiesAdvancedFilters",
  __ssrInlineRender: true,
  setup(__props) {
    const amenities = [
      { name: "Pool", icon: Waves },
      { name: "Gym", icon: Dumbbell },
      { name: "Parking", icon: Car },
      { name: "Garden", icon: Flower },
      { name: "Security", icon: ShieldCheck },
      { name: "Maid Room", icon: Home },
      { name: "Pets Allowed", icon: Dog },
      { name: "Key Card Access", icon: Key }
    ];
    const isOpen = ref(false);
    const filters = ref({
      location: "",
      type: "",
      minPrice: "",
      maxPrice: "",
      bedrooms: "Any",
      bathrooms: "Any",
      minArea: "",
      maxArea: "",
      furnishing: "",
      amenities: [],
      keyword: ""
    });
    const bedroomOptions = ["Any", "1+", "2+", "3+", "4+", "5+"];
    const bathroomOptions = ["Any", "1+", "2+", "3+", "4+", "5+"];
    const furnishingOptions = ["Any", "Furnished", "Unfurnished", "Partly Furnished"];
    function resetFilters() {
      filters.value = {
        location: "",
        type: "",
        minPrice: "",
        maxPrice: "",
        bedrooms: "Any",
        bathrooms: "Any",
        minArea: "",
        maxArea: "",
        furnishing: "",
        amenities: [],
        keyword: ""
      };
    }
    function applyFilters() {
      console.log("Applied Filters:", filters.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USelect = _sfc_main$7;
      const _component_UInput = _sfc_main$9;
      const _component_UButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))} data-v-ad46b553><button class="flex items-center gap-2 px-4 py-2 button-mavrix shadow transition" data-v-ad46b553><span data-v-ad46b553>Advanced Filters</span><svg class="${ssrRenderClass([{ "rotate-180": isOpen.value }, "w-5 h-5 transform transition-transform"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ad46b553><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-ad46b553></path></svg></button>`);
      if (isOpen.value) {
        _push(`<div class="mt-4 p-6 border shadow-sm grid gap-6 md:grid-cols-3" data-v-ad46b553><div data-v-ad46b553><label class="block text-sm font-semibold text-gray-700 mb-1" data-v-ad46b553>Location</label>`);
        _push(ssrRenderComponent(_component_USelect, {
          modelValue: filters.value.location,
          "onUpdate:modelValue": ($event) => filters.value.location = $event,
          items: unref(propertyLocations),
          "option-attribute": "name",
          placeholder: "Select Location",
          class: "w-full bg-[#1a1918] border text-sm rounded-none text-white"
        }, null, _parent));
        _push(`</div><div data-v-ad46b553><label class="block text-sm font-semibold text-gray-700 mb-1" data-v-ad46b553>Property Type</label>`);
        _push(ssrRenderComponent(_component_USelect, {
          modelValue: filters.value.type,
          "onUpdate:modelValue": ($event) => filters.value.type = $event,
          items: unref(propertyTypes),
          "option-attribute": "name",
          placeholder: "Select Type",
          class: "w-full bg-[#1a1918] border text-sm rounded-none text-white"
        }, null, _parent));
        _push(`</div><div data-v-ad46b553><label class="block text-sm font-semibold text-gray-700 mb-1" data-v-ad46b553>Price Range (AED)</label><div class="flex gap-2" data-v-ad46b553>`);
        _push(ssrRenderComponent(_component_UInput, {
          modelValue: filters.value.minPrice,
          "onUpdate:modelValue": ($event) => filters.value.minPrice = $event,
          modelModifiers: { number: true },
          placeholder: "Min",
          type: "number",
          class: "w-1/2"
        }, null, _parent));
        _push(ssrRenderComponent(_component_UInput, {
          modelValue: filters.value.maxPrice,
          "onUpdate:modelValue": ($event) => filters.value.maxPrice = $event,
          modelModifiers: { number: true },
          placeholder: "Max",
          type: "number",
          class: "w-1/2"
        }, null, _parent));
        _push(`</div></div><div data-v-ad46b553><label class="block text-sm font-semibold text-gray-700 mb-1" data-v-ad46b553>Bedrooms</label><div class="flex flex-wrap gap-2" data-v-ad46b553><!--[-->`);
        ssrRenderList(bedroomOptions, (option) => {
          _push(`<button class="${ssrRenderClass([
            "px-3 py-1 border transition text-sm cursor-pointer",
            filters.value.bedrooms === option ? "button-mavrix" : "border-gray-200"
          ])}" data-v-ad46b553>${ssrInterpolate(option)}</button>`);
        });
        _push(`<!--]--></div></div><div data-v-ad46b553><label class="block text-sm font-semibold text-gray-700 mb-1" data-v-ad46b553>Bathrooms</label><div class="flex flex-wrap gap-2" data-v-ad46b553><!--[-->`);
        ssrRenderList(bathroomOptions, (option) => {
          _push(`<button class="${ssrRenderClass([
            "px-3 py-1 border transition text-sm cursor-pointer",
            filters.value.bathrooms === option ? "button-mavrix" : "border-gray-300"
          ])}" data-v-ad46b553>${ssrInterpolate(option)}</button>`);
        });
        _push(`<!--]--></div></div><div data-v-ad46b553><label class="block text-sm font-semibold text-gray-700 mb-1" data-v-ad46b553>Area (sqft)</label><div class="flex gap-2" data-v-ad46b553>`);
        _push(ssrRenderComponent(_component_UInput, {
          modelValue: filters.value.minArea,
          "onUpdate:modelValue": ($event) => filters.value.minArea = $event,
          modelModifiers: { number: true },
          placeholder: "Min",
          type: "number",
          class: "w-1/2"
        }, null, _parent));
        _push(ssrRenderComponent(_component_UInput, {
          modelValue: filters.value.maxArea,
          "onUpdate:modelValue": ($event) => filters.value.maxArea = $event,
          modelModifiers: { number: true },
          placeholder: "Max",
          type: "number",
          class: "w-1/2"
        }, null, _parent));
        _push(`</div></div><div data-v-ad46b553><label class="block text-sm font-semibold text-gray-700 mb-1" data-v-ad46b553>Furnishing</label>`);
        _push(ssrRenderComponent(_component_USelect, {
          modelValue: filters.value.furnishing,
          "onUpdate:modelValue": ($event) => filters.value.furnishing = $event,
          items: furnishingOptions,
          placeholder: "Select",
          class: "w-full bg-[#1a1918] border text-sm rounded-none text-white"
        }, null, _parent));
        _push(`</div><div class="md:col-span-3" data-v-ad46b553><label class="block text-sm font-semibold text-gray-700 mb-2" data-v-ad46b553>Amenities</label><div class="flex flex-wrap gap-3" data-v-ad46b553><!--[-->`);
        ssrRenderList(amenities, (amenity) => {
          _push(`<label class="${ssrRenderClass([
            "flex items-center gap-2 border px-8 py-4 border text-sm cursor-pointer select-none transition",
            filters.value.amenities.includes(amenity.name) ? " button-mavrix text-gray-200" : " border-gray-300 text-gray-200"
          ])}" data-v-ad46b553>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(amenity.icon), {
            class: [
              "w-6 h-6 transition",
              filters.value.amenities.includes(amenity.name) ? "text-gray-200" : "text-gray-200"
            ]
          }, null), _parent);
          _push(`<span data-v-ad46b553>${ssrInterpolate(amenity.name)}</span></label>`);
        });
        _push(`<!--]--></div></div><div class="md:col-span-3" data-v-ad46b553><label class="block text-sm font-semibold text-gray-700 mb-1" data-v-ad46b553>Keyword</label>`);
        _push(ssrRenderComponent(_component_UInput, {
          modelValue: filters.value.keyword,
          "onUpdate:modelValue": ($event) => filters.value.keyword = $event,
          placeholder: "e.g. waterfront, balcony...",
          class: "w-full"
        }, null, _parent));
        _push(`</div><div class="md:col-span-3 flex justify-end gap-3 mt-4" data-v-ad46b553>`);
        _push(ssrRenderComponent(_component_UButton, {
          variant: "soft",
          class: "button-mavrix-outline",
          onClick: resetFilters
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Reset `);
            } else {
              return [
                createTextVNode(" Reset ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          class: "button-mavrix",
          onClick: applyFilters
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Apply Filters `);
            } else {
              return [
                createTextVNode(" Apply Filters ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/properties/AdvancedFilters.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AdvancedFilters = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ad46b553"]]);

export { AdvancedFilters as A, _sfc_main$1 as _ };
//# sourceMappingURL=AdvancedFilters-BJFLwg2y.mjs.map
