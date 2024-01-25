import { defineStore } from "pinia"
import { ref, computed } from "vue"
import type { Degree } from "@/api/types"
import getDegrees from "@/api/getDegrees"

// pinia composition API syntax
export const useDegreesStore = defineStore("degrees", () => {
  // states -> ref
  const degrees = ref<Degree[]>([])

  // actions
  const FETCH_DEGREES = async () => {
    const receivedDegrees = await getDegrees()
    degrees.value = receivedDegrees
  }

  // getters -> computed
  const UNIQUE_DEGREES = computed(() => degrees.value.map((degree) => degree.degree))
  return {
    degrees,
    FETCH_DEGREES,
    UNIQUE_DEGREES
  }
})
