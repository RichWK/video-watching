<template>

  <Heading title="Video courses" />
  <p class="mb-10">{{ message }}</p>
  <div class="grid gap-7 sm:grid-cols-2 lg:gap-12">
    <router-link v-for="(video, i) in videos" :key="i" :to="{ name: video.simpleName }">
      <VideoPanel
        :duration="video.duration"
        :imageName="video.imageName"
        :name="video.name"
        :percentageComplete="video.percentageComplete"
      />
    </router-link>
  </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { removeSpecialCharacters } from '../helpers'
import { VideosType } from '../types'
import VideoData from '../assets/videos.json'

import Heading from '../components/Heading.vue'
import VideoPanel from '../components/VideoPanel.vue'

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

