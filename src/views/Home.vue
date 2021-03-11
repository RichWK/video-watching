<template>

  <h1 class="font-serif">Video courses</h1>
  <p>These are currently available to you.</p>
  <VideoPanel
    v-for="video in videos"
    :duration="video.duration"
    :imageName="video.imageName"
    :name="video.name"
  />
  <button
    @click="count++"
    class="bg-green-300 text-green-800 font-bold mt-6 rounded px-4 pt-2 pb-3 focus:outline-none"
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

import VideoPanel from '../components/VideoPanel.vue'

export default defineComponent({
  name: 'Home',
  components: {
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

