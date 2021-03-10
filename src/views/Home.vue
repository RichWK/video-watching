<template>

  <h1>Video courses</h1>
  <p>These are currently available to you.</p>
  <VideoPanel />

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
import { timeOfDayType } from '../types'

import VideoPanel from '../components/VideoPanel.vue'

export default defineComponent({
  name: 'Home',
  components: {
    VideoPanel
  },
  data() {
    return {
      'count': 0
    }
  },
  props: {
    timeOfDay: {
      type: String as PropType<timeOfDayType>
    }
  }
})

</script>

