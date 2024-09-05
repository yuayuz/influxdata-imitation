<template>
  <div class="rise-container-slightly tw-px-4 tw-py-10 md:tw-hidden">
    <div class="tw-py-6 tw-text-3xl tw-font-bold">
      {{ message.title }}
    </div>
    <div class="tw-pb-4">
      <div class="tw-mb-4">
        <div class="tw-text-base">
          {{ message.message }}
        </div>
        <div class="tw-text-base">— {{ message.author }}</div>
      </div>
      <div class="tw-flex tw-items-center">
        <div class="tw-relative tw-border-[#020A47] tw-text-lg tw-font-bold">
          <div class="gr-underline">{{ message.buttonTitle }}</div>
        </div>
        <v-icon class="tw-ml-2 tw-text-[#AD1FD1]" icon="mdi-arrow-right" />
      </div>
    </div>
    <div class="tw-py-4">
      <div class="tw-flex">
        <div v-for="n in images.length / 2" :key="n" class="tw-w-1/3">
          <div class="tw-mx-auto tw-w-3/4">
            <v-img :src="images[n - 1]" />
          </div>
        </div>
      </div>
      <div class="tw-flex">
        <div
          v-for="n in images.length / 2"
          :key="n + images.length / 2"
          class="tw-w-1/3"
        >
          <div class="tw-mx-auto tw-w-3/4">
            <v-img :src="images[n + images.length / 2 - 1]" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rise-container-slightly tw-hidden tw-px-4 tw-py-20 md:tw-block">
    <div class="tw-mx-auto tw-max-w-screen-xl">
      <div class="tw-py-6 tw-text-center tw-text-5xl tw-font-bold">
        {{ message.title }}
      </div>
      <div class="tw-pb-4">
        <div class="tw-mb-4">
          <div class="tw-text-center tw-text-base">
            {{ message.message }}
          </div>
          <div class="tw-text-center tw-text-base">— {{ message.author }}</div>
        </div>
        <div class="tw-flex tw-items-center tw-justify-center">
          <div class="tw-relative tw-border-[#020A47] tw-text-lg tw-font-bold">
            <div class="gr-underline">{{ message.buttonTitle }}</div>
          </div>
          <v-icon class="tw-ml-2 tw-text-[#AD1FD1]" icon="mdi-arrow-right" />
        </div>
      </div>
      <div class="tw-flex tw-py-8">
        <div v-for="n in images.length" :key="n" class="tw-w-1/6">
          <div class="tw-mx-auto tw-w-3/4">
            <v-img :src="images[n - 1]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TimeSeriesIntelligence_UsersMostLikelyToRecommend from "@/public/leaderComponent/TimeSeriesIntelligence_UsersMostLikelyToRecommend_Nps.svg"
import TimeSeriesDatabases_Leader from "@/public/leaderComponent/TimeSeriesDatabases_Leader_Leader.svg"
import TimeSeriesDatabases_MomentumLeader from "@/public/leaderComponent/TimeSeriesDatabases_MomentumLeader_Leader.svg"
import TimeSeriesIntelligence_Market_Leader from "@/public/leaderComponent/TimeSeriesIntelligence_Leader_Mid-Market_Leader.svg"
import TimeSeriesDatabases_BestUsability_first from "@/public/leaderComponent/TimeSeriesDatabases_BestUsability_Total.svg"
import TimeSeriesDatabases_BestUsability_second from "@/public/leaderComponent/TimeSeriesDatabases_BestUsability_Total.svg"
import type { componentMessage } from "~/styles/leaderComponent"

const images = [
  TimeSeriesIntelligence_UsersMostLikelyToRecommend,
  TimeSeriesDatabases_Leader,
  TimeSeriesDatabases_MomentumLeader,
  TimeSeriesIntelligence_Market_Leader,
  TimeSeriesDatabases_BestUsability_first,
  TimeSeriesDatabases_BestUsability_second,
]

const message: componentMessage = {
  title: "InfluxDB is a G2 Leader in Time Series",
  message:
    "“InfluxDB is a strong database built specifically for time series data. It has made working with such data seamless and easy.”",
  author: "Verified G2 reviewer",
  buttonTitle: "Read reviews",
}
</script>

<style scoped>
@import "@/stylus/main.css";
</style>
