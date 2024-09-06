<script setup lang="ts">
import EditSignature from './components/EditSignature.vue'

</script>

<template>
  <header class="px-20 py-4 flex gap-10 items-center shadow-lg">
    <img alt="Redkiwi logo" class="logo" src="./assets/logo.svg" width="80" height="80" />
    <h1 class="text-2xl font-bold">Redkiwi Handtekening Editor</h1>
  </header>

  <main>
    <EditSignature />
  </main>
</template>

<style scoped>
</style>
