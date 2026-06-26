<script setup lang="ts">
import ChatMessage from './ChatMessage.vue';
import ChatSidebar from './ChatSidebar.vue';

</script>

<template>
    <main class="w-full h-full flex overflow-hidden">
        <ChatSidebar/>
        <ChatMessage/>
    </main>
</template>