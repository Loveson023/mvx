// /services/listingsService.js
// services/listingsService.js
// import { a } from '#build/ui/prose'
import axios from 'axios'

const BASE_URL = 'https://elist.solz.cloud/backend/api/external/external-listings'

export async function getListings(params = {}) {
  try {
    // ✅ Ensure numeric values
    const queryParams = {
      page: typeof params.page === 'number' ? params.page : 1,
      itemsPerPage: typeof params.itemsPerPage === 'number' ? params.itemsPerPage : 20,
      sortBy: params.sortBy || '',
      orderBy: params.orderBy || '',
      searchTerm: params.searchTerm || '',
      type: params.type || '',
      location: params.location || '',
      bedrooms: params.bedrooms || '',
      minPrice: params.minPrice || '',
      maxPrice: params.maxPrice || '',
      category: params.category || '',
      purpose: params.purpose || '',
      amenities: params.amenities || '',
      
    }

    console.log('Fetching listings with params:', queryParams)

    const { data } = await axios.get(BASE_URL, { params: queryParams })
    return data
  } catch (error) {
    console.error('Error fetching listings:', error)
    return { data: [] }
  }
}
// /services/listingsService.js
// import axios from 'axios'

// const API_URL = 'https://elist.solz.cloud/backend/api/external/external-listings'

export async function getAllListings(params = {}) {
  try {
    const response = await axios.get(`${BASE_URL}?page=1&itemsPerPage=100`, { params })
    const listings =
      response.data?.data ||
      response.data?.listings ||
      response.data ||
      []

    return listings
  } catch (error) {
    console.error('Error fetching listings:', error)
    return []
  }

}


// import axios from 'axios'
// const BASE_URL = 'https://elist.solz.cloud/backend/api/external/external-listings'

// export async function getListings(page = 1, itemsPerPage = 20) {
//   try {
//     const url = `${BASE_URL}?page=${page}&itemsPerPage=${itemsPerPage}`
//     const response = await axios.get(url)
//     return response.data?.data || []
//   } catch (error) {
//     console.error('Error fetching listings:', error)
//     return []
//   }
// }
// export async function getListings(params = {}) {
//   try {
//     const query = new URLSearchParams(params).toString()
//     const response = await axios.get(`${BASE_URL}?${query}`)
//     return response.data
//   } catch (error) {
//     console.error('Error fetching listings:', error)
//     return { data: [], totalRecords: 0 }
//   }
// }

// export async function getListingByRef(refNumber) {
//   try {
//     const url = `${BASE_URL}?searchTerm=${refNumber}`
//     const response = await fetch(url)
//     const data = await response.json()
//     const listing = data?.data?.find(item => item.ref_number === refNumber)
//     return listing || null
//   } catch (error) {
//     console.error('Error fetching property by ref:', error)
//     return null
//   }
// }
export async function getListingByRef(refNumber) {
  try {
    const response = await axios.get(`${BASE_URL}?searchTerm=elist-${refNumber}`)
    const listings = response.data?.data || []

    console.log('Fetched from API:', listings)

    // Return the first matching listing
    return listings.length ? listings[0] : null
  } catch (error) {
    console.error('Error fetching property by ref:', error)
    return null
  }
}
// 🧠 Extract unique filter options from listings data
export function extractFilterOptions(listings) {
  const categories = new Set()
  const locations = new Set()
  const bedrooms = new Set()

  listings.forEach((item) => {
    if (item.category) categories.add(item.category)
    if (item.location?.full_path) locations.add(item.location.full_path)
    if (item.bed?.name) bedrooms.add(item.bed.name)
  })

  return {
    categories: ['Any', ...categories],
    locations: ['Any', ...locations],
    bedrooms: ['Any', ...bedrooms],
  }
}
// export async function getFilterOptions() {
//   try {
//     // If your API has endpoints like /filters or /meta-data, use it here.
//     const response = await axios.get(`${BASE_URL}/filters`)
//     return response.data
//   } catch (error) {
//     console.error('Error fetching filter options:', error)
//     return {}
//   }
// }

// ~/services/listingsService.js
export async function getCoordinatedListings() {
  try {
    const response = await fetch(
      'https://elist.solz.cloud/backend/api/external/external-listings?page=1&itemsPerPage=20&sortBy=&orderBy=&searchTerm='
    )
    const result = await response.json()

    if (result.status === 200 && Array.isArray(result.data)) {
      // ✅ Normalize the listings to include lat/lng at top level
      return result.data.map((item) => ({
        ...item,
        latitude: parseFloat(item.location?.latitude),
        longitude: parseFloat(item.location?.longitude),
      }))
    } else {
      console.error('Invalid API response:', result)
      return []
    }
  } catch (error) {
    console.error('Error fetching listings:', error)
    return []
  }
}
