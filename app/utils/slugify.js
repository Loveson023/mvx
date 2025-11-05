// /utils/slugify.js
export function createSlug(property) {
  const base = property.location?.full_path || property.title || 'property'
  return (
    base
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // make URL safe
      .replace(/(^-|-$)+/g, '') +
    '-' +
    property.ref_number
  )
}

// utils/slugify.js
export function extractRefFromSlug(slug) {
  if (typeof slug === 'object' && Array.isArray(slug)) {
    slug = slug.join('-')
  }

  if (typeof slug !== 'string') return ''

  // Extract last digits (reference number)
  const match = slug.match(/(\d+)(?!.*\d)/)
  return match ? match[0] : ''
}
