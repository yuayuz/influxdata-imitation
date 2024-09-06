<template>
  <div class="tw-fixed tw-bottom-4 tw-left-4">
    <v-tooltip>
      <template v-slot:activator="{ props }">
        <v-img
          v-bind="props"
          :src="persistent_cookie"
          height="60"
          width="60"
        ></v-img>
      </template>
      <template v-slot:default>
        <div class="tw-p-1 tw-text-sm">Cookies Settings</div>
      </template>
    </v-tooltip>
  </div>
</template>

<script setup lang="ts">
import persistent_cookie from "@/public/persistent_cookie.png"
</script>

<style scoped></style>
