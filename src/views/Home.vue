<template>

  <Heading title="Video courses" />
  <p>These are currently available to you.</p>
  <div class="grid gap-7 grid-cols-1 sm:grid-cols-2 max-w-6xl">
    <VideoPanel
      v-for="video in videos"
      :duration="video.duration"
      :imageName="video.imageName"
      :name="video.name"
    />
  </div>
  <button
    @click="count++"
    class="bg-green-300 text-green-800 font-bold mt-6 mb-10 rounded px-4 pt-2 pb-3 focus:outline-none"
  >
    Count is: {{ count }}
  </button>

</template>

<script lang="ts">

// Applying TypeScript to props — it works by importing 'PropType' from Vue.
// It can then be used as demonstrated as below with 'timeOfDay'.

import { defineComponent, PropType } from 'vue'
import { timeOfDayType, VideosType } from '../types'
import VideoData from '../assets/videos.json'

import Heading from '../components/Heading.vue'
import VideoPanel from '../components/VideoPanel.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Heading,
    VideoPanel
  },
  data() {
    return {
      'count': 0,
      videos: [] as VideosType
    }
  },
  mounted() {
    this.videos = VideoData;
  },
  props: {
    timeOfDay: {
      type: String as PropType<timeOfDayType>
    }
  }
})

</script>

