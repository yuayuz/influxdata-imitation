<template>
  <nav-bar v-model="hidden" />
  <div :hidden="hidden">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const hidden = ref()
</script>

<style scoped></style>
