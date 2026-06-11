
<script setup lang="ts">
import { computed } from 'vue';


const users = [
    {
        nome: 'anderson',
        email: 'anderson@teste.com',
        status: false
    },
    {
        nome: 'anderson2',
        email: 'anderson2@teste.com',
        status: true
    },
    {
        nome: 'teste',
        email: 'teste@teste.com',
        status: true
    },
    {
        nome: 'maria',
        email: 'maria@teste.com',
        status: true
    },
    {
        nome: 'carlos',
        email: 'carlos@teste.com',
        status: true
    }
]

const orderUser = computed(() => {
    return [...users].sort((a, b) => Number(b.status) - Number(a.status))
})

</script>

<template>
    <section class="w-full h-full">
        <div v-for="u in orderUser" class="w-full py-3 duration-300 hover:bg-[#f8fafc] px-6 flex items-center gap-3">
            <div class="relative">
                <div class="w-12 h-12 bg-[#cbd5e1] rounded-full flex justify-center items-center">
                    a
                </div>
                <div :class="[ u.status ? 'bg-emerald-500' : 'bg-red-500', 'absolute bottom-0 right-0 w-3.5 h-3.5 border-2 border-white rounded-full']" />
            </div>
            <div class="flex flex-1 flex-col justify-between mb-1">
                <p class="text-[14px] text-[#0f172a]">{{ u.nome }}</p>
                <p class="text-[11px] text-[#94a3b8]">void</p>
            </div>
            <div class="flex flex-col items-center">
                <p class="text-[11px] text-[#64748b]">00:00</p>
                <span class="ml-2 w-4 h-4 bg-[#1e40af] text-white text-[11px] rounded-full flex items-center justify-center">2</span>
            </div>
        </div>
    </section>
</template>