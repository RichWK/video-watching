<template>

  <div class="relative select-none max-w-max">
    <img
      alt="Still frame from the video"
      :src="imagePath"
    />
    <div class="absolute inset-0 z-0 bg-rebgv-pale-green opacity-75"></div>
    <div v-if="name" class="lower-third-gradient absolute inset-x-0 bottom-0 h-5/6 z-10"></div>
    <div class="absolute inset-0 z-20 m-5 mt-4 font-bold select-none text-rebgv-gray">
      <h2 v-if="name" class="absolute bottom-0 text-xl truncate w-full">
        {{ name }}
      </h2>
      <h6 class="absolute top-0 right-0">{{ duration }}</h6>
    </div>
    <div
      v-if="showPlayButton"
      class="flex justify-center radial-gradient absolute inset-0 z-30 cursor-pointer"
      @click="toggleIdentityCheck"
    >
      <img alt="Play button" width="60" src="../assets/play.svg" />
    </div>
    <ProgressBar
      v-if="name"
      class="absolute top-0 w-full z-40"
      :percentageComplete="percentageComplete"
    />
    <div
      v-if="identityCheck"
      class="flex flex-col items-center justify-center absolute inset-0 z-50 backdrop-filter"
    >
      <p class="text-xl mb-8">Please confirm you are Adeline Liu.</p>
      <div>
        <Button @click="toggleIdentityCheck" class="mr-8 lg:mr-12" text="Confirm" />
        <Button @click="toggleIdentityCheck" text="Cancel" />
      </div>
    </div>
  </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import Button from './Button.vue'
import ProgressBar from './ProgressBar.vue'

export default defineComponent({
  name: 'VideoPanel',
  components: {
    Button,
    ProgressBar
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
    name: String,
    percentageComplete: {
      type: Number,
      default: 0
    }
  }
})

</script>

