<script setup lang="ts">
import { ref } from 'vue';
import ChatBanner from './ChatBanner.vue';
import { Send } from '@lucide/vue';


const viewMessage = ref(false)

</script>

<template>
    <section class="flex flex-1 relative">
        <div class="w-full h-full flex flex-col z-10">
            <div v-if="!viewMessage" class="w-full h-full flex z-5 justify-center items-center">
                <!-- <ChatBanner /> -->
            </div>
            <div v-else class="w-full h-full flex flex-col">
                <!-- chat header -->
                <div
                    class="h-16 md:h-18 bg-[#f8fafc] border-b border-[#e8e8e8] px-3 md:px-4 flex items-center justify-between">
                    <div class="relative">
                        <div class="w-10 h-10 bg-[#cbd5e1] rounded-full flex justify-center items-center">
                            a
                        </div>
                        <div
                            class="bg-emerald-500 absolute bottom-0 right-0 w-3.5 h-3.5 border-2 border-white rounded-full" />
                    </div>
                </div>
                <!-- chat body -->
                <div class="flex flex-1"></div>
                <!-- chat footer -->
                <div class="w-full h-20 py-4 bg-[#f8fafc] flex justify-center items-center border-t border-[#e8e8e8]">
                    <div class="w-3/4 h-full flex items-center justify-center gap-3">
                        <div class="w-4/5 h-full border rounded-4xl border-[#e8e8e8] bg-white">
    
                        </div>
                        <button type="submit"
                            className="w-11 h-11 bg-[#1e40af] text-white rounded-full hover:bg-[#1e3a8a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center flex-shrink-0">
                            <send className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-[url(/src/assets/fundo.png)] opacity-4 w-full h-full absolute" />
    </section>
</template>