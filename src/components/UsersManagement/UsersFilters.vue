<script setup lang="ts">
import { Edit, Mail, Search, UserX } from '@lucide/vue';
import { UseUsers } from '../../composables/useUsers';
import { computed, onMounted, ref } from 'vue';

const { findUsers } = UseUsers();
const userSearch = ref('');

type UsersResponse = {
    name: string,
    email: string,
    role: string,
    createdAt: string,
    updatedAt: string,
}

const users = ref<UsersResponse[]>([]);

const filteredUsers = computed(() => {
    const search = userSearch.value.toLowerCase().trim();

    if (!search) return users.value;

    return users.value.filter(user =>
        user.name.toLowerCase().includes(search)
    );
});

async function findAllUsers() {
    const result = await findUsers();

    if(!result) return
    users.value = result
}

onMounted(() => {
    findAllUsers()
})

</script>
<template>
    <section class="flex flex-col gap-10">
        <div class="flex flex-col sm:flex-row gap-3 md:gap-4">
            <div class="flex-1 relative">
                <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748b]" />
                <input v-model="userSearch" type="text" placeholder="Buscar por nome, email ou departamento..." class="w-full pl-10 pr-4 py-2.5 bg-white border border-[#e2e8f0] text-[14px] text-[#0f172a]
                placeholder:text-[#94a3b8] focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]
                transition-colors" />
            </div>
            <select class="px-4 py-2.5 bg-white border border-[#e2e8f0] text-[14px] text-[#0f172a] focus:outline-none
                focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]" disabled>
                <option>Todos os cargos</option>
                <option>Admin</option>
                <option>Supervisor</option>
                <option>SAC</option>
            </select>
            <select class="px-4 py-2.5 bg-white border border-[#e2e8f0] text-[14px] text-[#0f172a] focus:outline-none
                focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]" disabled>
                <option>Todos os status</option>
                <option>Online</option>
                <option>Offline</option>
            </select>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
            <div class="bg-white border border-[#e8e8e8] p-4">
                <p class="text-[13px] text-[#64748b] mb-1">Total de Usuários</p>
                <p class="text-[24px] text-[#0f172a]">{{ users?.length}}</p>
            </div>
            <div class="bg-white border border-[#e8e8e8] p-4">
                <p class="text-[13px] text-[#64748b] mb-1">Online Agora</p>
                <p class="text-[24px] text-[#0f172a]">-</p>
            </div>
            <div class="bg-white border border-[#e8e8e8] p-4">
                <p class="text-[13px] text-[#64748b] mb-1">Supervisores</p>
                <p class="text-[24px] text-[#0f172a]">-</p>
            </div>
            <div class="bg-white border border-[#e8e8e8] p-4">
                <p class="text-[13px] text-[#64748b] mb-1">Admins</p>
                <p class="text-[24px] text-[#0f172a]">-</p>
            </div>
        </div>

        <div class="bg-white border border-[#e8e8e8] rounded-lg h-96 overflow-y-scroll no-scrollbar">
            <table class="w-full min-w-[800px]">
                <thead class="bg-[#f8fafc] border-b border-[#e8e8e8]">
                    <tr>
                        <th class="text-left px-6 py-4 text-[13px] text-[#64748b] font-medium">Usuário</th>
                        <th class="text-left px-6 py-4 text-[13px] text-[#64748b] font-medium">Email</th>
                        <th class="text-left px-6 py-4 text-[13px] text-[#64748b] font-medium">Cargo</th>
                        <th class="text-left px-6 py-4 text-[13px] text-[#64748b] font-medium">Setor</th>
                        <th class="text-left px-6 py-4 text-[13px] text-[#64748b] font-medium">Status</th>
                        <th class="text-left px-6 py-4 text-[13px] text-[#64748b] font-medium">Membro desde</th>
                        <th class="text-center px-6 py-4 text-[13px] text-[#64748b] font-medium">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="u in filteredUsers" class="border-b border-[#f1f5f9] hover:bg-[#f8fafc] transition-colors">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-10 h-10 rounded-full bg-[#cbd5e1] flex items-center justify-center text-[14px] text-[#475569]">
                                    n
                                </div>
                                <span class="text-[14px] text-[#0f172a]">{{ u.name }}</span>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <span class="text-[14px] text-[#64748b]">{{ u.email }}</span>
                        </td>
                        <td class="px-6 py-4">
                            <span class="py-1 rounded-full text-[12px] border px-2" 
                            :class="u.role === 'admin'.toUpperCase() ? ' text-red-400 bg-red-100' : u.role === 'sac'.toUpperCase() ? 'text-blue-400 bg-blue-100' : 'text-neutral-400 bg-neutral-100'"
                            >
                                {{ u.role }}
                            </span>
                        </td>
                        <td class="px-6 py-4">
                            <span class="text-[14px] text-[#64748b]">---</span>
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-2">
                                <div class="w-2 h-2 rounded-full bg-emerald-500" />
                                <span class="text-[14px] text-[#64748b] capitalize">status</span>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <span class="text-[14px] text-[#64748b]">{{ new Date(u.createdAt).getDate() }}/{{ new Date(u.createdAt).getMonth() }}/{{ new Date(u.createdAt).getFullYear() }}</span>
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center justify-center gap-2">
                                <button class="p-2 hover:bg-[#eff6ff] transition-colors rounded" title="Editar">
                                    <Edit class="w-4 h-4 text-[#64748b]" />
                                </button>
                                <button class="p-2 hover:bg-[#eff6ff] transition-colors rounded"
                                    title="Enviar email">
                                    <Mail class="w-4 h-4 text-[#64748b]" />
                                </button>
                                <button class="p-2 hover:bg-[#fef2f2] transition-colors rounded" title="Desativar">
                                    <UserX class="w-4 h-4 text-[#dc2626]" />
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>