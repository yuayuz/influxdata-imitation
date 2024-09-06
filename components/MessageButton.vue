<template>
  <div
    class="tw-fixed tw-bottom-4 tw-right-4 tw-flex tw-aspect-square tw-h-14 tw-items-center tw-justify-center tw-rounded-lg tw-bg-[#020a47]"
    @click="isActive = !isActive"
  >
    <v-icon
      :icon="isActive ? 'mdi-close' : 'mdi-message'"
      size="x-large"
      class="tw-text-white"
    ></v-icon>
  </div>
  <div
    :hidden="!isActive"
    class="tw-fixed tw-bottom-24 tw-right-8 tw-h-[34rem] tw-w-[19rem]"
  >
    <v-card rounded="lg" class="tw-h-full tw-w-full tw-bg-violet-800">
      <div class="tw-flex tw-items-center tw-space-x-6 tw-bg-[#020a47]">
        <div class="tw-aspect-square tw-h-10"></div>
        <div class="tw-text-base tw-font-bold tw-text-white">InfluxBot</div>
      </div>
      <div class="tw-h-full tw-overflow-auto">
        <div>
          <div class="tw-px-4 tw-pb-3">
            <div class="tw-my-4 tw-text-center tw-text-xs tw-opacity-30">
              Today 4:25 PM
            </div>
            <div class="tw-mt-4 tw-pl-10">
              <div class="tw-text-xs">InfluxBot</div>
              <div class="tw-flex">
                <div
                  class="tw-w-9/12 tw-rounded-lg tw-bg-[#F5F8FA] tw-px-3 tw-py-2 tw-text-sm"
                >
                  👋 Welcome back! Can I help with your research?
                </div>
              </div>
            </div>
            <div class="tw-ml-16 tw-mt-4 tw-space-y-2">
              <div class="tw-flex tw-justify-end">
                <div
                  class="tw-w-3/4 tw-rounded-lg tw-border-2 tw-border-[#020a47] tw-py-2 tw-text-center hover:tw-bg-[#020a47] hover:tw-text-white"
                >
                  I want to talk to sales
                </div>
              </div>
              <div class="tw-flex tw-justify-end">
                <div
                  class="tw-w-2/4 tw-rounded-lg tw-border-2 tw-border-[#020a47] tw-py-2 tw-text-center hover:tw-bg-[#020a47] hover:tw-text-white"
                >
                  Just browsing
                </div>
              </div>
              <div class="tw-flex tw-justify-end">
                <div
                  class="tw-rounded-lg tw-border-2 tw-border-[#020a47] tw-py-2 tw-text-center hover:tw-bg-[#020a47] hover:tw-text-white"
                >
                  I have a support question
                </div>
              </div>
              <div class="tw-flex tw-justify-end">
                <div
                  class="tw-rounded-lg tw-border-2 tw-border-[#020a47] tw-py-2 tw-text-center hover:tw-bg-[#020a47] hover:tw-text-white"
                >
                  I want to talk about the partner program
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tw-fixed tw-mt-4 tw-px-4 tw-text-sm tw-opacity-30">
          This conversation will be recorded for quality assurance or training
          purposes. Data from the recording will be used in accordance with the
          InfluxData privacy policy.
        </div>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports"

const isActive = ref(false)
</script>

<style scoped>
@import "@/stylus/main.css";
</style>
