<template>
  <div class="tw-px-8 tw-py-10">
    <v-list>
      <v-list-item class="tw-mb-3.5">
        <template v-slot:title>
          <div class="tw-h-8 tw-text-base">{{ t(props.list.title) }}</div>
        </template>
        <template v-slot:subtitle>{{ t(props.list.subtitle) }} </template>
      </v-list-item>
      <hr class="tw-my-5" />
      <v-list-item
        class="tw-h-8 tw-text-base"
        v-for="n in props.list.items.length"
        :key="n"
      >
        {{ t(props.list.items[n - 1]) }}
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup lang="ts">
import type { navBarMenuList } from "~/styles/navBarMenu"
import { useI18n } from "#imports"

interface Props {
  list: navBarMenuList
}

const props = defineProps<Props>()
const { t } = useI18n()
</script>

<style scoped></style>
