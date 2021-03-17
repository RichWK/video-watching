<template>

  <Heading :title="name" />
  <div class="grid gap-6 lg:gap-10 lg:grid-cols-5">
    <VideoPanel
      class="lg:col-span-4"
      :duration="duration"
      :imageName="imageName"
    />
    <ProgressBar class="lg:col-start-1 lg:col-span-4" :percentageComplete="percentageComplete" />
    <p v-if="description" class="lg:mt-0 lg:col-start-5 lg:row-start-1">{{ description }}</p>
  </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import Heading from '../components/Heading.vue'
import ProgressBar from '../components/ProgressBar.vue'
import VideoPanel from '../components/VideoPanel.vue'

export default defineComponent({
  name: 'Video',
  components: {
    Heading,
    ProgressBar,
    VideoPanel
  },
  props: {
    description: String,
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
    percentageComplete: {
      type: Number,
      required: true
    }
  }
})

</script>

