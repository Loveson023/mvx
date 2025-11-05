<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getListings } from '@/services/listingsService'
import { createSlug } from '~/utils/slugify'
import Divider from '~/components/templates/divider.vue'
// import Breadcrumbsv2 from '~/components/templates/breadcrumbsv2.vue'
import { House, ChevronsRight, MapPin, BedDouble, Bath, LandPlot, PhoneCall, Wallet, Building2, MessageCircle, Mail, Languages, Award} from 'lucide-vue-next'
// import Languages from '~/components/properties/agents/filters/languages.vue'

const route = useRoute()
const agent = ref(null)
const agentProperties = ref([])
const loading = ref(true)

onMounted(async () => {
  loading.value = true

  // Fetch all listings
  const response = await getListings()
  const listings = response.data || []

  // Find agent by UUID slug
  const foundAgent = listings.find(
    (listing) => listing.user?.uuid === route.params.slug
  )?.user

  if (foundAgent) {
    agent.value = {
      id: foundAgent.id,
      name: foundAgent.name,
      title: foundAgent.designation || 'Real Estate Agent',
      image: foundAgent.image_path || foundAgent.thumbnail_image_path,
      email: foundAgent.email || '',
      mobile: foundAgent.mobile || '',
      experience: foundAgent.experience_since
        ? `${new Date().getFullYear() - new Date(foundAgent.experience_since).getFullYear()} years`
        : 'N/A',
      languages: foundAgent.languages || ['English'],
    }

    // Filter properties belonging to this agent
    agentProperties.value = listings.filter(
      (listing) => listing.user?.id === foundAgent.id
    )
  }

  loading.value = false
})
</script>

