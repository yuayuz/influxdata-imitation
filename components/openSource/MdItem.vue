<template>
  <div
    class="tw-flex tw-border-b-2 tw-pb-6"
    :class="props.isOne ? '' : 'tw-pt-6'"
  >
    <div class="tw-mr-6 tw-aspect-square tw-h-14">
      <v-img :src="props.message.svg"></v-img>
    </div>
    <div>
      <div class="tw-mb-4 tw-text-2xl tw-text-[#020A47]">
        {{ props.message.title }}
      </div>
      <div class="tw-mb-1 tw-text-base tw-text-[#020A47]">
        {{ props.message.subtitle }}
      </div>
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
