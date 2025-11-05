import { ref, withAsyncContext, mergeProps, unref, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { e as extractRefFromSlug } from './slugify-CVBoEp9i.mjs';
import { g as getListingByRef } from './listingsService-B5yJF8RZ.mjs';
import { D as Divider } from './divider-CD-0niJo.mjs';
import { B as Breadcrumbs } from './breadcrumbs-xT8jGMeU.mjs';
import { MapPin, Home, Layers, BedDouble, Bath, DollarSign, CheckCircle } from 'lucide-vue-next';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useAsyncData } from './asyncData-DzZ9Lhv5.mjs';
import { u as useHead } from './server.mjs';
import 'axios';
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
import './nuxt-link-D7qS_3ag.mjs';
import 'tailwindcss/colors';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$1 = {
  __name: "FormsListingsEnquiryForm",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean, required: true },
    property: { type: Object, required: true }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const form = ref({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    const successMessage = ref("");
    const errorMessage = ref("");
    watch(
      () => props.property,
      (newVal) => {
        if (newVal?.title) {
          form.value.message = `Hi, I am interested in ${newVal.title}, reference_number: ${newVal.ref_number}, UUID: ${newVal.uuid}`;
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50" }, _attrs))} data-v-406d1839><div class="bg-[#2a2a2a] rounded-2xl p-6 w-[90%] max-w-md border border-gray-700 relative" data-v-406d1839><button class="absolute top-3 right-3 text-gray-400 hover:text-white cursor-pointer" data-v-406d1839> ✕ </button><h2 class="text-xl font-semibold mb-4 text-gray-100" data-v-406d1839>Enquire Now</h2><form class="flex flex-col gap-4" data-v-406d1839><input${ssrRenderAttr("value", form.value.name)} type="text" placeholder="Your Name" class="bg-[#1f1f1f] border border-gray-700 rounded-lg p-3 text-gray-200" required data-v-406d1839><input${ssrRenderAttr("value", form.value.email)} type="email" placeholder="Your Email" class="bg-[#1f1f1f] border border-gray-700 rounded-lg p-3 text-gray-200" required data-v-406d1839><input${ssrRenderAttr("value", form.value.phone)} type="tel" placeholder="Your Phone" class="bg-[#1f1f1f] border border-gray-700 rounded-lg p-3 text-gray-200" required data-v-406d1839><textarea class="bg-[#1f1f1f] border border-gray-700 rounded-lg p-3 text-gray-200 h-28" required data-v-406d1839>${ssrInterpolate(form.value.message)}</textarea><button type="submit" class="button-mavrix text-white py-3 cursor-pointer rounded-lg font-medium transition" data-v-406d1839> SUBMIT ENQUIRY </button></form>`);
        if (successMessage.value) {
          _push(`<p class="text-green-500 mt-3" data-v-406d1839>${ssrInterpolate(successMessage.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (errorMessage.value) {
          _push(`<p class="text-red-500 mt-3" data-v-406d1839>${ssrInterpolate(errorMessage.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/listings-enquiry-form.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ListingsEnquiryForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-406d1839"]]);
const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const showPopup = ref(false);
    const refNumber = extractRefFromSlug(route.params.slug);
    const { data: property, pending, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `property-${refNumber}`,
      () => getListingByRef(refNumber)
    )), __temp = await __temp, __restore(), __temp);
    useHead(() => ({
      title: property.value?.title || "Property Details | Mavrix Properties",
      meta: [
        {
          name: "description",
          content: property.value?.description?.slice(0, 150) || "Explore exclusive Dubai properties at Nexus Properties."
        }
      ]
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#212121] pt-16 text-gray-200" }, _attrs))} data-v-02c92d82>`);
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(ssrRenderComponent(Breadcrumbs, null, null, _parent));
      _push(`<div class="container mx-auto px-4" data-v-02c92d82>`);
      if (unref(pending)) {
        _push(`<div class="text-center text-gray-400 py-20 text-lg" data-v-02c92d82> Loading property details... </div>`);
      } else if (unref(error)) {
        _push(`<div class="text-center text-red-500 py-20 text-lg" data-v-02c92d82> Failed to load property details. Please try again later. </div>`);
      } else if (unref(property)) {
        _push(`<div class="bg-[#212121] shadow-lg overflow-hidden rounded-2xl" data-v-02c92d82><img${ssrRenderAttr("src", unref(property).photos?.[0]?.full_path || "https://placehold.co/1200x500")} alt="Property Image" class="w-full h-[450px] object-cover rounded-t-2xl" data-v-02c92d82><div class="p-6 md:p-10" data-v-02c92d82><div class="grid grid-cols-1 md:grid-cols-3 gap-10" data-v-02c92d82><div class="md:col-span-2" data-v-02c92d82><h1 class="text-3xl md:text-4xl font-bold mb-2 text-gray-100" data-v-02c92d82>${ssrInterpolate(unref(property).title)}</h1><div class="flex items-center gap-2 text-gray-400 mb-4" data-v-02c92d82>`);
        _push(ssrRenderComponent(unref(MapPin), { class: "w-5 h-5 text-mavrix" }, null, _parent));
        _push(`<p data-v-02c92d82>${ssrInterpolate(unref(property).location?.full_path || "Dubai, UAE")}</p></div><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6 text-gray-300" data-v-02c92d82><div class="flex items-center gap-2" data-v-02c92d82>`);
        _push(ssrRenderComponent(unref(Home), { class: "w-5 h-5 text-mavrix" }, null, _parent));
        _push(`<span data-v-02c92d82>${ssrInterpolate(unref(property).category || "N/A")}</span></div><div class="flex items-center gap-2" data-v-02c92d82>`);
        _push(ssrRenderComponent(unref(Layers), { class: "w-5 h-5 text-mavrix" }, null, _parent));
        _push(`<span data-v-02c92d82>${ssrInterpolate(unref(property).type || "N/A")}</span></div><div class="flex items-center gap-2" data-v-02c92d82>`);
        _push(ssrRenderComponent(unref(BedDouble), { class: "w-5 h-5 text-mavrix" }, null, _parent));
        _push(`<span data-v-02c92d82>${ssrInterpolate(unref(property).bed?.name || "N/A")} Bedrooms</span></div><div class="flex items-center gap-2" data-v-02c92d82>`);
        _push(ssrRenderComponent(unref(Bath), { class: "w-5 h-5 text-mavrix" }, null, _parent));
        _push(`<span data-v-02c92d82>${ssrInterpolate(unref(property).bath?.name || "N/A")} Bathrooms</span></div><div class="flex items-center gap-2" data-v-02c92d82>`);
        _push(ssrRenderComponent(unref(DollarSign), { class: "w-5 h-5 text-mavrix" }, null, _parent));
        _push(`<span data-v-02c92d82>AED ${ssrInterpolate(unref(property).price?.toLocaleString() || "N/A")}</span></div><div class="flex items-center gap-2" data-v-02c92d82>`);
        _push(ssrRenderComponent(unref(Layers), { class: "w-5 h-5 text-mavrix" }, null, _parent));
        _push(`<span data-v-02c92d82>${ssrInterpolate(unref(property).completion_status || "Ready")}</span></div></div><div class="prose prose-invert max-w-none text-gray-300 mb-10" data-v-02c92d82>${unref(property).description ?? ""}</div>`);
        if (unref(property).amenities?.length) {
          _push(`<div class="mt-8" data-v-02c92d82><h2 class="text-xl font-semibold text-gray-100 mb-4" data-v-02c92d82> Amenities </h2><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3" data-v-02c92d82><!--[-->`);
          ssrRenderList(unref(property).amenities, (amenity, index) => {
            _push(`<div class="flex items-center button-mavrix-outline p-6 rounded-lg gap-2 text-gray-300 hover:text-mavrix transition" data-v-02c92d82>`);
            _push(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5 text-mavrix" }, null, _parent));
            _push(`<span data-v-02c92d82>${ssrInterpolate(amenity.name)}</span></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="bg-[#2a2a2a] p-6 sticky top-28 mavrix-gradient-border h-fit flex flex-col gap-6" data-v-02c92d82><div class="flex items-center gap-4" data-v-02c92d82><img${ssrRenderAttr("src", unref(property).user?.thumbnail_image_path || "https://placehold.co/100x100")} alt="Agent" class="w-16 h-16 rounded-full object-cover border border-gray-600" data-v-02c92d82><div data-v-02c92d82><p class="font-semibold text-gray-100" data-v-02c92d82>${ssrInterpolate(unref(property).user?.name)}</p><p class="text-sm text-gray-400" data-v-02c92d82>${ssrInterpolate(unref(property).user?.designation)}</p><p class="text-sm text-gray-400" data-v-02c92d82>${ssrInterpolate(unref(property).user?.mobile)}</p></div></div><a${ssrRenderAttr("href", `tel:${unref(property).user?.mobile}`)} class="button-mavrix cursor-pointer text-white py-2 px-5 rounded-lg font-medium text-center" data-v-02c92d82> Call Agent </a><button class="button-mavrix-outline cursor-pointer text-white py-2 px-5 font-medium transition" data-v-02c92d82> Enquire Now </button></div></div></div></div>`);
      } else {
        _push(`<div class="text-center text-gray-400 py-20 text-lg" data-v-02c92d82> Property not found. </div>`);
      }
      _push(`</div>`);
      if (unref(property)) {
        _push(ssrRenderComponent(ListingsEnquiryForm, {
          show: showPopup.value,
          property: unref(property),
          onClose: ($event) => showPopup.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(Divider, null, null, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-02c92d82"]]);

export { ____slug_ as default };
//# sourceMappingURL=_...slug_-DwSmVzFa.mjs.map
