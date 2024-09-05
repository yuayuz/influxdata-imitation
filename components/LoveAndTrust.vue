<template>
  <div class="tw-rounded-br-[5rem] tw-bg-[#020A47] tw-px-4 tw-pb-20 tw-pt-12">
    <div class="tw-mx-auto tw-max-w-screen-xl tw-pt-12">
      <div
        class="tw-mx-auto tw-w-3/5 tw-pb-20 tw-pt-12 tw-text-center tw-text-5xl tw-font-bold tw-text-white"
      >
        Loved by developers, trusted by enterprises
      </div>
      <v-card rounded="lg">
        <v-tabs v-model="activeItem" grow height="117" class="tw-shadow">
          <v-tab
            v-for="n in items.length"
            :key="n"
            :value="items[n - 1].name"
            slider-color="#C41297"
            class="tw-relative"
          >
            <v-img :src="items[n - 1].img" absolute />
          </v-tab>
        </v-tabs>
        <v-tabs-window v-model="activeItem">
          <v-tabs-window-item
            :value="items[0].name"
            class="tw-h-[34rem] tw-bg-[#F2F4F6] tw-p-12"
          >
            <love-and-trust-card-component :item="cardWindows[items[0].name]" />
          </v-tabs-window-item>
          <v-tabs-window-item
            :value="items[1].name"
            class="tw-h-[34rem] tw-bg-[#F2F4F6] tw-p-12"
          >
            <love-and-trust-common-component
              :item="commonWindows[items[1].name]"
            />
          </v-tabs-window-item>
          <v-tabs-window-item
            :value="items[2].name"
            class="tw-h-[34rem] tw-bg-[#F2F4F6] tw-p-12"
          >
            <love-and-trust-card-component :item="cardWindows[items[2].name]" />
          </v-tabs-window-item>
          <v-tabs-window-item
            :value="items[3].name"
            class="tw-h-[34rem] tw-bg-[#F2F4F6] tw-p-12"
          >
            <love-and-trust-common-component
              :item="commonWindows[items[3].name]"
            />
          </v-tabs-window-item>
          <v-tabs-window-item
            :value="items[4].name"
            class="tw-h-[34rem] tw-bg-[#F2F4F6] tw-p-12"
          >
            <love-and-trust-common-component
              :item="commonWindows[items[4].name]"
            />
          </v-tabs-window-item>
          <v-tabs-window-item
            :value="items[5].name"
            class="tw-h-[34rem] tw-bg-[#F2F4F6] tw-p-12"
          >
            <love-and-trust-card-component :item="cardWindows[items[5].name]" />
          </v-tabs-window-item>
          <v-tabs-window-item
            :value="items[6].name"
            class="tw-h-[34rem] tw-bg-[#F2F4F6] tw-p-12"
          >
            <love-and-trust-common-component
              :item="commonWindows[items[6].name]"
            />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports"
import loft_Orbital from "@/public/loveAndTrust/Loft_Orbital_logo.jpg"
import capital from "@/public/loveAndTrust/Capital_One_logo_2.png"
import terega from "@/public/loveAndTrust/terega_logo.png"
import volvo from "@/public/loveAndTrust/Volvo_logo.jpg"
import wow from "@/public/loveAndTrust/WOW_logo.jpg"
import majik_systems from "@/public/loveAndTrust/majik_systems_logo.jpg"
import juniz from "@/public/loveAndTrust/juniz_logo.svg"
import type { card, common, tab } from "~/styles/loveAndTrust"

const activeItem = ref()
const items: tab[] = [
  {
    name: "loft_Orbital",
    img: loft_Orbital,
  },
  {
    name: "capital",
    img: capital,
  },
  {
    name: "terega",
    img: terega,
  },
  {
    name: "volvo",
    img: volvo,
  },
  {
    name: "wow",
    img: wow,
  },
  {
    name: "majik_systems",
    img: majik_systems,
  },
  {
    name: "juniz",
    img: juniz,
  },
]
const cardWindows: Record<string, card> = {
  loft_Orbital: {
    message:
      "Space Made Simple: How Loft Orbital Delivers Unparalleled Speed-to-Space with InfluxDB Cloud",
    cardTitle1: "500M+",
    cardMessage1: "Metrics collected daily",
    cardTitle2: "Mission-critical monitoring",
    cardMessage2: "Real-time data access for query",
  },
  terega: {
    message: "Teréga Replaced Its Legacy Data Historian with InfluxDB",
    cardTitle1: "50%",
    cardMessage1: "lower total cost of ownership",
    cardTitle2: "100K",
    cardMessage2: "real-time metrics with simplified deployment",
  },
  majik_systems: {
    message:
      "From Reactive to Proactive: How MAJiK Systems Embraced Predictive Maintenance with InfluxDB and Time Series Data",
    cardTitle1: "45%",
    cardMessage1: "Less equipment downtime",
    cardTitle2: "10%",
    cardMessage2: "Reduced waste",
  },
}
const commonWindows: Record<string, common> = {
  capital: {
    message:
      '"InfluxDB is a high-speed read and write database. The data is written in real-time, you can read it in real-time, and while reading, you can apply your machine learning model. So, in real-time, you can forecast and detect anomalies."',
    author: "Rajeev Tomer",
    jobPosition: "Sr. Manager of Data Engineering",
  },
  volvo: {
    message:
      "“We decided, from a monitoring perspective, that we are... going with a best of breed setup. So, we put the best tools in place, like InfluxDB for metrics monitoring.”",

    author: "Daniel Putz",

    jobPosition: "DevOps Enablement",
  },
  wow: {
    message:
      '"I was blown away with how easy it was to install and configure InfluxDB. The clustering was easy. The documentation was great, and the support has been second to none."',
    author: "Dylan Shorter",
    jobPosition: "Engineer III, Software and Product Integration Engineering",
  },
  juniz: {
    message:
      "“With InfluxDB Cloud Dedicated, the great thing is that we don't need to think about data storage costs or usage anymore because data storage gets way cheaper.”",
    author: "Ricardo Kissinger",
    jobPosition: "Head of IT Infrastructure and IT Security",
  },
}
</script>

<style scoped></style>
