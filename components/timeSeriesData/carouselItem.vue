<template>
  <v-carousel-item>
    <div class="tw-flex tw-h-full tw-w-full tw-rounded-lg tw-border tw-shadow">
      <div
        class="tw-flex tw-h-full tw-w-3/5 tw-items-center tw-justify-center tw-rounded-l-lg tw-bg-white tw-px-12 tw-py-9"
      >
        <div>
          <div class="tw-mb-3 tw-text-2xl tw-font-bold tw-text-[#020A47]">
            {{ props.message.title }}
          </div>
          <div class="tw-mb-4 tw-text-base">
            {{ props.message.message }}
          </div>
          <div class="tw-flex">
            <div class="tw-relative tw-text-lg tw-font-bold">
              <div class="gr-underline">Learn More</div>
            </div>
            <v-icon class="tw-ml-2 tw-text-[#AD1FD1]" icon="mdi-arrow-right" />
          </div>
        </div>
      </div>
      <div
        :class="[
          'tw-flex tw-h-full tw-w-2/5 tw-items-center tw-justify-center tw-rounded-r-lg',
          `tw-bg-[${props.message.color}]`,
        ]"
      >
        <div class="tw-w-3/4">
          <v-img :src="props.message.svg" />
        </div>
      </div>
    </div>
  </v-carousel-item>
</template>

<script setup lang="ts">
import type { card } from "~/styles/timeSeriesData"

interface Props {
  message: card
}

const props = defineProps<Props>()
</script>

<style scoped>
@import "@/stylus/main.css";
</style>
