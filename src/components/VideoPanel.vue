<template>

  <div class="relative select-none">
    <img
      alt="Still frame from the video"
      :src="imagePath"
    />
    <div class="absolute inset-0 z-10 bg-rebgv-pale-green opacity-75"></div>
    <div v-if="name" class="lower-third-gradient absolute inset-0 z-20"></div>
    <div class="absolute inset-0 z-30 m-5 mt-4 font-bold select-none text-rebgv-gray">
      <h2 v-if="name" class="absolute bottom-0 text-xl truncate w-full">{{ name }}</h2>
      <h6 class="absolute top-0 right-0">{{ duration }}</h6>
    </div>
    <div
      v-if="showPlayButton"
      class="flex justify-center absolute inset-0 z-40 cursor-pointer"
      @click="toggleIdentityCheck"
    >
      <img alt="Play button" width="60" src="../assets/play.svg" />
    </div>
    <div
      v-if="identityCheck"
      class="flex flex-col items-center justify-center absolute inset-0 z-50 backdrop-filter"
    >
      <p class="text-xl">Please confirm you are Adeline Liu.</p>
      <div>
        <Button @click="toggleIdentityCheck" class="mr-8" text="Confirm" />
        <Button @click="toggleIdentityCheck" text="Cancel" />
      </div>
    </div>
  </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import Button from './Button.vue'

export default defineComponent({
  name: 'VideoPanel',
  components: {
    Button
  },
  computed: {
    imagePath(): string {
      return '../src/assets/' + this.imageName;
    },
    showPlayButton(): boolean {
      return !this.name && !this.identityCheck;
    }
  },
  data() {
    return {
      identityCheck: false
    }
  },
  methods: {
    toggleIdentityCheck(): void {
      this.identityCheck = !this.identityCheck;
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
    name: String
  }
})

</script>

