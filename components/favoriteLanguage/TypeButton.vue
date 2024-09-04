<template>
  <div class="tw-mb-4 tw-flex tw-justify-end">
    <div class="tw-flex">
      <div
        :class="[
          'tw-w-fit tw-rounded-l-md tw-px-6 tw-py-3 tw-text-base',
          type === 'Read'
            ? 'tw-bg-white'
            : 'tw-border tw-border-white tw-text-white',
        ]"
        @click="type = 'Read'"
      >
        Read
      </div>
      <div
        :class="[
          'tw-w-fit tw-rounded-r-md tw-px-6 tw-py-3 tw-text-base',
          type === 'Write'
            ? 'tw-bg-white'
            : 'tw-border tw-border-white tw-text-white',
        ]"
        @click="type = 'Write'"
      >
        Write
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const type = defineModel<string>()
</script>

<style scoped></style>
