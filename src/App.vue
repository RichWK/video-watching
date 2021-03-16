<template>

  <div class="mx-auto inset-x-0 max-w-screen-xxl">
    <Navigation class="sm:ml-8 lg:ml-16" />
    <div class="px-6 sm:px-8 lg:px-16 pb-16 xl:pb-24">
      <Breadcrumbs />
      <router-view />
    </div>
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

