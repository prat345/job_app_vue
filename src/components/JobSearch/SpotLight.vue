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

<script lang="ts" setup>
import axios from "axios"
import { onMounted, ref } from "vue"

interface SpotLight {
  id: number
  img: string
  title: string
  description
}

const spotlights = ref<SpotLight[]>([])

const getSpotlights = async () => {
  const baseUrl = import.meta.env.VITE_SERVER_API
  const url = `${baseUrl}/spotlights`
  const { data } = await axios.get<SpotLight[]>(url)
  spotlights.value = data
}

onMounted(getSpotlights)

// export default {
//   name: "SpotLight",
//   data() {
//     return {
//       spotlights: []
//     }
//   },
//   async mounted() {
//     const baseUrl = import.meta.env.VITE_SERVER_API
//     const url = `${baseUrl}/spotlights`
//     const { data } = await axios.get(url)
//     this.spotlights = data
//   }
// }
</script>

<style></style>
