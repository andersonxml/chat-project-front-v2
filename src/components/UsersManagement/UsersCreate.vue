<script setup lang="ts">
import { ref } from 'vue';
import { useCreateUserStores } from '../../stores/createUserStores';
import { UseAuth } from '../../composables/useAuth';

const { register } = UseAuth()
const createUserStores = useCreateUserStores();
const existError = ref(false);

const name = ref('');
const email = ref('');
const password = ref('');
const role = ref('');
const messageErro = ref('')

async function postRegister() {
    messageErro.value = '';
    existError.value = false;
    if(!name.value || !email.value || !password.value || !role.value) {
        existError.value = true;
        return
    }
    const result = await register({ 
        name: name.value, 
        email: email.value, 
        password: password.value, 
        role: role.value 
    })
    name.value = ''
    email.value = ''
    password.value = ''
    role.value = ''
    messageErro.value = result
}

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
                        <input v-model="name" type="text" class="px-2 flex flex-1 outline-none py-1 border border-neutral-300">
                    </div>
                    <div class="text-[12px] flex flex-col w-2/3">
                        <label for="">E-mail</label>
                        <input v-model="email" type="text" class="px-2 flex flex-1 outline-none py-1 border border-neutral-300">
                    </div>
                </div>
                <div class="w-full flex gap-2">
                    <div class="text-[12px] flex flex-col w-1/4 ">
                        <label for="">Função</label>
                        <select v-model="role" class="outline-none px-2 flex flex-1 py-1 border border-neutral-300">
                            <option value="USER">USER</option>
                            <option value="SAC">SAC</option>
                            <option value="ADMIN">ADMIN</option>
                        </select>
                    </div>
                    <div class="text-[12px] flex flex-col w-2/4 ">
                        <label for="">Senha</label>
                        <div class="border border-neutral-300 py-1">
                            <input v-model="password" type="password" class="w-full h-full outline-none px-2" placeholder="min (6)">
                        </div>
                    </div>
                </div>

                <p v-if="existError" class="text-[14px] text-amber-900 animate-bounce">Verifique os campos.</p>
                <p v-if="messageErro" class="text-[14px] text-amber-900 animate-bounce">{{ messageErro }}</p>

                <div class="w-full flex justify-end mt-4">
                    <button @click="postRegister" class="w-44 h-9 hover:bg-blue-800 duration-300 bg-blue-700 text-white text-[14px] rounded-lg">
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>