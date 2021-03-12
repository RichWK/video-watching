<template>

  <Navigation />
  <div class="px-4 xs:px-7">
    <Breadcrumbs />
    <router-view />
  </div>
  
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import Breadcrumbs from './components/Breadcrumbs.vue'
import Navigation from './components/Navigation.vue'

export default defineComponent({
  name: 'App',
  components: {
    Breadcrumbs,
    Navigation
  }
})

</script>

