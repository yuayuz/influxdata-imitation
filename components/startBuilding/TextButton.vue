<template>
  <div class="buttonHover tw-flex">
    <div class="white-underline tw-relative tw-h-fit tw-text-lg tw-font-black">
      {{ props.title }}
    </div>
    <v-icon icon="mdi-arrow-right"></v-icon>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
}

const props = defineProps<Props>()
</script>

<style scoped>
@import "@/stylus/main.css";
</style>
