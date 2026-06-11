<script setup lang="ts">
import { User } from '@lucide/vue';

</script>

<template>
    <div class="bg-white max-w-5xl mx-auto border border-[#e8e8e8] rounded-lg mb-6">
        <div class="p-6 border-b border-[#e8e8e8]">
            <div class="flex items-center gap-3">
                <User class="w-5 h-5 text-[#64748b]" />
                <h2 class="text-[18px] text-[#0f172a]">Perfil</h2>
            </div>
        </div>
        <div class="p-6 space-y-5">
            <div class="flex items-center gap-4">
                <div
                    class="w-20 h-20 rounded-full bg-[#1e40af] flex items-center justify-center text-white text-[24px]">
                    V
                </div>
                <button
                    class="px-4 py-2 bg-[#f8fafc] text-[#0f172a] text-[14px] border border-[#e2e8f0] hover:bg-[#f1f5f9] transition-colors">
                    Alterar foto
                </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-2">
                    <label class="text-[13px] text-[#475569] block">Nome</label>
                    <input type="text" defaultValue="teste"
                        class="w-full px-4 py-2.5 border border-[#cbd5e1] text-[14px] text-[#0f172a] focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af] transition-colors" />
                </div>
                <div class="space-y-2">
                    <label class="text-[13px] text-[#475569] block">Cargo</label>
                    <input type="text" defaultValue="teste"
                        class="w-full px-4 py-2.5 border border-[#cbd5e1] text-[14px] text-[#0f172a] focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af] transition-colors" />
                </div>
            </div>

            <div class="space-y-2">
                <label class="text-[13px] text-[#475569] block">Email</label>
                <input type="email" defaultValue="teste@empresa.com"
                    class="w-full px-4 py-2.5 border border-[#cbd5e1] text-[14px] text-[#0f172a] focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af] transition-colors" />
            </div>
        </div>
    </div>
</template>