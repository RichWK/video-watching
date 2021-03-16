<template>

  <div class="flex sm:inline-block">
    <div class="bg-rebgv-green px-10 py-4 sm:px-12 sm:py-8">
      <img
        alt="Logo for the Real Estate Board of Greater Vancouver"
        class="mx-auto select-none"
        src="../assets/logo.png"
      />
    </div>
    <div class="flex items-center justify-end flex-grow bg-rebgv-pale-green pr-6 sm:hidden">
      <p class="font-serif text-rebgv-gray cursor-pointer p-4">Menu</p>
    </div>
  </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navigation'
})

</script>

