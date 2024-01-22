<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>

<script>
import axios from "axios"

export default {
  name: "SpotLight",
  data() {
    return {
      spotlights: []
    }
  },
  async mounted() {
    const baseUrl = import.meta.env.VITE_SERVER_API
    const url = `${baseUrl}/spotlights`
    const { data } = await axios.get(url)
    this.spotlights = data
  }
}
</script>

<style></style>
