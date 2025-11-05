import { ref, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { a as getAllListings } from './listingsService-B5yJF8RZ.mjs';
import 'axios';

const _sfc_main = {
  __name: "search-results",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const listings = ref([]);
    const filteredListings = ref([]);
    const loading = ref(true);
    async function loadResults() {
      loading.value = true;
      const query = route.query;
      const allListings = await getAllListings();
      listings.value = allListings;
      filteredListings.value = allListings.filter((item) => {
        const matchesCategory = !query.category || item.category === query.category;
        const matchesPurpose = !query.purpose || item.purpose === query.purpose;
        const matchesLocation = !query.location || item.location?.full_path_json?.[2]?.value === query.location;
        const matchesBedrooms = !query.bedrooms || item.bed?.name === query.bedrooms;
        const matchesPrice = (!query.minPrice || item.price >= Number(query.minPrice)) && (!query.maxPrice || item.price <= Number(query.maxPrice));
        return matchesCategory && matchesPurpose && matchesLocation && matchesBedrooms && matchesPrice;
      });
      loading.value = false;
    }
    watch(() => route.query, loadResults);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-8" }, _attrs))}><h1 class="text-3xl font-bold mb-6 text-white">Search Results</h1>`);
      if (loading.value) {
        _push(`<div class="text-center text-white">Loading...</div>`);
      } else {
        _push(`<div>`);
        if (filteredListings.value.length === 0) {
          _push(`<div class="text-center text-white"> No results found. </div>`);
        } else {
          _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
          ssrRenderList(filteredListings.value, (listing) => {
            _push(`<div class="bg-white rounded-lg shadow-md overflow-hidden"><img${ssrRenderAttr("src", listing.images?.[0]?.url || "https://via.placeholder.com/400x300?text=No+Image")}${ssrRenderAttr("alt", listing.title)} class="w-full h-48 object-cover"><div class="p-4"><h2 class="text-xl font-semibold mb-2">${ssrInterpolate(listing.title)}</h2><p class="text-gray-600 mb-4">${ssrInterpolate(listing.location?.full_path || "Unknown Location")}</p><p class="text-lg font-bold text-blue-600">$${ssrInterpolate(listing.price.toLocaleString())}</p></div></div>`);
          });
          _push(`<!--]--></div>`);
        }
        _push(`</div>`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search-results.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=search-results-Cy_YytvJ.mjs.map
