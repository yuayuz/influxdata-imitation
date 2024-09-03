<template>
  <div class="tw-px-4 tw-py-12 md:tw-hidden">
    <div class="tw-py-10">
      <div class="rise-container-slightly tw-p-3">
        <div class="tw-text-5xl tw-font-bold tw-text-[#020A47]">
          {{ message.title }}
        </div>
        <div class="tw-mb-4 tw-text-base tw-text-[#020A47]">
          {{ message.message }}
        </div>
      </div>
      <div class="rise-container tw-p-3">
        <div class="rise-container">
          <div class="tw-text-8xl tw-font-black tw-text-[#020A47]">
            {{ items[0].title }}
          </div>
          <div class="tw-mb-4 tw-text-base tw-text-[#020A47]">
            {{ items[0].message }}
          </div>
        </div>
        <div
          class="rise-container tw-mb-3 tw-mt-12 tw-flex tw-justify-between tw-border-t tw-border-black tw-pt-6"
        >
          <developers-choose-item-component :card="items[1]" />
          <developers-choose-item-component :card="items[2]" />
        </div>
        <div
          class="rise-container tw-flex tw-justify-between tw-border-y tw-border-black tw-pt-6"
        >
          <developers-choose-item-component :card="items[3]" />
          <developers-choose-item-component :card="items[4]" />
        </div>
      </div>
    </div>
  </div>

  <div class="tw-hidden tw-p-12 md:tw-block">
    <div
      class="tw-mx-auto tw-flex tw-max-w-screen-xl tw-justify-between tw-py-20"
    >
      <div class="rise-container tw-w-5/12 tw-p-3">
        <div class="tw-text-6xl tw-font-bold tw-text-[#020A47]">
          {{ message.title }}
        </div>
        <div class="tw-mb-4 tw-text-base tw-text-[#020A47]">
          {{ message.message }}
        </div>
      </div>
      <div class="tw-w-5/12 tw-p-3">
        <div class="rise-container">
          <div class="tw-text-8xl tw-font-black tw-text-[#020A47]">
            {{ items[0].title }}
          </div>
          <div class="tw-mb-4 tw-text-base tw-text-[#020A47]">
            {{ items[0].message }}
          </div>
        </div>
        <div
          class="rise-container tw-mb-3 tw-mt-12 tw-flex tw-justify-between tw-border-t tw-border-black tw-pt-6"
        >
          <developers-choose-item-component :card="items[1]" />
          <developers-choose-item-component :card="items[2]" />
        </div>
        <div
          class="rise-container tw-flex tw-justify-between tw-border-y tw-border-black tw-pt-6"
        >
          <developers-choose-item-component :card="items[3]" />
          <developers-choose-item-component :card="items[4]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { item, title } from "~/styles/ItemComponent"

const items: item[] = [
  {
    id: "0",
    title: "1B+",
    message: "Downloads of InfluxDB via Docker",
    subMessage: "",
  },
  {
    id: "1",
    title: "900k+",
    message: "open source instances live today",
    subMessage: "",
  },
  {
    id: "2",
    title: "147K+",
    message: "Registered developers",
    subMessage: "",
  },
  {
    id: "3",
    title: "2,800+",
    message: "Contributors",
    subMessage: "",
  },
  {
    id: "4",
    title: "#1",
    message: "Time series database",
    subMessage: "Source: DB Engines",
  },
]

const message: title = {
  title: "Developers choose InfluxDB",
  message:
    "More downloads, more open source users, and a stronger community than any other time series database in the world.",
}
</script>

<style scoped>
@import "@/stylus/main.css";
</style>
