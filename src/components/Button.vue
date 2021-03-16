<template>

  <button :class="[backgroundColor,'text-white font-bold py-2 px-5']">{{ text }}</button>

</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue'
import { ButtonType } from '../types'

export default defineComponent({
  name: 'Button',
  computed: {
    backgroundColor(): string {
      return this.text === "Confirm" ? "bg-rebgv-green" : "bg-rebgv-gray"
    }
  },
  props: {
    text: {
      type: String as PropType<ButtonType>,
      required: true
    }
  }
})

</script>

