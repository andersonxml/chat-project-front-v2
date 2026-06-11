<script setup lang="ts">
import { Lock } from '@lucide/vue';

</script>

<template>
    <div class="bg-white max-w-5xl mx-auto border border-[#e8e8e8] rounded-lg mb-6">
            <div class="p-6 border-b border-[#e8e8e8]">
                <div class="flex items-center gap-3">
                    <Lock class="w-5 h-5 text-[#64748b]" />
                    <h2 class="text-[18px] text-[#0f172a]">Segurança</h2>
                </div>
            </div>
            <div class="p-6 space-y-4">
                <button class="w-full text-left px-4 py-3 border border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors">
                    <p class="text-[14px] text-[#0f172a] mb-1">Alterar senha</p>
                    <p class="text-[13px] text-[#64748b]">Última alteração há 3 meses</p>
                </button>

                <button class="w-full text-left px-4 py-3 border border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors">
                    <p class="text-[14px] text-[#0f172a] mb-1">Sessões ativas</p>
                    <p class="text-[13px] text-[#64748b]">Gerencie dispositivos conectados</p>
                </button>
            </div>
        </div>
</template>