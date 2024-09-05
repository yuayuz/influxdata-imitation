<template>
  <div class="tw-flex tw-h-full tw-justify-between">
    <v-card rounded="lg" class="tw-h-full tw-w-4/12">
      <div class="tw-h-full tw-space-y-10 tw-px-8 tw-py-14">
        <div class="tw-mb-4 tw-text-5xl tw-font-bold tw-text-[#020A47]">
          {{ props.item.cardTitle1 }}
        </div>
        <div
          class="tw-mb-4 tw-border-b tw-border-[#020A47] tw-border-opacity-30 tw-pb-2 tw-text-base tw-text-[#020A47]"
        >
          {{ props.item.cardMessage1 }}
        </div>
        <div class="tw-mb-4 tw-text-4xl tw-font-bold tw-text-[#020A47]">
          {{ props.item.cardTitle2 }}
        </div>
        <div
          class="tw-mb-4 tw-border-b tw-border-[#020A47] tw-border-opacity-30 tw-pb-2 tw-text-base tw-text-[#020A47]"
        >
          {{ props.item.cardMessage2 }}
        </div>
      </div>
    </v-card>
    <div class="tw-w-7/12 tw-content-center">
      <div class="tw-space-y-8">
        <div
          class="tw-mb-4 tw-mt-1 tw-border-[#020A47] tw-text-4xl tw-font-bold"
        >
          {{ props.item.message }}
        </div>
        <div class="tw-flex tw-items-center">
          <div class="tw-relative tw-border-[#020A47] tw-text-lg tw-font-bold">
            <div class="gr-underline">Read Case Study</div>
          </div>
          <v-icon class="tw-ml-2 tw-text-[#AD1FD1]" icon="mdi-arrow-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { card } from "~/styles/loveAndTrust"

interface Props {
  item: card
}

const props = defineProps<Props>()
</script>

<style scoped>
@import "@/stylus/main.css";
</style>
