<template>

  <Heading :title="name" />
  <div class="grid lg:gap-10 lg:grid-cols-5">
    <VideoPanel
      class="lg:col-span-4"
      :duration="duration"
      :imageName="imageName"
    />
    <p v-if="description" class="mt-8 lg:mt-0 lg:col-start-5">{{ description }}</p>
  </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import Heading from '../components/Heading.vue'
import VideoPanel from '../components/VideoPanel.vue'

export default defineComponent({
  name: 'Video',
  components: {
    Heading,
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

