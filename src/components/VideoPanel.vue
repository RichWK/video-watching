<template>

  <div class="relative mb-10">
    <img
      alt="Still frame from the video"
      :src="imagePath"
    />
    <h2 class="absolute z-10 bottom-0 select-none">{{ name }}</h2>
    <h6 class="absolute z-10 top-0 right-0 select-none">{{ duration }}</h6>
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

