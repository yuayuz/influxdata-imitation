<template>
  <div class="tw-border-b-2 tw-pb-10" :class="props.isOne ? '' : 'tw-pt-10'">
    <div class="tw-mb-4 tw-text-4xl tw-text-[#020A47]">
      {{ props.message.title }}
    </div>
    <div class="tw-mb-1 tw-text-base">
      {{ props.message.subtitle }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { item } from "~/styles/openSource"

interface Props {
  message: item
  isOne: boolean
}

const props = defineProps<Props>()
</script>

<style scoped></style>
