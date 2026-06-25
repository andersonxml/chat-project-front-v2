<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { UseUsers } from '../../composables/useUsers';
import { useChatStores } from '../../stores/chatStores';

const chatStores = useChatStores()
const { findUsers } = UseUsers();

const users = ref();

async function findAllUsers() {
    const result = await findUsers();

    users.value = result
}
onMounted(() => {
    findAllUsers()
})

</script>
<template>
    <section class="w-full h-full">
        <div @click="chatStores.setUserSelected({name: u.name, role: u.role})" v-for="u in users" class="w-full py-3 duration-300 hover:bg-[#f8fafc] px-6 flex items-center gap-3">
            <div class="relative">
                <div class="w-12 h-12 bg-[#cbd5e1] rounded-full flex justify-center items-center">
                    a
                </div>
                <div :class="[ u.status ? 'bg-emerald-500' : 'bg-red-500', 'absolute bottom-0 right-0 w-3.5 h-3.5 border-2 border-white rounded-full']" />
            </div>
            <div class="flex flex-1 flex-col justify-between mb-1">
                <p class="text-[14px] text-[#0f172a]">{{ u.name }}</p>
                <p class="text-[11px] text-[#94a3b8]">---</p>
            </div>
            <div class="flex flex-col items-center">
                <p class="text-[11px] text-[#64748b]">00:00</p>
                <span class="ml-2 w-4 h-4 bg-[#1e40af] text-white text-[11px] rounded-full flex items-center justify-center">2</span>
            </div>
        </div>
    </section>
</template>