<template>
  <div
    @mouseover="handleMouseEnter()"
    :class="[
      'tw-relative tw-mx-2.5 tw-mb-2.5 tw-h-[40rem] tw-w-[15.5rem] tw-rounded-t-lg tw-pb-2',
      { 'tw-w-[30.8rem]': isActive },
    ]"
  >
    <div
      :class="[
        'tw-h-[14rem] tw-rounded-t-lg tw-px-6 tw-py-8',
        isActive ? 'tw-bg-white' : color,
      ]"
    >
      <div
        :class="[
          'tw-mb-3 tw-text-2xl tw-font-bold',
          isActive ? 'tw-text-[#020A47]' : 'tw-text-white',
        ]"
      >
        {{ props.message.title }}
      </div>
      <div :hidden="!isActive" class="tw-mb-4 tw-text-base">
        {{ props.message.message }}
      </div>
      <div class="tw-flex" :hidden="!isActive">
        <div class="tw-relative tw-text-lg tw-font-bold">
          <div class="gr-underline">Learn More</div>
        </div>
        <v-icon class="tw-ml-2 tw-text-[#AD1FD1]" icon="mdi-arrow-right" />
      </div>
    </div>
    <div
      :class="[
        'tw-flex tw-h-[25rem] tw-w-full tw-items-center tw-justify-center tw-overflow-hidden tw-rounded-b-lg',
        color,
      ]"
    >
      <div class="image-container tw-w-3/4" :hidden="!isActive">
        <v-img :src="props.message.svg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "#imports"
import type { card } from "~/styles/timeSeriesData"

const color = ref()
let activate = defineModel<string>()
const isActive = ref(false)
onMounted(() => {
  isActive.value = activate.value === props.message.id
  switch (props.message.color) {
    case "#9B2AFF":
      color.value = "tw-bg-[#9B2AFF]"
      break
    case "#D30971":
      color.value = "tw-bg-[#D30971]"
      break
    case "#5EE4E4":
      color.value = "tw-bg-[#5EE4E4]"
      break
    case "#D6F622":
      color.value = "tw-bg-[#D6F622]"
      break
  }
})
watch(activate, () => {
  isActive.value = activate.value === props.message.id
})
const handleMouseEnter = () => {
  activate.value = props.message.id
  isActive.value = true
}

interface Props {
  message: card
}

const props = defineProps<Props>()
</script>

<style scoped>
@import "@/stylus/main.css";
</style>
