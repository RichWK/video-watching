<template>

  <div class="flex h-4 items-center">
    <div
      class="inline-block bg-rebgv-green min-w-1 h-full" :style="widthAsCss"></div>
    <h5 class="inline-block text-rebgv-gray font-bold ml-2">
      {{ percentage }}% watched
    </h5>
  </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProgressBar',
  computed: {
    widthAsCss(): string {
      return `width: ${this.percentage}%`
    }
  },
  data() {
    return {
      percentage: 0
    }
  },
  mounted() {
    this.percentage = this.percentageComplete
  },
  props: {
    percentageComplete: {
      type: Number,
      required: true
    }
  }
})

</script>

