<script setup lang="ts">
import { Bell } from '@lucide/vue';

</script>

<template>
    <div class="bg-white max-w-5xl mx-auto border border-[#e8e8e8] rounded-lg mb-6">
        <div class="p-6 border-b border-[#e8e8e8]">
            <div class="flex items-center gap-3">
                <Bell class="w-5 h-5 text-[#64748b]" />
                <h2 class="text-[18px] text-[#0f172a]">Notificações</h2>
            </div>
        </div>
        <div class="p-6 space-y-4">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-[14px] text-[#0f172a] mb-1">Notificações push</p>
                    <p class="text-[13px] text-[#64748b]">Receba notificações de novas mensagens</p>
                </div>
                <button>
                    <div class="w-5 h-5 bg-white rounded-full shadow-sm" />
                </button>
            </div>

            <div class="flex items-center justify-between">
                <div>
                    <p class="text-[14px] text-[#0f172a] mb-1">Sons</p>
                    <p class="text-[13px] text-[#64748b]">Reproduzir som ao receber mensagens</p>
                </div>
                <button>
                    <div class="w-5 h-5 bg-white rounded-full shadow-sm" />
                </button>
            </div>
        </div>
    </div>
</template>