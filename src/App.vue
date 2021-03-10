<template>
  <div class="mb-10">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})

</script>

