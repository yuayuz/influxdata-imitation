<template>
  <v-overlay
    v-model="open"
    open-on-hover
    location-strategy="connected"
    location="bottom center"
    close-on-content-click
  >
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" @click="open = !open" variant="text">
        <div class="tw-text-white hover:tw-text-[#9394ff]">
          {{ t(prop.menu.title) }}
        </div>
        <template v-slot:append>
          <v-icon class="tw-text-white" icon="mdi-chevron-down" />
        </template>
      </v-btn>
    </template>
    <v-card height="193" class="tw-top-7" width="320" rounded="lg">
      <div class="tw-h-full tw-px-2.5 tw-py-5">
        <v-card-item
          v-for="n in prop.menu.lists.length"
          :key="n"
          class="tw-h-12 tw-text-base"
        >
          {{ t(prop.menu.lists[n - 1]) }}
        </v-card-item>
      </div>
    </v-card>
  </v-overlay>
</template>

<script setup lang="ts">
import { ref } from "vue"
import type { styleSignInMenu } from "~/styles/navBarMenu"
import { useI18n } from "#imports"

const { t } = useI18n()

const open = ref(false)

interface Props {
  menu: styleSignInMenu
}

const prop = defineProps<Props>()
</script>

<style scoped>
@import "@/stylus/button.css";
</style>
