// /services/listingsService.js
import axios from 'axios'

const API_URL = 'https://elist.solz.cloud/backend/api/external/external-listings'

export async function getCategories(page = 1, itemsPerPage = 100) {
  try {
    const { data } = await axios.get(API_URL, {
      params: { page, itemsPerPage }
    })
    return data?.data || []
  } catch (err) {
    console.error('Error fetching categories:', err)
    return []
  }
}
  
