<template>

  <Heading title="Video courses" />
  <p>{{ message }}</p>
  <div class="grid gap-7 grid-cols-1 sm:grid-cols-2 max-w-6xl mb-16">
    <router-link v-for="(video, i) in videos" :key="i" :to="{ name: video.simpleName }">
      <VideoPanel
        :duration="video.duration"
        :imageName="video.imageName"
        :name="video.name"
      />
    </router-link>
  </div>

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
  computed: {
    message(): string {
      return this.videos.length > 0 ?
        "These are currently available to you." :
        "It looks like you don't have any videos currently available to watch."
    } 
  },
  data() {
    return {
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

