<template>
  <div>
    <main-nav />
    <div>
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/jobs/results">Job Results</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script>
import MainNav from "./components/Navigation/MainNav.vue"

export default {
  components: { MainNav },
  name: "App"
}
</script>

<style></style>
