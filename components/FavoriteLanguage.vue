<template>
  <div
    class="tw-rounded-tr-[5rem] tw-bg-[#020A47] tw-px-4 tw-py-12 md:tw-hidden"
  >
    <div class="tw-px-5 tw-py-5 tw-font-bold">
      <div class="tw-mb-6 tw-text-3xl tw-text-white">
        Code in the languages you love
      </div>
      <div class="tw-mb-4 tw-pb-5 tw-text-sm tw-text-white">
        No need to conform to a new language or technology. InfluxDB supports
        multiple programming and query languages, with client libraries and
        integrations to make things simple, all powered by a RESTful API.
      </div>
      <div>
        <v-btn class="buttonColor seeBtn tw-content-center" rounded="lg"
          >See All Integrations
        </v-btn>
      </div>
      <div>
        <div
          class="tw-grid tw-aspect-square tw-grid-cols-3 tw-grid-rows-3 tw-p-3"
        >
          <favorite-language-image-button
            v-for="n in buttons.length"
            :key="n"
            :button="buttons[n - 1]"
            v-model="activeItem"
          />
        </div>
        <div class="tw-pb-6">
          <favorite-language-type-button v-model="type" />
          <div
            class="tw-rounded-lg tw-border tw-border-white tw-border-opacity-40 tw-bg-[#030938] tw-p-4"
          >
            <pre
              class="code-scroll-container tw-mb-1 tw-h-[23rem] tw-overflow-auto tw-px-4 tw-pb-4 tw-text-sm tw-text-white"
            >
                <code v-html="codes[activeItem][type]" />
                </pre>
          </div>
        </div>
        <div class="tw-justify-start tw-space-y-8">
          <favorite-language-footer-button />
        </div>
      </div>
    </div>
  </div>

  <div
    class="tw-hidden tw-rounded-tr-[5rem] tw-bg-[#020A47] tw-px-4 tw-py-12 md:tw-block"
  >
    <div class="tw-mx-auto tw-max-w-screen-xl tw-pt-12">
      <div class="tw-mx-auto tw-w-3/5 tw-pb-20 tw-font-bold">
        <div class="tw-mb-6 tw-text-center tw-text-5xl tw-text-white">
          Code in the languages you love
        </div>
        <div class="tw-mb-4 tw-pb-5 tw-text-center tw-text-sm tw-text-white">
          No need to conform to a new language or technology. InfluxDB supports
          multiple programming and query languages, with client libraries and
          integrations to make things simple, all powered by a RESTful API.
        </div>
        <div class="tw-mx-auto tw-w-fit">
          <v-btn class="buttonColor seeBtn tw-content-center" rounded="lg"
            >See All Integrations
          </v-btn>
        </div>
      </div>
      <div class="tw-flex tw-h-[32.5rem]">
        <div class="tw-h-full tw-w-2/5 tw-content-center">
          <div
            class="tw-grid tw-aspect-square tw-grid-cols-3 tw-grid-rows-3 tw-p-3"
          >
            <favorite-language-image-button
              v-for="n in buttons.length"
              :key="n"
              :button="buttons[n - 1]"
              v-model="activeItem"
            />
          </div>
        </div>
        <div
          class="tw-w-3/5 tw-border-l-2 tw-border-l-white tw-border-opacity-30 tw-pl-12"
          style="aspect-ratio: 3/2"
        >
          <div class="tw-pb-6">
            <favorite-language-type-button v-model="type" />
            <div
              class="tw-rounded-lg tw-border tw-border-white tw-border-opacity-40 tw-bg-[#030938] tw-p-4"
            >
              <pre
                class="code-scroll-container tw-mb-1 tw-h-[23rem] tw-overflow-auto tw-px-4 tw-pb-4 tw-text-sm tw-text-white"
              >
                <code v-html="codes[activeItem][type]" />
                </pre>
            </div>
          </div>
          <div class="tw-flex tw-justify-start tw-space-x-5">
            <favorite-language-footer-button />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports"
import pythonImage from "@/public/favoriteLanguage/python_8dfd7e58.png"
import swift from "@/public/favoriteLanguage/swift_585ceff4.png"
import js from "@/public/favoriteLanguage/js_bce7444a.png"
import java from "@/public/favoriteLanguage/java_48cc7e45.png"
import ruby from "@/public/favoriteLanguage/ruby_1926e8fa.png"
import scala from "@/public/favoriteLanguage/scala_4557ff11.png"
import go from "@/public/favoriteLanguage/go_leng_55e8bffc.png"
import csharp from "@/public/favoriteLanguage/csharp_3e3c2a3e.png"
import rlang from "@/public/favoriteLanguage/rlang_bbb152f4.png"
import type { buttonMessage } from "~/styles/favoriteLanguage"
import {
  pythonReadHighlightedCode,
  pythonWriteHighlightedCode,
  swiftReadHighlightedCode,
  swiftWriteHighlightedCode,
  jsReadHighlightedCode,
  jsWriteHighlightedCode,
  javaReadHighlightedCode,
  javaWriteHighlightedCode,
  rubyReadHighlightedCode,
  rubyWriteHighlightedCode,
  scalaWriteHighlightedCode,
  scalaReadHighlightedCode,
  goReadHighlightedCode,
  goWriteHighlightedCode,
  csharpReadHighlightedCode,
  csharpWriteHighlightedCode,
  rlangReadHighlightedCode,
  rlangWriteHighlightedCode,
} from "~/components/favoriteLanguage/CodeHighlighter"

const activeItem = ref("python")
const type = ref("Read")
const buttons: buttonMessage[] = [
  {
    codeType: "python",
    img: pythonImage,
  },
  {
    codeType: "swift",
    img: swift,
  },
  {
    codeType: "js",
    img: js,
  },
  {
    codeType: "java",
    img: java,
  },
  {
    codeType: "ruby",
    img: ruby,
  },
  {
    codeType: "scala",
    img: scala,
  },
  {
    codeType: "go",
    img: go,
  },
  {
    codeType: "csharp",
    img: csharp,
  },
  {
    codeType: "rlang",
    img: rlang,
  },
]

const codes: Record<string, Record<string, string>> = {
  python: {
    Read: pythonReadHighlightedCode,
    Write: pythonWriteHighlightedCode,
  },
  swift: {
    Read: swiftReadHighlightedCode,
    Write: swiftWriteHighlightedCode,
  },
  js: {
    Read: jsReadHighlightedCode,
    Write: jsWriteHighlightedCode,
  },
  java: {
    Read: javaReadHighlightedCode,
    Write: javaWriteHighlightedCode,
  },
  ruby: {
    Read: rubyReadHighlightedCode,
    Write: rubyWriteHighlightedCode,
  },
  scala: {
    Read: scalaReadHighlightedCode,
    Write: scalaWriteHighlightedCode,
  },
  go: {
    Read: goReadHighlightedCode,
    Write: goWriteHighlightedCode,
  },
  csharp: {
    Read: csharpReadHighlightedCode,
    Write: csharpWriteHighlightedCode,
  },
  rlang: {
    Read: rlangReadHighlightedCode,
    Write: rlangWriteHighlightedCode,
  },
}
</script>

<style scoped>
@import "@/stylus/button.css";
@import "@/stylus/main.css";
</style>
