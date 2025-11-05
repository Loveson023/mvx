// /services/purposeService.js
import axios from 'axios'

const API_URL = 'https://elist.solz.cloud/backend/api/external/external-listings'

export async function getPurposes() {
  try {
    const { data } = await axios.get(API_URL, {
      params: { page: 1, itemsPerPage: 100 },
    })

    // ✅ Correctly access the array
    const listings = data?.data || []

    return listings
  } catch (error) {
    console.error('Error fetching purposes:', error)
    return []
  }
}
