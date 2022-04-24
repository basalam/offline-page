<template>
  <main>
    <RouterLink to="/">Home</RouterLink>
    <h1>About Page</h1>
  </main>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name:' HomePage',

  components: {
    RouterLink
  }
}
</script>