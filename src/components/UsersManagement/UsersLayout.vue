<script setup lang="ts">
import { Plus } from '@lucide/vue';
import ButtonBack from '../ButtonBack.vue';
import UsersFilters from './UsersFilters.vue';

</script>

<template>
    <main class="w-full h-full py-4 bg-[#f8fafc]">
        <div class="max-w-7xl mx-auto">
            <div class="flex-1 overflow-y-auto">
                <div class="max-w-7xl mx-auto py-8">
                    <div class="mb-8">
                        <ButtonBack />
                        <div class="flex justify-between items-center">
                            <div>
                                <h1 class="text-[28px] text-[#0f172a] mb-2">Gerenciamento de Usuários</h1>
                                <p class="text-[14px] text-[#64748b]">
                                    Monitore e gerencie o sistema
                                </p>
                            </div>
                            <button class="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1e40af] text-white text-[14px] hover:bg-[#1e3a8a] transition-colors whitespace-nowrap">
                                <Plus class="w-4 h-4" />
                                <span class="hidden sm:inline">Novo Usuário</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <UsersFilters/>
        </div>
    </main>
</template>