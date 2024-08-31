<template>
  <div class="tw-w-full tw-pt-[6rem] lg:tw-hidden" :hidden="!onDrawer">
    <div class="tw-flex tw-w-full tw-justify-center">
      <v-btn class="buttonColor tw-w-11/12" height="50">Start Now</v-btn>
    </div>
    <main-menu-item :show="true">Products</main-menu-item>
    <main-menu-item :show="true">Use Cases</main-menu-item>
    <main-menu-item :show="true">Developers</main-menu-item>
    <main-menu-item :show="false">Pricing</main-menu-item>
  </div>
</template>

<script setup lang="ts">
import MainMenuItem from "~/components/navBar/MainMenuItem.vue"

const onDrawer = defineModel()
</script>

<style scoped>
@import "@/stylus/button.css";
</style>
