<template>

  <img alt="Vue logo" class="mx-auto mb-4" src="../assets/logo.png" />
  <h1>Rendered by Vue 3 (with Tailwind, TypeScript and Vite) 🐲</h1>
  <p>
    Recommended setup is
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    with
    <a
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank">Vetur</a>
    — or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    if using <code>&lt;script setup&gt;</code>
  </p>
  <button
    @click="count++"
    class="bg-green-300 text-green-800 font-bold mt-6 rounded px-4 pt-2 pb-3 focus:outline-none"
  >
    Count is: {{ count }}
  </button>

</template>

<script lang="ts">

// Applying TypeScript to props works by importing 'PropType' from Vue.
// It can then be used as demonstrated with the 'timeOfDay' prop.

import { defineComponent, PropType } from 'vue'
import { timeOfDayType } from '../types'

export default defineComponent({
  name: 'Home',
  data() {
    return {
      'count': 0
    }
  },
  props: {
    timeOfDay: {
      type: String as PropType<timeOfDayType>,
      required: true
    }
  }
})

</script>

