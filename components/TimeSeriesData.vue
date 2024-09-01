<template>
  <div class="tw-hidden tw-h-[43rem] tw-pb-1 lg:tw-block">
    <div class="tw-h-[14rem] tw-bg-[#020a47] tw-px-12">
      <div class="tw-mx-auto tw-h-fit tw-max-w-screen-2xl">
        <div class="tw-flex tw-justify-center">
          <time-series-data-card-components
            v-for="n in cards.length"
            :key="n"
            :message="cards[n - 1]"
            v-model="activeCard"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="tw-relative tw-pb-1 lg:tw-hidden" style="height: 90vh">
    <div class="tw-h-[14rem] tw-bg-[#020a47] tw-px-12 tw-pb-1">
      <div class="tw-flex" style="height: 80vh">
        <v-carousel show-arrows="hover" hide-delimiters height="100%" cycle>
          <carousel-item
            v-for="n in cards.length"
            :key="n"
            :message="cards[n - 1]"
          />
        </v-carousel>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports"
import type { card } from "~/styles/timeSeriesData"
import real_time_analytics from "@/public/timeSeriesData/real_time_analytics.svg"
import telemetry from "@/public/timeSeriesData/telemetry.svg"
import data_historian from "@/public/timeSeriesData/data_historian.svg"
import machine_learning from "@/public/timeSeriesData/machine_learning.svg"
import CarouselItem from "~/components/timeSeriesData/carouselItem.vue"

const activeCard = ref("1")

const cards: card[] = [
  {
    id: "1",
    color: "#9B2AFF",
    title: "Real-Time Analytics",
    message:
      "Query data immediately upon arrival for real-time insights across systems and applications",
    svg: real_time_analytics,
  },
  {
    id: "2",
    color: "#D30971",
    title: "Network and Device Telemetry",
    message:
      "Monitor and control devices and sensors in IoT, network, and field deployments.",
    svg: telemetry,
  },
  {
    id: "3",
    color: "#5EE4E4",
    title: "Modern Data Historian",
    message:
      "Unleash and transform on-site industrial OT data in the manufacturing plant and on the factory floor.",
    svg: data_historian,
  },
  {
    id: "4",
    color: "#D6F622",
    title: "Machine Learning and AI",
    message:
      "Share real-time data with open ML/AI tools to create predictive analytics for automated, intelligent applications and systems.",
    svg: machine_learning,
  },
]
</script>

<style scoped></style>
