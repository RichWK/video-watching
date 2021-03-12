<template>

  <div class="my-8 sm:flex sm:items-center">
    <div class="bg-rebgv-yellow w-36 h-1.5 mb-8 sm:w-1.5 sm:h-16 sm:mb-0"></div>
    <h1 class="font-serif sm:ml-5">{{ title }}</h1>
  </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Heading',
  props: {
    title: {
      type: String,
      required: true
    }
  }
})

</script>

