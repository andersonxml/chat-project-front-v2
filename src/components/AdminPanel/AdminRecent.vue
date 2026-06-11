<script setup lang="ts">
import { AlertCircle, CheckCircle } from '@lucide/vue';

</script>

<template>
    <div class="bg-white border border-[#e8e8e8] rounded-lg">
        <div class="p-6 border-b border-[#e8e8e8]">
            <h2 class="text-[18px] text-[#0f172a]">Atividades Recentes</h2>
        </div>
        <div class="p-6">
            <div class="space-y-4">
                <div class="flex items-start gap-5 flex-col">
                    <div class="flex gap-3">
                        <CheckCircle class="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <div class="flex-1 min-w-0">
                            <p class="text-[14px] text-[#0f172a]">Novo usuário: teste-adm</p>
                            <p class="text-[12px] text-[#64748b] mt-1">0 minutos atrás</p>
                        </div>
                    </div>
                    <div class="flex gap-3">
                        <AlertCircle class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <div class="flex-1 min-w-0">
                            <p class="text-[14px] text-[#0f172a]">Tentativa de login falhada: admin@empresa.com</p>
                            <p class="text-[12px] text-[#64748b] mt-1">0 minutos atrás</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>