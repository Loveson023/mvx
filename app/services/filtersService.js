// /services/filtersService.js
import axios from 'axios'

const API_URL = 'https://elist.solz.cloud/backend/api/external/external-listings'

export async function getFilterOptions() {
  try {
    // Fetch listings from the API
    const response = await axios.get(`${API_URL}?page=1&itemsPerPage=100`)

    // ✅ The API response structure may vary — this ensures we always extract an array
    const listings =
      Array.isArray(response.data)
        ? response.data
        : Array.isArray(response.data?.data)
        ? response.data.data
        : Array.isArray(response.data?.listings)
        ? response.data.listings
        : Array.isArray(response.data?.data?.listings)
        ? response.data.data.listings
        : []

    if (!listings.length) {
      console.warn('⚠️ No listings found for filter extraction.')
    }

    // 🏷 Extract unique values for dropdowns
    const categories = [...new Set(listings.map(p => p.category).filter(Boolean))]
    const purposes = [...new Set(listings.map(p => p.purpose).filter(Boolean))]
    const bedrooms = [...new Set(listings.map(p => p.bed?.name).filter(Boolean))]
    const prices = listings.map(p => p.price).filter(Boolean)
    const locations = [
      ...new Set(
        listings
          .map(p => p.location?.full_path_json?.[2]?.value)
          .filter(Boolean)
      ),
    ]

    // 💰 Derive price range safely
    const minPrice = prices.length ? Math.min(...prices) : 0
    const maxPrice = prices.length ? Math.max(...prices) : 0

    return {
      categories,
      purposes,
      bedrooms,
      locations,
      prices: { min: minPrice, max: maxPrice },
    }
  } catch (error) {
    console.error('❌ Error fetching filter options:', error)
    return {
      categories: [],
      purposes: [],
      bedrooms: [],
      locations: [],
      prices: { min: 0, max: 0 },
    }
  }
}
