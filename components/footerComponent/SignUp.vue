<template>
  <div class="tw-p-3 tw-text-white">
    <div class="tw-text-base tw-font-black">
      Sign up for the InfluxData newsletter
    </div>
    <div>Email*</div>
    <v-text-field />
    <div class="tw-flex tw-space-x-5">
      <v-checkbox />
      <div class="tw-text-sm">
        By submitting this form, you agree to the Privacy Policy and Cookie
        Policy.
      </div>
    </div>
    <v-btn class="buttonColor tw-w-full">Submit</v-btn>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@import "@/stylus/button.css";
</style>
