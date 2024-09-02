<template>
  <div class="tw-px-4 tw-py-12 lg:tw-hidden">
    <div
      class="rise-container tw-pb-12 tw-text-5xl tw-font-bold tw-text-[#020A47]"
    >
      Purpose-built for real-time with proven performance at scale
    </div>
    <div class="rise-container tw-mx-auto tw-flex tw-w-fit tw-space-x-5">
      <proven-performance-card-component
        v-for="n in 2"
        :key="n"
        :message="message[n - 1]"
      />
    </div>
    <div class="rise-container tw-mx-auto tw-flex tw-w-fit tw-space-x-5">
      <proven-performance-card-component
        v-for="n in 2"
        :key="n"
        :message="message[n + 1]"
      />
    </div>
    <div class="rise-container tw-mx-auto tw-flex tw-w-fit tw-space-x-5">
      <proven-performance-card-component
        v-for="n in 2"
        :key="n"
        :message="message[n + 3]"
      />
    </div>
  </div>

  <div class="tw-hidden tw-px-4 tw-py-12 lg:tw-block">
    <div class="tw-mx-auto tw-max-w-screen-2xl">
      <div class="tw-mx-20 tw-max-w-screen-2xl">
        <div
          class="rise-container tw-max-w-2/3 tw-mx-auto tw-pb-12 tw-text-center tw-text-6xl tw-font-bold tw-text-[#020A47]"
        >
          Purpose-built for real-time with proven performance at scale
        </div>
        <div class="rise-container tw-mx-auto tw-flex tw-w-fit tw-space-x-10">
          <proven-performance-card-component
            v-for="n in 3"
            :key="n"
            :message="message[n - 1]"
          />
        </div>
        <div class="rise-container tw-mx-auto tw-flex tw-w-fit tw-space-x-10">
          <proven-performance-card-component
            v-for="n in 3"
            :key="n"
            :message="message[n + 2]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { card } from "~/styles/ProvenPerformance"
import icon_pie_chart from "@/public/provenPerfornance/icon_pie_chart.svg"
import icon_sheets from "@/public/provenPerfornance/icon_sheets.svg"
import icon_sql from "@/public/provenPerfornance/icon_sql.svg"
import icon_journey from "@/public/navBar/icon_journey.svg"
import icon_infinite from "@/public/provenPerfornance/icon_infinite.svg"
import icon_cabinet from "@/public/provenPerfornance/icon_cabinet.svg"

const message: card[] = [
  {
    svg: icon_pie_chart,
    title: "Single Datastore",
    subtitle:
      "Run analytics across multiple workload types with a single purpose-built platform.",
  },
  {
    svg: icon_sheets,
    title: "Columnar Design",
    subtitle:
      "Scales without limits with built-in storage and query performance optimization.",
  },
  {
    svg: icon_sql,
    title: "Native SQL",
    subtitle: "Query directly with InfluxDB using standard SQL.",
  },
  {
    svg: icon_journey,
    title: "Real-Time Query",
    subtitle: "Sub-second query response on leading-edge data.",
  },
  {
    svg: icon_infinite,
    title: "Unlimited Cardinality",
    subtitle:
      "Analyze billions of time series data points per second without limitations or caps.",
  },
  {
    svg: icon_cabinet,
    title: "Superior Data Compression",
    subtitle:
      "Maximize data compression to store more data at a fraction of the cost.",
  },
]
</script>

<style scoped>
@import "@/stylus/main.css";
</style>
