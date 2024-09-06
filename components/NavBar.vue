<template>
  <div
    class="tw-sticky tw-top-0 tw-mx-auto tw-hidden tw-max-w-screen-2xl tw-bg-white lg:tw-block"
    style="z-index: 1"
  >
    <div class="tw-flex tw-h-14 tw-items-center tw-justify-center tw-px-12">
      <div class="tw-text-lg tw-text-[#020A47]">
        Meet with the InfluxDB technical team at IMTS Chicago, Sept 9-14.
      </div>
      <div class="tw-flex tw-text-lg">
        <div class="tw-underline tw-decoration-[#AD1FD1] tw-underline-offset-8">
          Get Details
        </div>
        <v-icon icon="mdi-arrow-right" color="#AD1FD1" />
      </div>
    </div>
  </div>

  <div
    class="tw-sticky tw-top-0 tw-hidden tw-w-full tw-bg-[#020a47] lg:tw-block dark:tw-bg-[#020a47]"
    style="z-index: 1"
  >
    <div
      class="tw-mx-auto tw-flex tw-h-[5.5rem] tw-max-w-screen-2xl tw-items-center tw-justify-around tw-px-12"
    >
      <div>
        <v-img :src="influxdata" width="180" height="30" />
      </div>
      <div class="tw-flex">
        <products-menu :menu="Products" />
        <use-cases-menu :menu="UseCases" />
        <developers-menu :menu="Developers" />
        <v-btn variant="text">
          <div class="tw-text-sm tw-text-white hover:tw-text-[#9394ff]">
            Pricing
          </div>
        </v-btn>
      </div>
      <div class="tw-flex tw-items-center tw-space-x-3">
        <v-btn variant="text">
          <div class="tw-text-sm tw-text-white hover:tw-text-[#9394ff]">
            Contact Us
          </div>
        </v-btn>
        <sign-in-menu :menu="signIn" />
        <v-btn
          class="buttonColor tw-text-sm tw-text-white"
          size="large"
          width="160"
          height="50"
          rounded="lg"
          >Start Now
        </v-btn>
        <v-icon icon="mdi-magnify" class="tw-text-white" />
      </div>
    </div>
  </div>

  <div
    class="tw-fixed tw-w-full tw-border tw-bg-[#020a47] tw-shadow lg:tw-hidden dark:tw-bg-[#020a47]"
    style="z-index: 1"
  >
    <div
      class="tw-mx-auto tw-flex tw-h-[4.5rem] tw-max-w-screen-2xl tw-items-center tw-justify-between tw-px-12"
    >
      <div>
        <v-img :src="influxdata" width="180" height="25" />
      </div>
      <div
        @click="onDrawer = !onDrawer"
        class="mainMenu tw-aspect-square tw-h-14 tw-text-4xl"
      >
        <v-icon
          :icon="onDrawer ? 'mdi-close' : 'mdi-menu'"
          class="tw-text-white"
        />
      </div>
    </div>
  </div>
  <main-menu v-model="onDrawer" />
</template>

<script setup lang="ts">
import influxdata from "@/public/influxdata_full_white-f14e8966.svg"
import type { navBarMenu, styleSignInMenu } from "~/styles/navBarMenu"
import ProductsMenu from "~/components/navBar/ProductsMenu.vue"
import UseCasesMenu from "~/components/navBar/UseCasesMenu.vue"
import DevelopersMenu from "~/components/navBar/DevelopersMenu.vue"
import SignInMenu from "~/components/navBar/SignInMenu.vue"
import MainMenu from "~/components/navBar/MainMenu.vue"

