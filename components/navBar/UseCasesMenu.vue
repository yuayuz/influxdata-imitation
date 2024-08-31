<template>
  <div>
    <v-overlay v-model="open" open-on-hover close-on-content-click>
      <template v-slot:activator="{ props }">
        <v-btn @click="open = !open" v-bind="props" variant="text">
          <div class="tw-text-sm tw-text-white hover:tw-text-[#9394ff]">
            {{ t(prop.menu.title) }}
          </div>
          <template v-slot:append>
            <v-icon class="tw-text-white" icon="mdi-chevron-down" />
          </template>
        </v-btn>
      </template>
      <div class="tw-flex tw-w-screen">
        <v-card
          class="tw-top-36 tw-mx-auto tw-flex tw-w-4/5 2xl:tw-w-[85rem]"
          rounded="lg"
        >
          <div
            class="tw-h-12 tw-content-center tw-bg-[#5EE4E4] tw-px-8 tw-py-3 tw-text-lg tw-text-white"
            :class="color"
          >
            {{ t(prop.menu.title) }}
          </div>
          <div class="tw-flex">
            <div class="tw-w-4/5">
              <div class="tw-px-11 tw-pb-2.5 tw-pt-8 tw-text-2xl">
                {{ t(prop.menu.subheader) }}
              </div>

              <div class="tw-w-screen-2xl tw-flex">
                <div>
                  <div class="tw-grid tw-grid-cols-4">
                    <menu-list
                      v-for="n in prop.menu.lists.length - 1"
                      :key="n"
                      :list="prop.menu.lists[n - 1]"
                    />
                  </div>
                  <hr />
                  <div class="tw-grid tw-grid-cols-3 tw-px-11 tw-py-5">
                    <use-cases-footer
                      v-for="n in items.length"
                      :key="n"
                      :item="items[n - 1]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <menu-list :list="prop.menu.lists[prop.menu.lists.length - 1]" />
          </div>
        </v-card>
      </div>
    </v-overlay>
  </div>
</template>

<script setup lang="ts">
import MenuList from "~/components/navBar/MenuList.vue"
import { ref } from "vue"
import type { navBarMenu, useCasesFooterItem } from "~/styles/navBarMenu"
import { useI18n } from "#imports"
import UseCasesFooter from "~/components/navBar/UseCasesFooter.vue"
import icons_workflow from "public/navBar/icons_workflow.svg"
import icons8_electronics from "public/navBar/icons8_electronics.svg"
import icon_journey from "public/navBar/icon_journey.svg"

const { t } = useI18n()

const open = ref(false)

interface Props {
  menu: navBarMenu
}

const prop = defineProps<Props>()
const color = `tw-bg-[${prop.menu.color}]`
const items: useCasesFooterItem[] = [
  {
    svg: icons8_electronics,
    title: "Explore All Use Cases",
  },
  {
    svg: icon_journey,
    title: "Customer Stories",
  },
  {
    svg: icons_workflow,
    title: "See how Teréga reduced total cost of ownership by 50% ",
  },
]
</script>

<style scoped>
@import "@/stylus/button.css";
</style>
