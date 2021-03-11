<template>

  <div>
    <h2>{{ name }}</h2>
    <h6>{{ duration }}</h6>
  </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VideoPanel',
  props: {
    name: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    }
  }
})

</script>

