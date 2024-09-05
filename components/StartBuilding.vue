<template>
  <div class="startBuildingBackground tw-px-6 tw-pb-12 tw-pt-1 md:tw-hidden">
    <div
      class="startBuildingCardBackground rise-container-slightly tw-mx-auto tw-max-w-screen-xl tw-rounded-3xl tw-px-5 tw-py-10"
    >
      <div class="tw-mx-auto tw-max-w-max">
        <div class="tw-text-3xl tw-font-bold tw-text-white">
          {{ message.title }}
        </div>
        <div class="tw-mb-4 tw-pb-6 tw-text-base tw-text-white">
          {{ message.message }}
        </div>
        <div class="tw-space-y-10">
          <start-building-button-component :title="message.buttonTitle" />
          <start-building-text-button :title="message.textButton" />
        </div>
      </div>
    </div>
  </div>

  <div
    class="startBuildingBackground tw-hidden tw-px-12 tw-pb-12 tw-pt-1 md:tw-block"
  >
    <div
      class="startBuildingCardBackground rise-container-slightly tw-mx-auto tw-max-w-screen-xl tw-rounded-3xl tw-px-14 tw-py-20"
    >
      <div class="tw-mx-auto tw-max-w-max">
        <div class="tw-text-center tw-text-5xl tw-font-bold tw-text-white">
          {{ message.title }}
        </div>
        <div
          class="tw-mx-auto tw-mb-4 tw-w-2/3 tw-pb-6 tw-text-center tw-text-base tw-text-white"
        >
          {{ message.message }}
        </div>
        <div class="tw-flex tw-items-center tw-justify-evenly">
          <start-building-button-component :title="message.buttonTitle" />
          <start-building-text-button :title="message.textButton" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { startBuilding } from "~/styles/startBuilding"

const message: startBuilding = {
  title: "Start building now",
  message:
    "Get started in minutes for free. Upgrade anytime to get $250 in credit for your project.",
  buttonTitle: "Get InfluxDB",
  textButton: "Find the right product",
}
</script>

<style scoped>
@import "@/stylus/main.css";
</style>
