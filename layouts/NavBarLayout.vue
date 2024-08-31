<template>
  <nav-bar v-model="hidden" />
  <div class="tw-mx-auto tw-max-w-screen-2xl" :hidden="hidden">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const hidden = ref()
</script>

<style scoped></style>
