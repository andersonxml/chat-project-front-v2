<script setup lang="ts">
import { Building2, Menu, Search } from '@lucide/vue';

</script>

<template>
    <nav class="w-2/10 h-full border-r border-[#e8e8e8] flex">
        <!-- Sidebar Navigation -->
        <section class="absolute w-full h-full z-5">
            <div class="w-full h-full relative">
                <div class="absolute w-full h-full bg-black opacity-15"></div>
                <div class="w-2/12 h-full bg-white z-20 flex relative">
    
                </div>
            </div>
        </section>

        <section class="w-full relative bg-white">
            <!-- Header -->
            <div class="px-6 py-5 border-b border-b-[#e8e8e8] gap-4 flex flex-col">
                <div class="flex items-center gap-3.5">
                    <Menu class="w-5 h-5 text-neutral-500" />
                    <div class="w-8 h-8 bg-[#1e40af] rounded-lg flex items-center justify-center">
                        <Building2 class="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <span class="text-[14px] text-[#0f172a]">Chat Corporativo</span>
                </div>
                <div class="w-full rounded-lg overflow-hidden border-[#e8e8e8] border flex items-center bg-[#f8fafc]">
                    <Search class="text-[#64748b] w-5 h-5 ml-2" />
                    <input placeholder="Buscar conversas." class="flex flex-1 py-1 outline-0 px-2 text-[14px]"
                        type="text">
                </div>
            </div>
        </section>
    </nav>
</template>