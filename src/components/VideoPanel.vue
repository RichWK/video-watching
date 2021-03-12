<template>

  <div class="relative">
    <img
      alt="Still frame from the video"
      :src="imagePath"
    />
    <div class="absolute inset-0 z-10 bg-rebgv-pale-green opacity-75"></div>
    <div class="absolute inset-0 z-20 lower-third-gradient"></div>
    <div class="absolute inset-0 z-30 m-5 mt-4 font-bold select-none text-rebgv-gray">
      <h2 class="absolute bottom-0 text-xl truncate w-full">{{ name }}</h2>
      <h6 class="absolute top-0 right-0">{{ duration }}</h6>
    </div>
  </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VideoPanel',
  computed: {
    imagePath(): string {
      return '../src/assets/' + this.imageName;
    }
  },
  props: {
    duration: {
      type: String,
      required: true
    },
    imageName: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
  }
})

</script>

