<template>
  <main>
    <RouterLink to="/about">About</RouterLink>
    <h1>Home Page</h1>
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