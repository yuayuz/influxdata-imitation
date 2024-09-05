<template>
  <div class="tw-h-full tw-content-center">
    <div>
      <div
        class="tw-mb-4 tw-mt-1 tw-w-3/4 tw-text-4xl tw-font-black tw-text-[#020A47]"
      >
        {{ props.item.message }}
      </div>
      <div class="tw-py-6">
        <div class="tw-text-lg tw-font-bold tw-text-[#020A47]">
          {{ props.item.author }}
        </div>
        <div class="tw-mb-4">{{ props.item.jobPosition }}</div>
      </div>
      <div class="tw-flex tw-items-center">
        <div class="tw-relative tw-border-[#020A47] tw-text-lg tw-font-bold">
          <div class="gr-underline">Read Case Study</div>
        </div>
        <v-icon class="tw-ml-2 tw-text-[#AD1FD1]" icon="mdi-arrow-right" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { common } from "~/styles/loveAndTrust"

interface Props {
  item: common
}

const props = defineProps<Props>()
</script>

<style scoped>
@import "@/stylus/main.css";
</style>
