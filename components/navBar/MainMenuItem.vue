<template>
  <div class="tw-h-[5.3rem] tw-content-end tw-px-8">
    <div class="tw-flex tw-w-full tw-place-content-between tw-py-2">
      <p class="tw-font-black tw-text-[#020A47] dark:tw-text-white">
        <slot />
      </p>
      <div class="tw-text-2xl">
        <v-icon
          class="tw-text-[#D6D8F7]"
          style="z-index: -1"
          :icon="props.show ? 'mdi-chevron-right' : ''"
        />
      </div>
    </div>
    <hr />
  </div>
</template>

<script setup lang="ts">
interface Props {
  show: boolean
}

const props = defineProps<Props>()
</script>

<style scoped></style>
