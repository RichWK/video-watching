<template>

  <Heading :title="name" />

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import Heading from '../components/Heading.vue'

export default defineComponent({
  name: 'Video',
  components: {
    Heading
  },
  props: {
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
    }
  }
})

</script>

