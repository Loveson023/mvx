<template>
    <section class="bg-{#212121}  pt-16">
        <Divider />
        <div class="flex items-start px-2">
        <Breadcrumbs />
        </div>
        <!-- <ClientOnly>
            <MapTwo />
        </ClientOnly> -->
                <Divider />
                <ClientOnly >
                    <PropertyMap />
                </ClientOnly>
                <Divider />
     </section>

</template>

<script setup>
// import MapTwo from "~/components/properties/maps/MapTwo.vue";
import Divider from "~/components/templates/divider.vue";
import Breadcrumbs from "~/components/templates/breadcrumbs.vue";
import PropertyMap from "~/components/properties/maps/PropertyMap.vue";

</script>