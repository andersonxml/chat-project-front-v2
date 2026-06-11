<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay],
        };
    },
};
</script>

<template>
    <section class="flex flex-1 relative">
        <div class="bg-[url(/src/assets/fundo.png)] opacity-4 w-full h-full absolute" />

        <div class="w-full h-full flex justify-center items-center">
            <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
                delay: 4500,
                disableOnInteraction: false,
            }" :modules="modules" :loop="true" class="w-200 h-90 rounded-lg">
                <swiper-slide class="bg-neutral-200 rounded-lg"></swiper-slide>
                <swiper-slide class="bg-neutral-300 rounded-lg"></swiper-slide>
                <swiper-slide class="bg-neutral-400 rounded-lg"></swiper-slide>
            </swiper>
        </div>
    </section>
</template>