const Products: navBarMenu = {
  title: "products.title",
  subheader: "products.subheader",
  color: "#9B2AFF",
  lists: [
    {
      title: "products.managedByUs.title",
      subtitle: "products.managedByUs.subtitle",
      items: ["products.managedByUs.items[0]", "products.managedByUs.items[1]"],
    },
    {
      title: "products.managedByYou.title",
      subtitle: "products.managedByYou.subtitle",
      items: ["products.managedByYou.items[0]"],
    },
    {
      title: "products.Integrations&Collectors.title",
      subtitle: "products.Integrations&Collectors.subtitle",
      items: ["products.Integrations&Collectors.items[0]"],
    },
    {
      title: "products.OtherResources.title",
      subtitle: "products.OtherResources.subtitle",
      items: [
        "products.OtherResources.items[0]",
        "products.OtherResources.items[1]",
        "products.OtherResources.items[2]",
      ],
    },
  ],
}
const UseCases: navBarMenu = {
  title: "useCases.title",
  subheader: "useCases.subheader",
  color: "#5EE4E4",
  lists: [
    {
      title: "useCases.Real-TimeAnalytics.title",
      subtitle: "useCases.Real-TimeAnalytics.subtitle",
      items: [
        "useCases.Real-TimeAnalytics.items[0]",
        "useCases.Real-TimeAnalytics.items[1]",
        "useCases.Real-TimeAnalytics.items[2]",
        "useCases.Real-TimeAnalytics.items[3]",
        "useCases.Real-TimeAnalytics.items[4]",
      ],
    },
    {
      title: "useCases.Network&DeviceTelemetry.title",
      subtitle: "useCases.Network&DeviceTelemetry.subtitle",
      items: [
        "useCases.Network&DeviceTelemetry.items[0]",
        "useCases.Network&DeviceTelemetry.items[1]",
        "useCases.Network&DeviceTelemetry.items[2]",
      ],
    },
    {
      title: "useCases.ModernDataHistorian.title",
      subtitle: "useCases.ModernDataHistorian.subtitle",
      items: [
        "useCases.ModernDataHistorian.items[0]",
        "useCases.ModernDataHistorian.items[1]",
        "useCases.ModernDataHistorian.items[2]",
        "useCases.ModernDataHistorian.items[3]",
      ],
    },
    {
      title: "useCases.MachineLearning&AI.title",
      subtitle: "useCases.MachineLearning&AI.subtitle",
      items: [
        "useCases.MachineLearning&AI.items[0]",
        "useCases.MachineLearning&AI.items[1]",
      ],
    },
    {
      title: "useCases.Industries.title",
      subtitle: "useCases.Industries.subtitle",
      items: [
        "useCases.Industries.items[0]",
        "useCases.Industries.items[1]",
        "useCases.Industries.items[2]",
        "useCases.Industries.items[3]",
        "useCases.Industries.items[4]",
        "useCases.Industries.items[5]",
        "useCases.Industries.items[6]",
        "useCases.Industries.items[7]",
      ],
    },
  ],
}
const Developers: navBarMenu = {
  title: "developers.title",
  subheader: "developers.subheader",
  color: "#D30971",
  lists: [
    {
      title: "developers.Learn.title",
      subtitle: "developers.Learn.subtitle",
      items: [
        "developers.Learn.items[0]",
        "developers.Learn.items[1]",
        "developers.Learn.items[2]",
        "developers.Learn.items[3]",
        "developers.Learn.items[4]",
      ],
    },
    {
      title: "developers.Build.title",
      subtitle: "developers.Build.subtitle",
      items: [
        "developers.Build.items[0]",
        "developers.Build.items[1]",
        "developers.Build.items[2]",
        "developers.Build.items[3]",
        "developers.Build.items[4]",
      ],
    },
    {
      title: "developers.Connect.title",
      subtitle: "developers.Connect.subtitle",
      items: [
        "developers.Connect.items[0]",
        "developers.Connect.items[1]",
        "developers.Connect.items[2]",
      ],
    },
    {
      title: "developers.FeaturedResources.title",
      subtitle: "developers.FeaturedResources.subtitle",
      items: [
        "developers.FeaturedResources.items[0]",
        "developers.FeaturedResources.items[1]",
        "developers.FeaturedResources.items[2]",
      ],
    },
  ],
}
const signIn: styleSignInMenu = {
  title: "signIn.title",
  lists: ["signIn.items[0]", "signIn.items[1]", "signIn.items[2]"],
}
const onDrawer = defineModel()
</script>

<style scoped>
@import "@/stylus/button.css";
@import "@/stylus/navBar.css";
</style>