<template>
  <section class="pt-16 pb-20 text-white max-w-7xl mx-auto px-6 lg:px-12">
    <Divider />
    <!-- <Breadcrumbsv2 :items="[
      { text: 'Home', href: '/' },
      { text: 'Real Estate Agents', href: '/agents' },
      { text: agent ? agent.name : 'Loading...', href: '' }
    ]" /> -->

    <!-- Loading -->
    <div v-if="loading" class="text-center py-20 text-gray-400">
      <span class="inline-flex items-center gap-2">
        <img src="/loader.svg" alt="" class="h-12 w-12 animate-spin" />
      </span>
    </div>

    <div v-else-if="!agent" class="text-center py-20 text-gray-400">
      Agent not found.
    </div>


    <div v-else>
      <!-- Agent Header -->
      <div class="pb-10">
        <nav class="mavrix-breadcrumbs ">
          <ul class="flex flex-wrap justify-start items-start text-sm">
            <li>
              <NuxtLink to="/"
                class="hover:text-primary font-medium text-white flex gap-2 items-center transition-colors mavrix-text ">
                <House color="#c99171" />
                Home
                <!-- <img src="../../../Mavrix.svg" alt=""/> -->
              </NuxtLink>
            </li>


            <li class="mx-2 text-neutral-400">
              <ChevronsRight color="#c99171" />
            </li>
            <li>
              <NuxtLink :to="'/agents'" class="hover:text-primary transition-colors mavrix-text text-white pt-2">
                Real Estate Agents In Dubai
              </NuxtLink>
            </li>
            <li class="mx-2 text-neutral-400">
              <ChevronsRight color="#c99171" />
            </li>
            
            <li class="mavrix-text font-semibold text-white">
                {{ agent.name }}
            </li>

          </ul>
        </nav>
      </div>
      <div class="flex flex-col md:flex-row gap-10 mb-12 items-center md:items-start">
        <img :src="agent.image" :alt="agent.name" class="w-100 h-120 object-cover rounded-2xl shadow-lg" />

        <div>
          <div class="border-b border-b-gray-500 pb-4">
          <h1 class="text-3xl font-semibold">{{ agent.name }}</h1>
          <p class="text-gray-400 uppercase">{{ agent.title || 'Real Estate Agent' }}</p>
          </div>
          <div class="mt-4 flex flex-col gap-2 space-y-1 text-sm text-gray-400">
            <div class="flex items-center gap-2"> 
              <Mail color="#af7554" class="h-6 w-6 " :stroke-width="1" />
              {{ agent.email || 'N/A' }}
            </div>
            <div class="flex items-center gap-2">
              <PhoneCall color="#af7554" class="h-6 w-6 " :stroke-width="1" />
              <p> {{ agent.mobile || 'N/A' }}</p>
            </div>
            <div class="flex items-center gap-2">
              <MessageCircle color="#af7554" class="h-6 w-6 " :stroke-width="1" />
              <p> {{ agent.whatsapp || 'N/A' }}</p>
            </div>
            <div class="flex items-center gap-2">
              <Award color="#af7554" class="h-6 w-6 " :stroke-width="1" />
              <p>{{ agent.experience }}</p>
            </div>
            <div class="flex items-center gap-2">
              <Languages color="#af7554" class="h-6 w-6 " :stroke-width="1" />
              <p>{{ agent.languages.join(', ') }}</p>
            </div>
          </div>
          <div class="mt-4 border-t border-t-gray-700 py-4">
            <p>
              Interested in working with {{ agent.name }}? Reach out today to discuss your real estate needs and explore how they can assist you in finding the perfect property in Dubai.
            </p>
            <p class="mt-2 text-gray-400">Don't miss out on the opportunity to work with a top agent in Dubai!</p>
          </div>
          <div class="border-t border-t-gray-700 py-4">
            <div class="flex flex-row items-center justify-start gap-4 mt-2">
                <div class="button-social-mavrix">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </div>
                <div class="button-social-mavrix"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></div>
                <!-- <Instagram /> -->
                 <div class="button-social-mavrix"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></div>
                <div class="button-social-mavrix"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg></div>
                <div class="button-social-mavrix"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></div>
                <!-- <Linkedin /> -->
                <!-- <Youtube /> -->
                <!-- <Twitter /> -->
                 <!-- <div class="button-social-mavrix">
                <MessageCircle />
                </div>
                <div class="button-social-mavrix">
                <Mail />
             </div> -->
                <!-- <Mail /> -->
             </div>
          </div>
        </div>
      </div>
      <Divider />

      <!-- Agent’s Properties -->
      <div>
        <h2 class="text-2xl font-light mb-6">Properties by {{ agent.name }}</h2>

        <div v-if="agentProperties.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(property, i) in agentProperties" :key="i"
            class="bg-[#1f1f1f] rounded-xl p-4 shadow-md  property_card hover:shadow-lg transition-all">
            <NuxtLink :to="`/${createSlug(property)}`">
              <img :src="property.thumbnail_image_path || '/images/properties/mavrix.jpg'" alt="Property"
                class=" rounded-lg mb-3 h-40 w-full object-cover transform group-hover:scale-105 transition-transform duration-500 cursor-pointer" />
            </NuxtLink>
            <!-- <h3 class="text-lg font-medium">{{ property.title }}</h3>
            <p class="text-gray-400 text-sm">
              {{ property.location?.name }}
            </p>
            <p class="mt-2 text-mavrix font-semibold">
              AED {{ Number(property.price).toLocaleString() }}
            </p> -->
            <div class="p-5 flex flex-col flex-1">
            <h2 class="text-lg font-light text-gray-200 line-clamp-2">
              {{ property.title }}
            </h2>

            <div class="flex gap-2 items-center py-4">
              <MapPin color="#c99171" class="h-6 w-6" :stroke-width="1" />
              <p class="text-gray-400 text-sm">{{ property.location?.name || 'Location not specified'}}</p>
            </div>

            <div class="flex gap-2 border-t border-b py-3 my-2 justify-between">
              <div class="flex gap-2 px-2 align-middle items-center">
                <Wallet class="h-6 w-6" :stroke-width="1" />
                <p class="text-md font-light text-mavrix">
                  AED {{ property.price?.toLocaleString() }}
                </p>
              </div>
              <div class="flex gap-2 px-2 align-middle items-center">
                <Building2 class="h-6 w-6" :stroke-width="1" />
                <p class="text-xs text-gray-400">{{ property.category || 'N/A' }}</p>
              </div>
            </div>

            <div class="flex gap-2 py-3">
              <div class="flex gap-2 px-2 items-center border-r border-r-gray-600">
                <BedDouble class="h-6 w-6" :stroke-width="1" />
                <p class="text-xs text-gray-400">{{ property.bed?.name || 'N/A' }}</p>
              </div>
              <div class="flex gap-2 px-2 items-center border-r border-r-gray-600">
                <Bath class="h-6 w-6" :stroke-width="1" />
                <p class="text-xs text-gray-400">{{ property.bath?.name || 'N/A' }}</p>
              </div>
              <div class="flex gap-2 px-2 items-center">
                <LandPlot class="h-6 w-6" :stroke-width="1" />
                <p class="text-xs text-gray-400">{{ property.built_size }} Sq.Ft.</p>
              </div>
            </div>

            <div class="flex justify-between gap-4 items-center mt-4">
              <NuxtLink :to="`/${createSlug(property)}`"
                class="button-mavrix w-full text-center font-light uppercase text-sm" tooltip="View Property Details" >
                VIEW
                
              </NuxtLink>
              
              <a :href="`tel:${property.user?.mobile}`" class="button-mavrix-outline">
                <PhoneCall color="#c99171" class="h-6 w-6" :stroke-width="1" />
              </a>
              <a :href="`tel:${property.user?.whatsapp}`" class="button-mavrix-outline">
                <MessageCircle color="#c99171" class="h-6 w-6" :stroke-width="1" />
              </a>
            </div>
          </div>
          </div>
        </div>
        

        <div v-else class="text-gray-500 text-center py-10">
          No properties found for this agent.
        </div>
      </div>
    </div>
    
    
    <Divider />

  </section>
</template>
