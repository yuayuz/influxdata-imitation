<template>
  <div
    class="rise-container-slightly tw-rounded-l-[5rem] tw-bg-[#020A47] tw-px-6 tw-py-12 md:tw-hidden"
  >
    <div class="tw-pt-12">
      <div class="tw-py-2 tw-text-4xl tw-tracking-tight tw-text-white">
        {{ header.title }}
      </div>
      <div class="tw-text-base tw-tracking-normal tw-text-white">
        {{ header.message }}
      </div>
    </div>
    <div class="tw-py-12">
      <div class="tw-relative">
        <div class="divider tw-pt-8">
          <v-carousel cycle hide-delimiters show-arrows="hover" height="815">
            <time-series-analytics-md-carousel
              v-for="n in items.length"
              :key="n"
              :card="items[n - 1]"
            />
          </v-carousel>
        </div>
      </div>
    </div>
  </div>

  <div
    class="rise-container-slightly tw-hidden tw-rounded-l-[5rem] tw-bg-[#020A47] tw-p-12 md:tw-block lg:tw-hidden"
  >
    <div class="tw-pt-12">
      <div class="tw-mb-4 tw-text-base tw-text-white">
        {{ header.subheader }}
      </div>
      <div class="tw-py-2 tw-text-5xl tw-tracking-tight tw-text-white">
        {{ header.title }}
      </div>
      <div
        class="tw-mx-auto tw-w-3/4 tw-text-center tw-text-base tw-text-white"
      >
        {{ header.message }}
      </div>
    </div>
    <div class="tw-py-12">
      <div class="tw-relative">
        <div class="divider tw-pt-8">
          <v-carousel cycle hide-delimiters show-arrows="hover" height="391.5">
            <time-series-analytics-carousel-item
              v-for="n in items.length"
              :key="n"
              :card="items[n - 1]"
            />
          </v-carousel>
        </div>
      </div>
    </div>
  </div>

  <div
    class="rise-container-slightly tw-hidden tw-rounded-l-[5rem] tw-bg-[#020A47] tw-p-12 lg:tw-block"
  >
    <div class="tw-mx-auto tw-max-w-screen-xl">
      <div class="tw-pt-12">
        <div class="tw-mb-4 tw-text-center tw-text-white">
          {{ header.subheader }}
        </div>
        <div
          class="tw-py-2 tw-text-center tw-text-5xl tw-font-black tw-text-white"
        >
          {{ header.title }}
        </div>
        <div
          class="tw-mx-auto tw-w-1/2 tw-text-center tw-text-base tw-text-white"
        >
          {{ header.message }}
        </div>
      </div>
      <div class="tw-py-20 tw-text-white">
        <div class="tw-flex tw-items-center">
          <div class="tw-relative tw-h-fit tw-w-1/5">
            <div class="group-l">
              <time-series-analytics-button-components
                v-for="n in buttons.length"
                :key="n"
                v-model="activeItemId"
                :button="buttons[n - 1]"
              />
            </div>
          </div>
          <div class="tw-w-4/5">
            <time-series-analytics-card-item
              :model-value="activeItemId"
              :card="items[parseInt(activeItemId)]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { buttonMessage, cardMessage } from "~/styles/timeSeriesAnalytics"
import { ref } from "#imports"
import manufacturing_0b7b2006 from "@/public/timeSeriseAnalytics/manufacturing_0b7b2006.jpeg"
import energy_89ec32f3 from "@/public/timeSeriseAnalytics/energy_89ec32f3.webp"
import telecom_8d67f0ea from "@/public/timeSeriseAnalytics/telecom_8d67f0ea.jpeg"
import consumer_iot_e9f53f30 from "@/public/timeSeriseAnalytics/consumer_iot_e9f53f30.jpeg"
import industrial_iot_c014dcbc from "@/public/timeSeriseAnalytics/industrial_iot_c014dcbc.jpeg"
import aerospace_0d74774f from "@/public/timeSeriseAnalytics/aerospace_0d74774f.jpeg"

const buttons: buttonMessage[] = [
  {
    id: "0",
    title: "Manufacturing",
  },
  {
    id: "1",
    title: "Energy and Utilities",
  },
  {
    id: "2",
    title: "Telecommunications",
  },
  {
    id: "3",
    title: "Consumer IoT",
  },
  {
    id: "4",
    title: "Industrial IoT",
  },
  {
    id: "5",
    title: "Aerospace",
  },
]

const items: cardMessage[] = [
  {
    id: "0",
    img: manufacturing_0b7b2006,
    title: "Manufacturing",
    message:
      "Analyze production data streams in real time to identify bottlenecks, prevent downtime, and power predictive maintenance for your industrial equipment.",
  },
  {
    id: "1",
    img: energy_89ec32f3,
    title: "Energy and Utilities",
    message:
      "Monitor, optimize, and manage renewable energy and traditional power systems to achieve smart grid balancing and optimization. Forecast and predict maintenance needs for renewable energy sources, such as wind turbines and solar farms.",
  },
  {
    id: "2",
    img: telecom_8d67f0ea,
    title: "Telecommunications",
    message:
      "Analyze network performance and usage patterns in telecommunication infrastructure. Improve quality of service, optimize infrastructure resources, and reduce operational costs.",
  },
  {
    id: "3",
    img: consumer_iot_e9f53f30,
    title: "Consumer IoT",
    message:
      "Use real-time monitoring and analytics to optimize energy consumption and improve quality of life.",
  },
  {
    id: "4",
    img: industrial_iot_c014dcbc,
    title: "Industrial IoT",
    message:
      "Optimize operational processes with real-time insights from industrial equipment and sensors.",
  },
  {
    id: "5",
    img: aerospace_0d74774f,
    title: "Aerospace",
    message:
      "Get real-time insights from satellites, networks, and every stage of the launch operation process. Reduce errors and accelerate time to market in this mission-critical space.",
  },
]

const header = {
  subheader: "INDUSTRIES",
  title: "Time series analytics for every industry",
  message:
    "Today, InfluxDB deployments span multiple industries, with customers running at scale in any environment—public and private cloud, on-premises, and at the edge.",
}

const activeItemId = ref("0")
</script>

<style scoped>
@import "@/stylus/main.css";
</style>
