<template>
  <div class="tw-p-3">
    <div class="tw-mb-4 tw-text-lg tw-font-black">
      {{ props.message.title }}
    </div>
    <div
      class="tw-text-base tw-opacity-80 hover:tw-text-[#9B2AFF]"
      v-for="n in props.message.li.length"
      :key="n"
    >
      {{ props.message.li[n - 1] }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { footerList } from "~/styles/footerComponent"

interface Props {
  message: footerList
}

const props = defineProps<Props>()
</script>

<style scoped></style>
