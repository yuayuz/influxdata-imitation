<template>
  <div class="tw-bg-[#020a47] tw-p-6 md:tw-hidden">
    <div class="tw-border-t-2 tw-border-[#676C91] tw-py-1">
      <div class="tw-py-12">
        <v-img :src="influxdata" class="tw-w-1/2" />
      </div>
    </div>
    <div class="tw-py-1 tw-text-white">
      <footer-component-footer-list
        v-for="n in footerLists.length"
        :key="n"
        :message="footerLists[n - 1]"
      />
      <footer-component-sign-up class="tw-w-2/3" />
    </div>
    <div class="tw-border-b-2 tw-border-[#676C91] tw-pb-5 tw-pt-12">
      <div class="tw-w-3/4 tw-p-3">
        <div class="tw-mb-4 tw-text-base tw-text-white">
          <div>548 Market St, PMB 77953</div>
          <div>San Francisco, California 94104</div>
        </div>
      </div>
      <div class="tw-w-1/4 tw-p-3">
        <div class="tw-mb-4 tw-text-lg tw-font-bold tw-text-white">
          Follow Us
        </div>
        <div class="tw-flex tw-space-x-3">
          <div v-for="n in logos.length" :key="n">
            <v-img :src="logos[n - 1]" height="28" width="28" />
          </div>
        </div>
      </div>
    </div>
    <div class="tw-justify-between tw-pt-6">
      <div class="tw-mb-4 tw-text-base tw-text-white">
        © 2024 InfluxData Inc. All Rights Reserved.
      </div>
      <div class="tw-flex tw-space-x-6 tw-text-white">
        <div
          v-for="n in footerTextButtons.length"
          :key="n"
          class="tw-text-base tw-opacity-80 hover:tw-text-[#9B2AFF]"
        >
          {{ footerTextButtons[n - 1] }}
        </div>
      </div>
    </div>
  </div>

  <div class="tw-hidden tw-bg-[#020a47] tw-p-6 md:tw-block">
    <div class="tw-mx-auto tw-max-w-screen-xl">
      <div class="tw-border-t-2 tw-border-[#676C91] tw-py-1">
        <div class="tw-py-12">
          <v-img :src="influxdata" class="tw-w-1/5" />
        </div>
      </div>
      <div class="tw-grid tw-grid-cols-4 tw-py-1 tw-text-white">
        <footer-component-footer-list
          v-for="n in footerLists.length"
          :key="n"
          :message="footerLists[n - 1]"
        />
        <footer-component-sign-up />
      </div>
      <div class="tw-flex tw-border-b-2 tw-border-[#676C91] tw-pb-5 tw-pt-12">
        <div class="tw-w-3/4 tw-p-3">
          <div class="tw-mb-4 tw-text-base tw-text-white">
            <div>548 Market St, PMB 77953</div>
            <div>San Francisco, California 94104</div>
          </div>
        </div>
        <div class="tw-w-1/4 tw-p-3">
          <div class="tw-mb-4 tw-text-lg tw-font-bold tw-text-white">
            Follow Us
          </div>
          <div class="tw-flex tw-space-x-3">
            <div v-for="n in logos.length" :key="n">
              <v-img :src="logos[n - 1]" height="28" width="28" />
            </div>
          </div>
        </div>
      </div>
      <div class="tw-flex tw-justify-between tw-pt-6">
        <div class="tw-mb-4 tw-text-base tw-text-white">
          © 2024 InfluxData Inc. All Rights Reserved.
        </div>
        <div class="tw-flex tw-space-x-6 tw-text-white">
          <div
            v-for="n in footerTextButtons.length"
            :key="n"
            class="tw-text-base tw-opacity-80 hover:tw-text-[#9B2AFF]"
          >
            {{ footerTextButtons[n - 1] }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import influxdata from "@/public/influxdata_full_white-f14e8966.svg"
import type { footerList } from "~/styles/footerComponent"
import twitter from "@/public/footer/twitter.png"
import linkedin from "@/public/footer/linkedin.png"
import github from "@/public/footer/github.png"
import slack from "@/public/footer/slack.png"

const footerLists: footerList[] = [
  {
    title: "Product & Solutions",
    li: [
      "InfluxDB",
      "InfluxDB Cloud Serverless",
      "InfluxDB Cloud Dedicated",
      "InfluxDB Clustered",
      "InfluxDB Comparison",
      "Integrations",
      "Data Lake / Warehouse",
      "Data Collector",
      "Pricing",
      "Use Cases",
      "Time Series Data",
      "Time Series Database",
      "Time Series Forecasting",
      "Data Warehousing",
      "Network Monitoring",
    ],
  },
  {
    title: "Developers",
    li: [
      "Guides",
      "Blog",
      "Customers",
      "Support",
      "Webinars",
      "Documentation",
      "Events & Live Training",
      "InfluxDB University",
      "Community",
      "InfluxDB OSS",
      "Telegraf",
      "AWS",
      "Product Integrations",
      "Glossary",
    ],
  },
  {
    title: "Company",
    li: ["About", "Careers", "Partners", "Newsroom", "Contact Us", "Customers"],
  },
]

const logos: string[] = [twitter, linkedin, github, slack]
const footerTextButtons: string[] = [
  "Legal",
  "Security",
  "Cookie Policy",
  "Comparison",
]
</script>

<style scoped></style>
