<script setup lang="ts">
import { ref } from 'vue';
import ChatBanner from './ChatBanner.vue';
import { Send } from '@lucide/vue';
import { useChatStores } from '../../stores/chatStores.ts';
import { useUserStore } from '../../stores/userStores.ts';

const chatStores = useChatStores();
const userStores = useUserStore();
</script>

<template>
    <section class="flex flex-1 relative">
        <div class="w-full h-full flex flex-col z-10">
            <div v-if="!chatStores.userSelected" class="w-full h-full flex z-5 justify-center items-center">
                <!-- <ChatBanner /> -->
            </div>
            <div v-else class="w-full h-full flex flex-col">
                <!-- chat header -->
                <div
                    class="h-16 md:h-18 bg-[#f8fafc] border-b border-[#e8e8e8] px-3 md:px-4 flex items-center gap-4">
                    <div class="relative">
                        <div class="w-10 h-10 bg-[#cbd5e1] rounded-full flex justify-center items-center">
                            a
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-[15px] flex gap-1">{{ chatStores.userSelected }} <p v-if="userStores.name === chatStores.userSelected">(você)</p></p>
                        <p class="text-[11px] text-neutral-600">{{ chatStores.userSelectedRole }}</p>
                    </div>
                </div>
                <!-- chat body -->
                <div class="flex flex-1"></div>
                <!-- chat footer -->
                <div class="w-full h-20 bg-[#f8fafc] flex justify-center items-center border-t border-[#e8e8e8]">
                    <div class="w-3/4 h-full flex items-center justify-center gap-3 overflow-hidden">
                        <div class="w-4/5 max-h-18 min-h-11 bg-white border overflow-hidden flex items-center border-[#e8e8e8] rounded-4xl">
                            <textarea class="w-full max-h-18 min-h-6 px-2 outline-none no-scrollbar">
        
                            </textarea>
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