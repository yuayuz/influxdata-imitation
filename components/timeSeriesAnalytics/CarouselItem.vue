<template>
  <v-carousel-item>
    <div class="tw-flex">
      <div
        class="tw-flex tw-w-1/2 tw-items-center tw-rounded-l-[1rem] tw-bg-white tw-p-12"
      >
        <div>
          <div class="tw-text-3xl tw-font-black tw-text-[#020A47]">
            {{ props.card.title }}
          </div>
          <div class="tw-mb-4 tw-text-base tw-text-black">
            {{ props.card.message }}
          </div>
          <div class="tw-flex">
            <div class="tw-relative tw-text-lg tw-font-bold">
              <div class="gr-underline tw-text-black">Learn More</div>
            </div>
            <v-icon class="tw-ml-2 tw-text-[#AD1FD1]" icon="mdi-arrow-right" />
          </div>
        </div>
      </div>
      <div class="tw-w-1/2">
        <v-img :src="props.card.img" class="tw-rounded-r-[1rem]"></v-img>
      </div>
    </div>
  </v-carousel-item>
</template>

<script setup lang="ts">
import type { cardMessage } from "~/styles/timeSeriesAnalytics"

interface Props {
  card: cardMessage
}

const props = defineProps<Props>()
</script>

<style scoped>
@import "@/stylus/main.css";
</style>
