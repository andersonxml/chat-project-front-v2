<script setup lang="ts">
import { Building2 } from '@lucide/vue';
import AuthForm from './AuthForm.vue';
import AuthInfo from './AuthInfo.vue';

</script>

<template>
    <main class="w-full h-full flex">
        <section class="lg:w-2/5 w-full h-full flex flex-col">
            <div class="p-8 border-b border-[#e8e8e8]">
                <div class="flex items-center gap-2.5">
                    <div class="w-10 h-10 bg-[#1e40af] rounded-lg flex items-center justify-center">
                        <Building2 class="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <span class="text-[17px] text-[#0f172a]">Chat Corporativo</span>
                </div>
            </div>
            <div class="flex flex-1 justify-center items-center">
                <AuthForm />
            </div>
            <div class="p-6 border-t border-[#e8e8e8] text-center">
                <p class="text-[12px] text-[#94a3b8]">
                    © 2026 Chat Corporativo. Todos os direitos reservados.
                </p>
            </div>
        </section>
        <section class="w-3/5 hidden h-full bg-gradient-to-br from-[#1e40af] to-[#1e3a8a] lg:flex justify-center items-center">
            <AuthInfo/>
        </section>
    </main>
</template>