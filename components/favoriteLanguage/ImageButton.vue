<template>
  <div class="tw-aspect-square tw-p-9">
    <v-img
      :src="props.button.img"
      :class="[isActive ? 'tw-opacity-100' : 'tw-opacity-40', 'imageButton']"
      @click="activeItem = props.button.codeType"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "#imports"
import type { buttonMessage } from "~/styles/favoriteLanguage"

interface Props {
  button: buttonMessage
}

const props = defineProps<Props>()

const activeItem = defineModel<string>()
const isActive = ref(false)
onMounted(() => {
  isActive.value = activeItem.value === props.button.codeType
})
watch(activeItem, () => {
  isActive.value = activeItem.value === props.button.codeType
})
</script>

<style scoped>
@import "@/stylus/main.css";
</style>
