<script setup lang="ts">
import useEmblaCarousel from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'
const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

import banner1 from '/src/assets/banners/banner1.png'
import banner2 from '/src/assets/banners/banner2.png'
import banner3 from '/src/assets/banners/banner3.png'

const images = [banner1, banner2, banner3]

</script>

<template>
    <div class="embla__viewport" ref="emblaRef">
        <div class="embla__container">
            <div v-for="i in images" class="embla__slide h-100">
                <img class="w-200 h-full" :src="i" alt="" srcset="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.embla__viewport {
    overflow: hidden;
}

.embla__container {
    display: flex;
    touch-action: pan-y pinch-zoom;
}

.embla__slide {
    flex: 0 0 100%;
    justify-items: center;
    min-width: 0;
}
</style>