<template>
  <button
    class="startBuildingButton tw-px-12 tw-py-3 tw-text-base tw-font-bold"
  >
    {{ props.title }}
  </button>
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
