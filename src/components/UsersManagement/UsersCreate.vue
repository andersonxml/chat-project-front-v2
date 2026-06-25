<script setup lang="ts">
import { useCreateUserStores } from '../../stores/createUserStores';

const createUserStores = useCreateUserStores();

</script>
<template>
    <section class="w-full h-full flex justify-center items-center absolute z-20">
        <div @click="createUserStores.setShowMenuCreateUser(false)" class="w-full h-full absolute bg-black/10 backdrop-blur-[1px] "/>
        <div class="w-204 h-auto py-2 bg-white rounded-lg shadow-md z-20 px-4">
            <div class="p-3 flex items-center w-full border-b border-neutral-200">
                <p><strong>Usuário</strong> - Cadastro de usuários</p>
            </div>

            <!-- form -->
            <div class="w-full flex flex-col p-3 gap-3">
                <div class="w-full flex gap-2">
                    <div class="text-[12px] flex flex-col w-1/3 ">
                        <label for="">Nome</label>
                        <input type="text" class="px-2 flex flex-1 outline-none py-1 border border-neutral-300">
                    </div>
                    <div class="text-[12px] flex flex-col w-2/3">
                        <label for="">E-mail</label>
                        <input type="text" class="px-2 flex flex-1 outline-none py-1 border border-neutral-300">
                    </div>
                </div>
                <div class="w-full flex gap-2">
                    <div class="text-[12px] flex flex-col w-1/4 ">
                        <label for="">Função</label>
                        <input type="text" class="outline-none px-2 flex flex-1 py-1 border border-neutral-300">
                    </div>
                    <div class="text-[12px] flex flex-col w-2/4 ">
                        <label for="">Senha</label>
                        <div class="border border-neutral-300 py-1">
                            <input type="password" class="w-full h-full outline-none px-2">
                        </div>
                    </div>
                </div>
                <div class="w-full flex justify-end mt-4">
                    <button class="w-44 h-9 bg-blue-700 text-white text-[14px] rounded-lg">
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>