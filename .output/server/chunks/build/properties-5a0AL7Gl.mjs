const properties = [
  {
    id: "mvx-5011221",
    slug: "palm-jumeirah-luxury-villa",
    title: "6-Bedroom Luxury Villa on Palm Jumeirah, Dubai",
    location: "Palm Jumeirah",
    propertyType: "Villa",
    price: 225e5,
    currency: "AED",
    bedrooms: 6,
    bathrooms: 7,
    areaSqFt: 9200,
    areaSqM: 855,
    pricePerSqFt: 2445,
    furnishing: "Furnished",
    parkingLots: 3,
    reraNo: "7129873210",
    dldPermitNumber: "2345678910",
    images: [
      "/images/properties/property_img.png",
      "/images/properties/property_img.png",
      "/images/properties/property_img.png"
    ],
    features: [
      "Private beach access",
      "Infinity pool",
      "Home cinema",
      "Smart home system"
    ],
    description: `MAVRIX LUXURY PROPERTIES is delighted to offer this stunning beachfront villa on Palm Jumeirah. Offering unmatched sea views and world-class amenities, this home epitomizes Dubai luxury living.`,
    listingDetails: {
      location: "Palm Jumeirah",
      pricePerSqFt: "2,445 AED",
      reraNo: "7129873210",
      referenceNo: "axc-5011221",
      dldPermitNumber: "2345678910",
      furnishing: "Furnished",
      propertyType: "Villa",
      parkingLots: 3
    },
    nearbySchools: [
      { name: "The International School of Choueifat", address: "Al Sufouh", distance: "3.2 km" },
      { name: "GEMS Wellington International", address: "Al Sufouh 1", distance: "4.1 km" }
    ],
    agent: {
      agent_id: 1,
      name: "Nathan Alvarez",
      position: "Luxury Property Advisor",
      contact: { phone: "+1 212 555 4389", whatsapp: "12125554389" }
    },
    comparison: {
      marketAveragePricePerSqFt: 2100,
      thisPropertyPricePerSqFt: 2445,
      difference: "+16%",
      averageAreaSqFt: 8200,
      thisPropertyAreaSqFt: 9200,
      areaDifference: "+12%"
    }
  },
  // 🏢 Agent 1 — Alex Carter
  {
    id: "mvx-1001",
    slug: "marina-view-apartment-dubai-marina",
    title: "Luxury 2BR Apartment with Marina View, Dubai Marina",
    location: "Dubai Marina",
    propertyType: "Apartment",
    price: 285e4,
    currency: "AED",
    bedrooms: 2,
    bathrooms: 3,
    areaSqFt: 1285,
    areaSqM: 119,
    pricePerSqFt: 2217.91,
    furnishing: "Furnished",
    parkingLots: 1,
    reraNo: "71234567012",
    dldPermitNumber: "11098765",
    images: [
      "/images/properties/property_img.png",
      "/images/properties/property_img.png",
      "/images/properties/property_img.png"
    ],
    features: ["Balcony", "Shared gym", "Covered parking", "Security"],
    description: `MAVRIX LUXURY PROPERTIES proudly presents this fully furnished 2BR apartment with breathtaking marina views.`,
    listingDetails: {
      location: "Dubai Marina",
      pricePerSqFt: "2,217.91 AED",
      reraNo: "71234567012",
      referenceNo: "mvx-1001",
      dldPermitNumber: "11098765",
      furnishing: "Furnished",
      propertyType: "Apartment",
      parkingLots: 1
    },
    nearbySchools: [
      { name: "Emirates International School", address: "Meadows, Dubai", distance: "2.1 km" },
      { name: "Dubai British School", address: "Emirates Hills", distance: "2.8 km" }
    ],
    agent: {
      agent_id: 1,
      name: "Alex Carter",
      position: "Luxury Property Specialist",
      contact: { phone: "Call us", whatsapp: "WhatsApp" }
    },
    comparison: {
      marketAveragePricePerSqFt: 1900,
      thisPropertyPricePerSqFt: 2218,
      difference: "+17%",
      averageAreaSqFt: 1150,
      thisPropertyAreaSqFt: 1285,
      areaDifference: "+12%"
    }
  },
  {
    id: "mvx-1002",
    slug: "downtown-burj-views-3br",
    title: "Spacious 3BR in Burj Views, Downtown Dubai",
    location: "Downtown Dubai",
    propertyType: "Apartment",
    price: 41e5,
    currency: "AED",
    bedrooms: 3,
    bathrooms: 4,
    areaSqFt: 1750,
    areaSqM: 162,
    pricePerSqFt: 2342.85,
    furnishing: "Semi-furnished",
    parkingLots: 2,
    reraNo: "71456789012",
    dldPermitNumber: "",
    images: [
      "/images/properties/property_img.png",
      "/images/properties/property_img.png",
      "/images/properties/property_img.png"
    ],
    features: ["Burj Khalifa view", "Shared pool", "Gym", "Security"],
    description: `A modern and spacious 3-bedroom apartment in the heart of Downtown, offering stunning city views.`,
    listingDetails: {
      location: "Downtown Dubai",
      pricePerSqFt: "2,342.85 AED",
      reraNo: "71456789012",
      referenceNo: "mvx-1002",
      dldPermitNumber: "",
      furnishing: "Semi-furnished",
      propertyType: "Apartment",
      parkingLots: 2
    },
    nearbySchools: [
      { name: "GEMS Wellington Primary", address: "Business Bay, Dubai", distance: "1.3 km" },
      { name: "Dubai Modern High School", address: "Nad Al Sheba", distance: "4.7 km" }
    ],
    agent: {
      agent_id: 1,
      name: "Alex Carter",
      position: "Luxury Property Specialist",
      contact: { phone: "Call us", whatsapp: "WhatsApp" }
    },
    comparison: {
      marketAveragePricePerSqFt: 2e3,
      thisPropertyPricePerSqFt: 2343,
      difference: "+17%",
      averageAreaSqFt: 1600,
      thisPropertyAreaSqFt: 1750,
      areaDifference: "+9%"
    }
  },
  {
    id: "mvx-1003",
    slug: "bluewaters-1br-sea-view",
    title: "1BR Apartment with Sea View in Bluewaters",
    location: "Bluewaters Island",
    propertyType: "Apartment",
    price: 34e5,
    currency: "AED",
    bedrooms: 1,
    bathrooms: 2,
    areaSqFt: 980,
    areaSqM: 91,
    pricePerSqFt: 3469.38,
    furnishing: "Furnished",
    parkingLots: 1,
    reraNo: "71345678012",
    dldPermitNumber: "",
    project_id: 1,
    // ✅ links to Mavrix Heights
    images: [
      "/images/properties/property_img.png",
      "/images/properties/property_img.png",
      "/images/properties/property_img.png"
    ],
    features: ["Sea view", "Beach access", "Gym", "Pool"],
    description: `Beautifully designed 1BR with direct sea view and beach access in Bluewaters.`,
    listingDetails: {
      location: "Bluewaters Island",
      pricePerSqFt: "3,469.38 AED",
      reraNo: "71345678012",
      referenceNo: "mvx-1003",
      dldPermitNumber: "",
      furnishing: "Furnished",
      propertyType: "Apartment",
      parkingLots: 1
    },
    nearbySchools: [
      { name: "Dubai British School", address: "Emirates Hills", distance: "3.1 km" },
      { name: "Raffles World Academy", address: "Umm Suqeim", distance: "3.5 km" }
    ],
    agent: {
      agent_id: 1,
      name: "Alex Carter",
      position: "Luxury Property Specialist",
      contact: { phone: "Call us", whatsapp: "WhatsApp" }
    },
    comparison: {
      marketAveragePricePerSqFt: 2700,
      thisPropertyPricePerSqFt: 3469,
      difference: "+28%",
      averageAreaSqFt: 950,
      thisPropertyAreaSqFt: 980,
      areaDifference: "+3%"
    }
  },
  {
    id: "mvx-1004",
    slug: "palm-jumeirah-villa-4br",
    title: "4BR Villa with Private Pool, Palm Jumeirah",
    location: "Palm Jumeirah",
    propertyType: "Villa",
    price: 195e5,
    currency: "AED",
    bedrooms: 4,
    bathrooms: 5,
    areaSqFt: 6700,
    areaSqM: 622,
    pricePerSqFt: 2910.45,
    furnishing: "Furnished",
    parkingLots: 2,
    reraNo: "71009876543",
    dldPermitNumber: "",
    project_id: 1,
    // ✅ links to Mavrix Heights
    images: [
      "/images/properties/property_img.png",
      "/images/properties/property_img.png",
      "/images/properties/property_img.png"
    ],
    features: ["Private pool", "Beach access", "Garden", "Maid’s room"],
    description: `An exclusive 4BR beachfront villa offering private pool, landscaped garden, and full sea view.`,
    listingDetails: {
      location: "Palm Jumeirah",
      pricePerSqFt: "2,910.45 AED",
      reraNo: "71009876543",
      referenceNo: "mvx-1004",
      dldPermitNumber: "",
      furnishing: "Furnished",
      propertyType: "Villa",
      parkingLots: 2
    },
    nearbySchools: [
      { name: "GEMS Wellington", address: "Al Sufouh", distance: "4.0 km" },
      { name: "Dubai College", address: "Knowledge Village", distance: "5.2 km" }
    ],
    agent: {
      agent_id: 1,
      name: "Alex Carter",
      position: "Luxury Property Specialist",
      contact: { phone: "Call us", whatsapp: "WhatsApp" }
    },
    comparison: {
      marketAveragePricePerSqFt: 2500,
      thisPropertyPricePerSqFt: 2910,
      difference: "+16%",
      averageAreaSqFt: 6400,
      thisPropertyAreaSqFt: 6700,
      areaDifference: "+5%"
    }
  },
  {
    id: "mvx-5011222",
    slug: "downtown-boulevard-apartment",
    title: "2-Bedroom Apartment in Downtown Boulevard, Dubai",
    location: "Downtown Dubai",
    propertyType: "Apartment",
    price: 38e5,
    currency: "AED",
    bedrooms: 2,
    bathrooms: 3,
    areaSqFt: 1450,
    areaSqM: 135,
    pricePerSqFt: 2620,
    furnishing: "Semi-Furnished",
    parkingLots: 1,
    reraNo: "7133211220",
    dldPermitNumber: "3344556677",
    images: [
      "/images/properties/property_img.png",
      "/images/properties/property_img.png",
      "/images/properties/property_img.png"
    ],
    features: ["Burj Khalifa view", "Shared pool", "Concierge service", "Gym"],
    description: `This luxury apartment in Downtown Dubai offers breathtaking skyline views and premium amenities. Perfect for professionals and couples seeking a modern lifestyle.`,
    listingDetails: {
      location: "Downtown Dubai",
      pricePerSqFt: "2,620 AED",
      reraNo: "7133211220",
      referenceNo: "axc-5011222",
      dldPermitNumber: "3344556677",
      furnishing: "Semi-Furnished",
      propertyType: "Apartment",
      parkingLots: 1
    },
    nearbySchools: [
      { name: "Dubai International School", address: "Downtown", distance: "1.5 km" },
      { name: "GEMS Wellington", address: "Business Bay", distance: "2.1 km" }
    ],
    agent: {
      agent_id: 2,
      name: "Layla Hassan",
      position: "Senior Property Consultant",
      contact: { phone: "+44 20 7946 2120", whatsapp: "442079462120" }
    },
    comparison: {
      marketAveragePricePerSqFt: 2300,
      thisPropertyPricePerSqFt: 2620,
      difference: "+14%",
      averageAreaSqFt: 1300,
      thisPropertyAreaSqFt: 1450,
      areaDifference: "+11%"
    }
  },
  {
    id: "mvx-5011223",
    slug: "creek-harbour-offplan-apartment",
    title: "Off-plan 1BR Apartment in Dubai Creek Harbour",
    location: "Dubai Creek Harbour",
    propertyType: "Off-plan Apartment",
    price: 165e4,
    currency: "AED",
    bedrooms: 1,
    bathrooms: 2,
    areaSqFt: 890,
    areaSqM: 83,
    pricePerSqFt: 1853,
    furnishing: "Unfurnished",
    parkingLots: 1,
    reraNo: "7137788900",
    dldPermitNumber: "9988776655",
    images: [
      "/images/properties/property_img.png",
      "/images/properties/property_img.png",
      "/images/properties/property_img.png"
    ],
    features: ["Waterfront view", "Infinity pool", "Retail outlets", "Gym"],
    description: `An excellent investment opportunity in the heart of Dubai Creek Harbour. This off-plan apartment offers luxury amenities and strong rental potential.`,
    listingDetails: {
      location: "Dubai Creek Harbour",
      pricePerSqFt: "1,853 AED",
      reraNo: "7137788900",
      referenceNo: "axc-5011223",
      dldPermitNumber: "9988776655",
      furnishing: "Unfurnished",
      propertyType: "Off-plan Apartment",
      parkingLots: 1
    },
    nearbySchools: [
      { name: "Swiss International Scientific School", address: "Al Jaddaf", distance: "2.3 km" }
    ],
    agent: {
      agent_id: 3,
      name: "Amir Shah",
      position: "Investment Specialist",
      contact: { phone: "+1 646 320 9921", whatsapp: "16463209921" }
    },
    comparison: {
      marketAveragePricePerSqFt: 1750,
      thisPropertyPricePerSqFt: 1853,
      difference: "+6%",
      averageAreaSqFt: 880,
      thisPropertyAreaSqFt: 890,
      areaDifference: "+1%"
    }
  },
  {
    id: "mvx-5011224",
    slug: "mudon-townhouse-family-home",
    title: "4-Bedroom Family Townhouse in Mudon, Dubai",
    location: "Mudon",
    propertyType: "Townhouse",
    price: 33e5,
    currency: "AED",
    bedrooms: 4,
    bathrooms: 5,
    areaSqFt: 3250,
    areaSqM: 302,
    pricePerSqFt: 1015,
    furnishing: "Unfurnished",
    parkingLots: 2,
    reraNo: "7145698871",
    dldPermitNumber: "5566778899",
    images: [
      "/images/properties/property_img.png",
      "/images/properties/property_img.png",
      "/images/properties/property_img.png"
    ],
    features: ["Community park", "Private garden", "Children's play area"],
    description: `A spacious and beautifully designed townhouse perfect for families seeking community living. Located in Mudon with easy access to major highways.`,
    listingDetails: {
      location: "Mudon",
      pricePerSqFt: "1,015 AED",
      reraNo: "7145698871",
      referenceNo: "axc-5011224",
      dldPermitNumber: "5566778899",
      furnishing: "Unfurnished",
      propertyType: "Townhouse",
      parkingLots: 2
    },
    nearbySchools: [
      { name: "Fairgreen International School", address: "The Sustainable City", distance: "2.0 km" }
    ],
    agent: {
      agent_id: 4,
      name: "Sofia Keller",
      position: "Property Consultant",
      contact: { phone: "+49 30 5683 7745", whatsapp: "493056837745" }
    },
    comparison: {
      marketAveragePricePerSqFt: 950,
      thisPropertyPricePerSqFt: 1015,
      difference: "+7%",
      averageAreaSqFt: 3100,
      thisPropertyAreaSqFt: 3250,
      areaDifference: "+5%"
    }
  },
  {
    id: "mvx-5011225",
    slug: "downtown-office-commercial-space",
    title: "Premium Office Space in Downtown Dubai",
    location: "Downtown Dubai",
    propertyType: "Office",
    price: 85e5,
    currency: "AED",
    bedrooms: 0,
    bathrooms: 2,
    areaSqFt: 4100,
    areaSqM: 381,
    pricePerSqFt: 2073,
    furnishing: "Furnished",
    parkingLots: 5,
    reraNo: "7189054321",
    dldPermitNumber: "6677889900",
    images: [
      "/images/properties/property_img.png",
      "/images/properties/property_img.png",
      "/images/properties/property_img.png"
    ],
    features: ["Conference room", "Panoramic city views", "Reception area", "Smart lighting"],
    description: `High-end commercial space in the heart of Dubai’s business hub. Ideal for corporate offices seeking premium facilities.`,
    listingDetails: {
      location: "Downtown Dubai",
      pricePerSqFt: "2,073 AED",
      reraNo: "7189054321",
      referenceNo: "axc-5011225",
      dldPermitNumber: "6677889900",
      furnishing: "Furnished",
      propertyType: "Office",
      parkingLots: 5
    },
    nearbySchools: [],
    agent: {
      agent_id: 5,
      name: "Omar Nasri",
      position: "Commercial Property Expert",
      contact: { phone: "+33 1 8787 6621", whatsapp: "33187876621" }
    },
    comparison: {
      marketAveragePricePerSqFt: 1950,
      thisPropertyPricePerSqFt: 2073,
      difference: "+6%",
      averageAreaSqFt: 4e3,
      thisPropertyAreaSqFt: 4100,
      areaDifference: "+2%"
    }
  },
  {
    id: "mvx-5011226",
    slug: "jbr-luxury-rental-apartment",
    title: "3-Bedroom Luxury Rental in Jumeirah Beach Residence",
    location: "JBR",
    propertyType: "Apartment",
    price: 65e4,
    currency: "AED/year",
    bedrooms: 3,
    bathrooms: 4,
    areaSqFt: 2100,
    areaSqM: 195,
    pricePerSqFt: 310,
    furnishing: "Fully Furnished",
    parkingLots: 2,
    reraNo: "7128763450",
    dldPermitNumber: "3344667788",
    images: [
      "/images/properties/property_img.png",
      "/images/properties/property_img.png",
      "/images/properties/property_img.png"
    ],
    features: ["Sea view", "Private balcony", "Beach access", "24/7 security"],
    description: `Beautifully furnished 3-bedroom apartment offering direct beach access and luxury resort-style living.`,
    listingDetails: {
      location: "JBR",
      pricePerSqFt: "310 AED",
      reraNo: "7128763450",
      referenceNo: "axc-5011226",
      dldPermitNumber: "3344667788",
      furnishing: "Fully Furnished",
      propertyType: "Apartment",
      parkingLots: 2
    },
    nearbySchools: [
      { name: "Dubai British School", address: "Jumeirah Park", distance: "4.0 km" }
    ],
    agent: {
      agent_id: 6,
      name: "Isabella Rossi",
      position: "Client Relationship Manager",
      contact: { phone: "+39 06 9835 2221", whatsapp: "390698352221" }
    },
    comparison: {
      marketAveragePricePerSqFt: 290,
      thisPropertyPricePerSqFt: 310,
      difference: "+7%",
      averageAreaSqFt: 2050,
      thisPropertyAreaSqFt: 2100,
      areaDifference: "+2%"
    }
  },
  {
    id: "mvx-5011227",
    slug: "business-bay-investment-apartment",
    title: "Investment 2-Bedroom Apartment in Business Bay",
    location: "Business Bay",
    propertyType: "Apartment",
    price: 275e4,
    currency: "AED",
    bedrooms: 2,
    bathrooms: 3,
    areaSqFt: 1350,
    areaSqM: 125,
    pricePerSqFt: 2037,
    furnishing: "Semi-Furnished",
    parkingLots: 1,
    reraNo: "7199901230",
    dldPermitNumber: "9911223344",
    images: [
      "/images/properties/property_img.png",
      "/images/properties/property_img.png",
      "/images/properties/property_img.png"
    ],
    features: ["Canal view", "Shared gym", "Concierge service", "Spa facilities"],
    description: `Perfect for investors, this modern apartment in Business Bay offers high ROI and premium facilities with easy access to Downtown.`,
    listingDetails: {
      location: "Business Bay",
      pricePerSqFt: "2,037 AED",
      reraNo: "7199901230",
      referenceNo: "axc-5011227",
      dldPermitNumber: "9911223344",
      furnishing: "Semi-Furnished",
      propertyType: "Apartment",
      parkingLots: 1
    },
    nearbySchools: [],
    agent: {
      agent_id: 7,
      name: "Daniel Nguyen",
      position: "Real Estate Strategist",
      contact: { phone: "+61 2 9345 8711", whatsapp: "61293458711" }
    },
    comparison: {
      marketAveragePricePerSqFt: 1950,
      thisPropertyPricePerSqFt: 2037,
      difference: "+4%",
      averageAreaSqFt: 1300,
      thisPropertyAreaSqFt: 1350,
      areaDifference: "+3%"
    }
  },
  {
    id: "mvx-5011228",
    slug: "bluewaters-beachfront-apartment",
    title: "Beachfront 2-Bedroom Apartment on Bluewaters Island",
    location: "Bluewaters Island",
    propertyType: "Apartment",
    price: 56e5,
    currency: "AED",
    bedrooms: 2,
    bathrooms: 3,
    areaSqFt: 1680,
    areaSqM: 156,
    pricePerSqFt: 3333,
    furnishing: "Fully Furnished",
    parkingLots: 2,
    reraNo: "7133345678",
    dldPermitNumber: "5566778890",
    images: [
      "/images/properties/property_img.png",
      "/images/properties/property_img.png",
      "/images/properties/property_img.png"
    ],
    features: ["Sea view", "Infinity pool", "Private beach", "Gym"],
    description: `A stunning beachfront residence with panoramic sea views and luxury finishes on Bluewaters Island.`,
    listingDetails: {
      location: "Bluewaters Island",
      pricePerSqFt: "3,333 AED",
      reraNo: "7133345678",
      referenceNo: "axc-5011228",
      dldPermitNumber: "5566778890",
      furnishing: "Fully Furnished",
      propertyType: "Apartment",
      parkingLots: 2
    },
    nearbySchools: [],
    agent: {
      agent_id: 8,
      name: "Hana Tanaka",
      position: "Property Advisor",
      contact: { phone: "+81 3 6659 1198", whatsapp: "81366591198" }
    },
    comparison: {
      marketAveragePricePerSqFt: 3100,
      thisPropertyPricePerSqFt: 3333,
      difference: "+7%",
      averageAreaSqFt: 1600,
      thisPropertyAreaSqFt: 1680,
      areaDifference: "+5%"
    }
  }
];
const propertyTypes = [
  { id: 1, name: "Apartment" },
  { id: 2, name: "Villa" },
  { id: 3, name: "Townhouse" },
  { id: 4, name: "Penthouse" },
  { id: 5, name: "Duplex" },
  { id: 6, name: "Office" },
  { id: 7, name: "Retail" },
  { id: 8, name: "Plot" }
];
const propertyLocations = [
  { id: 1, name: "Downtown Dubai" },
  { id: 2, name: "Dubai Marina" },
  { id: 3, name: "Business Bay" },
  { id: 4, name: "Palm Jumeirah" },
  { id: 5, name: "Jumeirah Village Circle" },
  { id: 6, name: "Dubai Hills Estate" },
  { id: 7, name: "Arabian Ranches" },
  { id: 8, name: "Jumeirah Lake Towers" },
  { id: 9, name: "Al Barsha" },
  { id: 10, name: "Damac Hills" }
];

export { propertyTypes as a, propertyLocations as b, properties as p };
//# sourceMappingURL=properties-5a0AL7Gl.mjs.map
