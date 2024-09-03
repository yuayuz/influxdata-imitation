<template>
  <div :class="{ 'button-l-active': isActive }">
    <button
      :class="[
        'tw-w-full tw-px-9 tw-py-4 tw-text-start tw-text-lg tw-font-bold tw-text-white tw-opacity-50',
        { 'tw-opacity-100': isActive },
      ]"
      @click="activeItemId = props.button.id"
    >
      {{ props.button.title }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import type { buttonMessage } from "~/styles/timeSeriesAnalytics"
import { onMounted, watch } from "#imports"

interface Props {
  button: buttonMessage
}

const props = defineProps<Props>()
const activeItemId = defineModel<string>()
const isActive = ref(false)
onMounted(() => {
  isActive.value = activeItemId.value === props.button.id
})
watch(activeItemId, () => {
  isActive.value = activeItemId.value === props.button.id
})
</script>

<style scoped>
@import "@/stylus/main.css";
</style>
