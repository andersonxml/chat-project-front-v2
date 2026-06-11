<script setup lang="ts">
import { Building2, LogOut, Menu, MessageSquare, Search, Settings, Shield, Users, X } from '@lucide/vue';
import { ref } from 'vue';
import ChatContacts from './ChatContacts.vue';

const showSidebarNavigation = ref(false);


</script>

<template>
    <nav class="w-2/10 h-full border-r border-[#e8e8e8] flex">
        <!-- Sidebar Navigation -->
        <section :class="[
            showSidebarNavigation
                ? 'pointer-events-auto'
                : 'pointer-events-none',
            'absolute w-full h-full z-15'
        ]">
            <div class="w-full h-full relative">
                <div v-if="showSidebarNavigation" v-on:click="showSidebarNavigation = false"
                    class="absolute w-full h-full bg-black opacity-15"></div>
                <div
                    :class="[showSidebarNavigation ?
                        'translate-x-0' : '-translate-x-full',
                        'w-2/12 h-full bg-white z-20 flex flex-col relative duration-500 transition-transform border-[#e8e8e8] border']">
                    <!-- Header -->
                    <div class="px-6 py-5 border-b border-b-[#e8e8e8] gap-4 flex flex-col w-full h-18">
                        <div class="flex items-center gap-3.5">
                            <div class="w-8 h-8 bg-[#1e40af] rounded-lg flex items-center justify-center">
                                <Building2 class="w-5 h-5 text-white" strokeWidth={2.5} />
                            </div>
                            <span class="text-[14px] flex-1 text-[#0f172a]">Chat Corporativo</span>
                            <X v-on:click="showSidebarNavigation = false" class="h-4"/>
                        </div>
                    </div>
                    <!-- Profile -->
                    <div class="flex items-center gap-3 p-3 bg-[#f8fafc] rounded-lg m-6">
                        <div class="w-12 h-12 rounded-full bg-[#1e40af] flex items-center justify-center text-white">
                            V
                        </div>
                        <div>
                            <p class="text-[14px] text-[#0f172a]">Você</p>
                            <p class="text-[12px] text-[#64748b]">voce@empresa.com</p>
                        </div>
                    </div>
                    <!-- Menus -->
                    <div class="space-y-1 flex flex-col px-6">
                        <a href="/chat"
                            class="w-full flex items-center gap-3 px-3 py-2.5 text-[14px] hover:bg-[#f8fafc] transition-colors rounded-lg">
                            <MessageSquare class="w-5 h-5" />
                            <span>Conversas</span>
                        </a>
                        <a href="/settings"
                            class="w-full flex items-center gap-3 px-3 py-2.5 text-[14px] hover:bg-[#f8fafc] transition-colors rounded-lg">
                            <Settings class="w-5 h-5" />
                            <span>Configurações</span>
                        </a>
                        <a href="/admin"
                            class="w-full flex items-center gap-3 px-3 py-2.5 text-[14px] hover:bg-[#f8fafc] transition-colors rounded-lg">
                            <Shield class="w-5 h-5" />
                            <span>Painel Admin</span>
                        </a>
                        <a href="/users"
                            class="w-full flex items-center gap-3 px-3 py-2.5 text-[14px] hover:bg-[#f8fafc] transition-colors rounded-lg">
                            <Users class="w-5 h-5" />
                            <span>Usuários</span>
                        </a>
                    </div>
                    <!-- Logout -->

                    <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-[#e8e8e8] px-6">
                        <button
                            class="w-full flex items-center gap-3 py-2.5 px-3 text-[14px] text-[#dc2626] hover:bg-[#fef2f2] transition-colors rounded-lg">
                            <LogOut class="w-5 h-5" />
                            <span>Sair</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section class="w-full relative bg-white">
            <!-- Header -->
            <div class="px-6 py-5 border-b border-b-[#e8e8e8] gap-4 flex flex-col">
                <div class="flex items-center gap-3.5">
                    <Menu v-on:click="showSidebarNavigation = true" class="w-5 h-5 text-neutral-500" />
                    <div class="w-8 h-8 bg-[#1e40af] rounded-lg flex items-center justify-center">
                        <Building2 class="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <span class="text-[14px] text-[#0f172a]">Chat Corporativo</span>
                </div>
                <div class="w-full rounded-lg overflow-hidden border-[#e8e8e8] border flex items-center bg-[#f8fafc]">
                    <Search class="text-[#64748b] w-5 h-5 ml-2" />
                    <input placeholder="Buscar conversas." class="flex flex-1 py-1 outline-0 px-2 text-[14px]"
                        type="text">
                </div>
            </div>

            <!-- body -->
            <div class="flex-1 flex">
                <ChatContacts/>
            </div>
        </section>
    </nav>
</template>