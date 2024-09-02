<template>
  <div class="tw-w-full tw-px-4 tw-py-12 md:tw-hidden">
    <div class="tw-p-3">
      <div class="tw-pb-6 tw-text-5xl tw-font-bold tw-text-[#020A47]">
        Committed to open source since day one
      </div>
      <div class="tw-w-4/5 tw-text-base tw-text-[#020A47]">
        Since the first availability of InfluxDB in 2012, InfluxData has stayed
        true to its open source roots—first as a distributor, then as a user,
        and now as a contributor.
      </div>
    </div>
    <div class="tw-p-3">
      <open-source-md-item
        class="rise-container"
        v-for="n in lists.length"
        :key="n"
        :is-one="n === 1"
        :message="lists[n - 1]"
      />
    </div>
  </div>

  <div class="tw-hidden tw-w-full tw-px-4 tw-py-12 md:tw-block lg:tw-hidden">
    <div class="tw-grid tw-grid-cols-2 tw-gap-5">
      <div>
        <div class="tw-pb-6 tw-text-5xl tw-font-bold tw-text-[#020A47]">
          Committed to open source since day one
        </div>
        <div class="tw-w-4/5 tw-text-base tw-text-[#020A47]">
          Since the first availability of InfluxDB in 2012, InfluxData has
          stayed true to its open source roots—first as a distributor, then as a
          user, and now as a contributor.
        </div>
      </div>
      <div class="tw-p-3">
        <open-source-md-item
          class="rise-container"
          v-for="n in lists.length"
          :key="n"
          :is-one="n === 1"
          :message="lists[n - 1]"
        />
      </div>
    </div>
  </div>

  <div class="tw-hidden tw-px-4 tw-py-12 lg:tw-block">
    <div class="tw-mx-auto tw-max-w-screen-2xl">
      <div class="tw-mx-20 tw-flex tw-max-w-screen-2xl tw-pb-20 tw-pt-12">
        <div class="tw-w-1/2">
          <div class="tw-pb-6 tw-text-6xl tw-font-bold tw-text-[#020A47]">
            Committed to open source since day one
          </div>
          <div class="tw-w-4/5 tw-text-base">
            Since the first availability of InfluxDB in 2012, InfluxData has
            stayed true to its open source roots—first as a distributor, then as
            a user, and now as a contributor.
          </div>
        </div>
        <div class="tw-w-1/2">
          <open-source-item-component
            v-for="n in lists.length"
            :key="n"
            :is-one="n === 1"
            :message="lists[n - 1]"
            class="rise-container"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { item } from "~/styles/openSource"
import arrow_icon from "@/public/openSource/arrow_icon.svg"
import icons_deviation from "@/public/openSource/icons_deviation.svg"
import icons_refresh from "@/public/openSource/icons_refresh.svg"

const lists: item[] = [
  {
    svg: arrow_icon,
    title: "Use",
    subtitle: "We build with open source components from the Arrow ecosystem.",
  },
  {
    svg: icons_deviation,
    title: "Distribute",
    subtitle:
      "We deliver open source software including InfluxDB, Telegraf, and surrounding tools.",
  },
  {
    svg: icons_refresh,
    title: "Contribute",
    subtitle:
      "We contribute upstream to open data tools, including FlightSQL and DataFusion.",
  },
]
</script>

<style scoped>
@import "@/stylus/main.css";
</style>
