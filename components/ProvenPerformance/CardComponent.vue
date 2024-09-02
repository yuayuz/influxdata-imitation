<template>
  <div
    class="tw-mb-7 tw-w-full tw-max-w-[26rem] tw-rounded-lg tw-border-2 tw-bg-white tw-p-11 tw-shadow-md"
  >
    <div class="tw-mb-3 tw-aspect-square tw-h-14">
      <v-img :src="props.message.svg"></v-img>
    </div>
    <div class="tw-mb-3 tw-text-2xl tw-font-bold tw-text-[#020A47]">
      {{ props.message.title }}
    </div>
    <div class="tw-mb-3 tw-text-base">{{ props.message.subtitle }}</div>
  </div>
</template>

<script setup lang="ts">
import type { card } from "~/styles/ProvenPerformance"

interface Props {
  message: card
}

const props = defineProps<Props>()
</script>

<style scoped></style>
