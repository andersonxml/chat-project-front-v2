<script setup lang="ts">
import { Bell, Lock, User } from '@lucide/vue';
import ButtonBack from '../ButtonBack.vue';
import SettingsPerfil from './SettingsPerfil.vue';
import SettingsSecurity from './SettingsSecurity.vue';
import SettingsNotification from './SettingsNotification.vue';

</script>

<template>
    <main class="w-full h-auto bg-[#f8fafc] py-5">
        <div class="max-w-5xl mx-auto py-6">
            <div class="mb-8">
                <ButtonBack/>
                <h1 class="text-[28px] text-[#0f172a] mb-2">Configurações</h1>
                <p class="text-[14px] text-[#64748b]">
                    Gerencie suas preferências e configurações da conta
                </p>
            </div>
        </div>
        <!-- Perfil -->
        <SettingsPerfil/>
        <!-- Notification -->
        <SettingsNotification/>
        <!-- Security -->
        <SettingsSecurity/>
        <!-- Save -->
        <div class="flex gap-3 max-w-5xl mx-auto">
            <button class="px-6 py-3 bg-[#1e40af] text-white text-[14px] hover:bg-[#1e3a8a] transition-colors">
                Salvar alterações
            </button>
            <button
                class="px-6 py-3 bg-white text-[#64748b] text-[14px] border border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors">
                Cancelar
            </button>
        </div>
    </main>
</template>