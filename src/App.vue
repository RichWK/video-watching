<template>

  <Navigation />
  <Breadcrumbs />
  <router-view />
  
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

