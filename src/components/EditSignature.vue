<script setup lang="ts">
import {ref, computed} from "vue";
import PreviewSignature from "./PreviewSignature.vue";
import {useClipboard} from "@vueuse/core";

const form = ref({
  name: "Jasper Verbunt",
  title: "CEO & Founder",
  image:
    "https://www.redkiwi.com/uploads/images/E-mailhandtekeningen/Jasper2_Emailhandtekening.jpg",
  imageAlt: "Kiwi Jasper",
  phone_1: "010 - 281 96 33",
  phone_1_link: "+31102819633",
  phone_2: "",
  phone_2_link: "",
});
const finalContents = ref("");

const copyHtml = () => {
  console.log(PreviewSignature);
  // @ts-ignore
  const {text, copy, copied, isSupported} = useClipboard({finalContents});

  copy(finalContents.value);
};

const handleContentUpdated = (newContent: string) => {
  finalContents.value = newContent;
};
</script>
<template>
  <div class="p-10 flex gap-10">
    <div class="w-1/2">
      <h2 class="text-xl font-bold">Pas handtekening aan</h2>
      <form
        @submit.prevent="copyHtml"
        class="flex flex-wrap gap-4 mt-5 items-end"
      >
        <div class="w-[calc(50%_-_0.5rem)] flex flex-col gap-2">
          <label for="name">Naam</label>
          <input
            v-model="form.name"
            class="p-2 border rounded border-black"
            type="text"
            id="name"
            name="name"
            placeholder="Jasper Verbunt"
          />
        </div>

        <div class="w-[calc(50%_-_0.5rem)] flex flex-col gap-2">
          <label for="title">Titel</label>
          <input
            v-model="form.title"
            class="p-2 border rounded border-black"
            type="text"
            id="title"
            name="title"
            placeholder="CEO & Founder"
          />
        </div>

        <div class="w-full flex flex-col gap-2">
          <label for="image">Afbeelding URL</label>
          <input
            v-model="form.image"
            class="p-2 border rounded border-black"
            type="url"
            id="image"
            name="image"
            placeholder="https://www.redkiwi.com/uploads/images/E-mailhandtekeningen/Jasper2_Emailhandtekening.jpg"
          />
        </div>
        <div class="w-full flex flex-col gap-2">
          <label for="image_alt">Afbeelding alt text</label>
          <input
            v-model="form.imageAlt"
            class="p-2 border rounded border-black"
            type="text"
            id="image_alt"
            name="image_alt"
            placeholder="Kiwi Jasper"
          />
        </div>

        <div class="w-[calc(50%_-_0.5rem)] flex flex-col gap-2">
          <label for="phone-1">Telefoonnummer 1</label>
          <input
            v-model="form.phone_1"
            class="p-2 border rounded border-black"
            type="tel"
            id="phone-1"
            name="phone-1"
            placeholder="010 - 281 96 33"
          />
        </div>
        <div class="w-[calc(50%_-_0.5rem)] flex flex-col gap-2">
          <label for="phone-1-link">Telefoonnummer 1 link</label>
          <span class="text-xs text-gray-500"
            >Het oorspronkelijke telnummer zonder spaties en streepjes, met
            landcode (vb: +31102819633)</span
          >
          <input
            v-model="form.phone_1_link"
            class="p-2 border rounded border-black"
            type="tel"
            id="phone-1-link"
            name="phone-1-link"
            placeholder="010 - 281 96 33"
          />
        </div>

        <div class="w-[calc(50%_-_0.5rem)] flex flex-col gap-2">
          <label for="phone-2">Telefoonnummer 2 (optioneel)</label>
          <input
            v-model="form.phone_2"
            class="p-2 border rounded border-black"
            type="tel"
            id="phone-2"
            name="phone-2"
          />
        </div>
        <div class="w-[calc(50%_-_0.5rem)] flex flex-col gap-2">
          <label for="phone-2-link">Telefoonnummer 2 link</label>
          <input
            v-model="form.phone_2_link"
            class="p-2 border rounded border-black"
            type="tel"
            id="phone-2-link"
            name="phone-2-link"
          />
        </div>

        <button
          class="border border-transparent bg-red text-white px-6 py-3 hover:bg-transparent hover:text-red hover:border-red"
          type="submit"
        >
          Kopieer HTML
        </button>
      </form>
    </div>
    <div class="w-1/2">
      <h2 class="text-xl font-bold">Preview</h2>
      <textarea v-model="finalContents" class="hidden"></textarea>
      <PreviewSignature v-bind="form" @contentUpdated="handleContentUpdated" />
    </div>
  </div>
</template>
