<script setup lang="ts">
import ButtonBack from '../ButtonBack.vue';
import AdminActions from './AdminActions.vue';
import AdminRecent from './AdminRecent.vue';
import AdminStatus from './AdminStatus.vue';
import AdminSystemHealth from './AdminSystemHealth.vue';

</script>

<template>
    <main class="w-full h-auto py-4 bg-[#f8fafc]">
        <div class="max-w-7xl mx-auto">
            <div class="flex-1 overflow-y-auto">
                <div class="max-w-7xl mx-auto py-8">
                    <div class="mb-8">
                        <ButtonBack />
                        <h1 class="text-[28px] text-[#0f172a] mb-2">Painel Administrativo</h1>
                        <p class="text-[14px] text-[#64748b]">
                            Monitore e gerencie o sistema
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="max-w-7xl mx-auto">
            <!-- Status -->
            <AdminStatus />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                <AdminRecent/>
                <AdminSystemHealth/>
            </div>
            <AdminActions/>
        </div>
    </main>
</template>