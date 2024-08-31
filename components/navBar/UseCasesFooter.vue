<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <div v-bind="props" class="tw-group tw-flex tw-items-center">
        <div>
          <v-img :src="prop.item.svg" width="56" height="56"></v-img>
        </div>
        <div>
          {{ prop.item.title }}
        </div>
        <div class="tw-ml-4" :hidden="!isHovering">
          <v-img :src="gr_arrow" width="26" height="16"></v-img>
        </div>
      </div>
    </template>
  </v-hover>
</template>

<script setup lang="ts">
import type { useCasesFooterItem } from "~/styles/navBarMenu"
import gr_arrow from "@/public/gr_arrow.svg"

interface Props {
  item: useCasesFooterItem
}

const prop = defineProps<Props>()
</script>

<style scoped></style>
