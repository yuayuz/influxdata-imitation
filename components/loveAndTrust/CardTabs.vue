<template>
  <v-card rounded="lg">
    <v-tabs v-model="activeItem" grow height="117" class="tw-shadow">
      <v-tab
        v-for="n in props.items.length"
        :key="n"
        :value="props.items[n - 1].name"
        slider-color="#C41297"
        class="tw-relative"
      >
        <v-img :src="props.items[n - 1].img" absolute />
      </v-tab>
    </v-tabs>
    <v-tabs-window v-model="activeItem">
      <v-tabs-window-item
        :value="props.items[0].name"
        class="tw-h-[34rem] tw-bg-[#F2F4F6] tw-p-12"
      >
        <love-and-trust-card-component
          :item="props.cardWindows[items[0].name]"
        />
      </v-tabs-window-item>
      <v-tabs-window-item
        :value="props.items[1].name"
        class="tw-h-[34rem] tw-bg-[#F2F4F6] tw-p-12"
      >
        <love-and-trust-common-component
          :item="props.commonWindows[items[1].name]"
        />
      </v-tabs-window-item>
      <v-tabs-window-item
        :value="props.items[2].name"
        class="tw-h-[34rem] tw-bg-[#F2F4F6] tw-p-12"
      >
        <love-and-trust-card-component
          :item="props.cardWindows[items[2].name]"
        />
      </v-tabs-window-item>
      <v-tabs-window-item
        :value="props.items[3].name"
        class="tw-h-[34rem] tw-bg-[#F2F4F6] tw-p-12"
      >
        <love-and-trust-common-component
          :item="props.commonWindows[items[3].name]"
        />
      </v-tabs-window-item>
      <v-tabs-window-item
        :value="props.items[4].name"
        class="tw-h-[34rem] tw-bg-[#F2F4F6] tw-p-12"
      >
        <love-and-trust-common-component
          :item="props.commonWindows[items[4].name]"
        />
      </v-tabs-window-item>
      <v-tabs-window-item
        :value="props.items[5].name"
        class="tw-h-[34rem] tw-bg-[#F2F4F6] tw-p-12"
      >
        <love-and-trust-card-component
          :item="props.cardWindows[items[5].name]"
        />
      </v-tabs-window-item>
      <v-tabs-window-item
        :value="props.items[6].name"
        class="tw-h-[34rem] tw-bg-[#F2F4F6] tw-p-12"
      >
        <love-and-trust-common-component
          :item="props.commonWindows[items[6].name]"
        />
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "#imports"
import type { card, common, tab } from "~/styles/loveAndTrust"
interface Props {
  items: tab[]
  cardWindows: Record<string, card>
  commonWindows: Record<string, common>
}

const props = defineProps<Props>()
const activeItem = ref()
</script>

<style scoped></style>
