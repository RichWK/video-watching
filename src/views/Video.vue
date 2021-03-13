<template>

  <Heading :title="name" />
  <VideoPanel
    :duration="duration"
    :imageName="imageName"
  />
  <p v-if="description" class="mt-8">{{ description }}</p>

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

