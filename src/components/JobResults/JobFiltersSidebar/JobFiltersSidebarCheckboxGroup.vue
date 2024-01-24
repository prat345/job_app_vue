<template>
  <collapsible-accordian :header="header">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="h-8 w-1/2 text-sm" v-for="value in uniqueValues" :key="value">
            <input
              :id="value"
              v-model="selectedValues"
              :value="value"
              type="checkbox"
              class="mr-3"
              @change="selectValue"
            />
            <label :for="value">{{ value }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordian>
</template>

<script setup>
import CollapsibleAccordian from "../../Shared/CollapsibleAccordian.vue"
import { ref } from "vue"
import { useRouter } from "vue-router"

// const selectedJobTypes = ref([])

const props = defineProps({
  header: { type: String, required: true },
  uniqueValues: {
    type: Set,
    required: true
  },
  action: {
    type: Function,
    required: true
  }
})

const selectedValues = ref([])

// const jobsStore = useJobsStore()
// const userStore = useUserStore()
// const UNIQUE_JOB_TYPES = computed(() => jobsStore.UNIQUE_JOB_TYPES)

const router = useRouter()

const selectValue = () => {
  // userStore.ADD_SELECTED_JOB_TYPES(selectedJobTypes.value)
  props.action(selectedValues.value)
  router.push({ name: "JobResults" })
}
</script>

<style></style>
