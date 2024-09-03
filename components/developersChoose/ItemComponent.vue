<template>
  <div class="tw-p-3">
    <div class="tw-mb-4 tw-text-5xl tw-font-black tw-text-[#020A47]">
      {{ props.card.title }}
    </div>
    <div class="tw-mb-4">
      <div class="tw-text-base tw-text-[#020A47]">
        {{ props.card.message }}
      </div>
      <div :hidden="!(props.card.id === '4')" class="tw-text-xs tw-opacity-50">
        {{ props.card.subMessage }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { item } from "~/styles/ItemComponent"

interface Props {
  card: item
}

const props = defineProps<Props>()
</script>

<style scoped></style>
