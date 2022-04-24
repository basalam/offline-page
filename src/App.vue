<template>
  <RouterView v-if="isOnline" />
  <OfflinePage v-else />
</template>

<script>
import { RouterView } from 'vue-router'
import OfflinePage from './components/OfflinePage.vue'

export default {
  name: 'App',

  components: {
    RouterView,
    OfflinePage
  },

  computed: {
    isOnline() {
      return this.$store.getters['isOnline']
    }
  }
}
</script>