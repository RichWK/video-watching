<template>

  <div :class="['flex items-center font-bold', labelling ? 'h-6' : 'h-1' ]">
    <div
      :class="[ 'relative inline-block bg-rebgv-green h-full', {'min-w-1': labelling} ]"
      :style="widthAsCss"
    >
      <h5 v-if="alignToLeft" class="absolute right-2 text-white">
        {{ percentage }}% watched
      </h5>
    </div>
    <h5 v-if="alignToRight" class="inline-block text-rebgv-green ml-2">
      {{ percentage }}% watched
    </h5>
    
  </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProgressBar',
  computed: {
    alignToLeft(): boolean {
      return this.percentage > 65 && this.labelling ? true : false
    },
    alignToRight(): boolean {
      return this.percentage <= 65 && this.labelling ? true : false
    },
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
    labelling: {
      type: Boolean,
      default: false
    },
    percentageComplete: {
      type: Number,
      required: true
    }
  }
})

</script>

