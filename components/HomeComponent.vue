<template>
  <div class="tw-bg-[#020a47] tw-px-12 tw-pb-1 tw-pt-6">
    <div class="tw-mx-auto tw-max-w-screen-2xl tw-py-14">
      <div class="tw-mx-20 tw-max-w-screen-2xl">
        <div class="tw-text-7xl tw-font-black tw-text-white">
          Every
          <span class="tw-text-[#5EE4E4]">{{ currentTime() }}</span> counts.
        </div>
        <div class="tw-pb-2 tw-text-3xl tw-font-normal tw-text-white">
          Analyze a billion series at a fraction of the cost.
        </div>
        <div class="tw-mb-3.5 tw-pb-6 tw-text-3xl tw-font-normal tw-text-white">
          InfluxDB is the platform for time series data.
        </div>
        <div class="tw-flex tw-items-center">
          <div class="tw-relative tw-text-lg tw-text-white">
            <div class="gr-underline">Get started with InfluxDB</div>
          </div>
          <v-icon class="tw-ml-2 tw-text-[#AD1FD1]" icon="mdi-arrow-right" />
        </div>
      </div>
    </div>
    <div class="tw-mx-auto tw-max-w-screen-2xl tw-py-14">
      <div class="tw-relative tw-mx-20 tw-max-w-screen-2xl tw-overflow-hidden">
        <div class="scroll-container tw-flex tw-h-32">
          <div
            v-for="n in brands.length"
            :key="n"
            class="tw-h-28 tw-w-full tw-px-8"
          >
            <!-- filter: brightness(0) invert(100%) 亮度为0 反转颜色 -->
            <v-img
              :src="brands[n - 1]"
              height="108"
              width="108"
              class="scroll-image"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="tw-mx-auto tw-max-w-screen-2xl">
      <div class="tw-mx-20 tw-max-w-screen-2xl tw-pb-8 tw-text-center">
        <div class="tw-text-3xl tw-font-black tw-text-white">
          Time series data for every workload
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "#imports"
import accenture_logo from "@/public/brand/accenture_logo.png"
import citrix_logo_new from "@/public/brand/citrix_logo_new.png"
import Honeywell_logo from "@/public/brand/Honeywell_logo.png"
import ibm_logo from "@/public/brand/ibm_logo.png"
import informatioa_logo from "@/public/brand/informatioa_logo.png"
import juniz_logo from "@/public/brand/juniz_logo.svg"
import man_logo from "@/public/brand/man_logo.png"
import nvidia_logo from "@/public/brand/nvidia_logo.png"
import ptc_logo from "@/public/brand/ptc_logo.png"
import siemence_logo from "@/public/brand/siemence_logo.png"
import tesla_logo from "@/public/brand/tesla_logo.png"
import ThermoFisher_logo from "@/public/brand/ThermoFisher_logo.png"

const time = ["hour", "minute", "second", "millisecond", "nanosecond"]
const num = ref(0)
const updateTime = () => {
  num.value = (num.value + 1) % time.length
}

onMounted(() => {
  setInterval(updateTime, 1500)
})
const currentTime = () => time[num.value]

const brands = [
  accenture_logo,
  citrix_logo_new,
  Honeywell_logo,
  ibm_logo,
  informatioa_logo,
  juniz_logo,
  man_logo,
  nvidia_logo,
  ptc_logo,
  siemence_logo,
  tesla_logo,
  ThermoFisher_logo,
  accenture_logo,
  citrix_logo_new,
  Honeywell_logo,
  ibm_logo,
  informatioa_logo,
  juniz_logo,
  man_logo,
  nvidia_logo,
  ptc_logo,
  siemence_logo,
  tesla_logo,
  ThermoFisher_logo,
]
</script>

<style scoped>
@import "@/stylus/main.css";
</style>
