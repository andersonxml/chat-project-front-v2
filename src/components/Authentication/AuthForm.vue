<script setup lang="ts">
import { Shield } from '@lucide/vue';
import { ref } from 'vue';
import { UseAuth } from '../../composables/useAuth';
import { router } from '../../routes';

const { login } = UseAuth();

const email = ref('');
const password = ref('');
const credentialsErro = ref(false)
const blockedSendLogin = ref(false)

async function emitLogin() {
  credentialsErro.value = false
  if (!email.value || !password.value) {
    credentialsErro.value = true
    return
  }
  blockedSendLogin.value = true
  try {

    const result = await login({ email: email.value, password: password.value })
    if (!result) {
      credentialsErro.value = true
      return
    }
    router.push('/chat')
  } finally {
    setTimeout(() => {
      blockedSendLogin.value = false;
      email.value = ''
      password.value = ''
    }, 1500)
  }
}

</script>
<template>
  <div class="xl:w-full xl:px-6 lg:w-full lg:px-6 w-full px-6">
    <div class="flex-1 flex items-center justify-center px-2">
      <div class="w-full max-w-md">
        <div class="mb-10">
          <h1 class="text-[28px] text-[#0f172a] mb-2">Acesso ao sistema</h1>
          <p class="text-[14px] text-[#64748b]">
            Faça login com suas credenciais corporativas
          </p>
        </div>

        <div class="space-y-1">
          <div class="space-y-1">
            <label htmlFor="email" class="text-[13px] text-[#475569] block">
              Endereço de e-mail
            </label>
            <input v-model="email"
              :class="[credentialsErro ? 'border-amber-500 animate-pulse' : 'focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]']"
              class="w-full px-4 py-2.5 border border-[#cbd5e1] text-[14px] text-[#0f172a] focus:outline-none transition-colors" />
          </div>

          <div class="space-y-2">
            <label htmlFor="password" class="text-[13px] text-[#475569] block">
              Senha
            </label>
            <input v-model="password"
              :class="[credentialsErro ? 'border-amber-500 animate-pulse' : 'focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]']"
              class="w-full px-4 py-2.5 border border-[#cbd5e1] text-[14px] text-[#0f172a] focus:outline-none transition-colors" />
          </div>

          <p v-show="credentialsErro" class="text-[12px] animate-pulse text-amber-500">Verifique as credenciais de
            acesso.</p>

          <button @click="emitLogin" :class="blockedSendLogin === true ? 'opacity-35 cursor-progress' : ''"
            :disabled="blockedSendLogin === true"
            class="w-full py-3 bg-[#1e40af] text-white text-[14px] hover:bg-[#1e3a8a] transition-colors mt-8">
            Acessar sistema
          </button>
        </div>

        <div class="mt-8 flex items-center gap-2 text-[12px] text-[#64748b]">
          <Shield class="w-4 h-4" />
          <span>Conexão segura e criptografada</span>
        </div>
      </div>

    </div>
  </div>
</template>