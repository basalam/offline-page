<template>
  <main>
    <h1>Offline Page</h1>
  </main>
</template>

<script>
export default {
  name: 'Offline',

  mounted() {
    this.setOnlineListener()
  },

  methods: {
    setOnlineListener() {
      window.addEventListener('online', this.onlineListener)
    },

    onlineListener() {
      this.$store.commit('setOnlineStatus', true)
        
      const targetPath = window.location.href.replace(window.location.origin, '')
      const currentPath = this.$route.fullPath

      if (targetPath != currentPath) this.$router.replace(targetPath)
    }
  },

  beforeDestroy() {
    window.removeEventListener('online', this.onlineListener)
  }
}
</script>