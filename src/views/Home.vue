<template>

  <Heading title="Video courses" />
  <p>These are currently available to you.</p>
  <div class="grid gap-7 grid-cols-1 sm:grid-cols-2 max-w-6xl">
    <router-link v-for="(video, i) in videos" :key="i" :to="{ name: video.simpleName }">
      <VideoPanel
        :duration="video.duration"
        :imageName="video.imageName"
        :name="video.name"
      />
    </router-link>
  </div>
  <button
    @click="count++"
    class="bg-green-300 text-green-800 font-bold mt-6 mb-10 rounded px-4 pt-2 pb-3 focus:outline-none"
  >
    Count is: {{ count }}
  </button>

</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue'
import { VideosType } from '../types'
import VideoData from '../assets/videos.json'
import Heading from '../components/Heading.vue'
import VideoPanel from '../components/VideoPanel.vue'
import { removeSpecialCharacters } from '../helpers'

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
    this.videos = VideoData.map( ( video ) => 
      ( { ...video, simpleName: removeSpecialCharacters( video.name ) } )
    );
  }
})

</script>

