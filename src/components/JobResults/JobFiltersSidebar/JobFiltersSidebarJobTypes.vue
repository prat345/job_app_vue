<template>
  <collapsible-accordian header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            class="h-8 w-1/2 text-sm"
            v-for="jobType in Array.from(UNIQUE_JOB_TYPES)"
            :key="jobType"
          >
            <input
              :id="jobType"
              v-model="selectedJobTypes"
              :value="jobType"
              type="checkbox"
              class="mr-3"
              @change="selectJobType"
            />
            <label :for="jobType">{{ jobType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordian>
</template>

<script>
import { mapState, mapActions } from "pinia"
import { useJobsStore, UNIQUE_JOB_TYPES } from "@/stores/jobs"
import { useUserStore, ADD_SELECTED_JOB_TYPES } from "@/stores/user"
import CollapsibleAccordian from "../../Shared/CollapsibleAccordian.vue"

export default {
  name: "JobFiltersSidebarJobTypes",
  components: { CollapsibleAccordian },
  data() {
    return {
      selectedJobTypes: []
    }
  },
  computed: {
    ...mapState(useJobsStore, [UNIQUE_JOB_TYPES])
  },
  methods: {
    ...mapActions(useUserStore, [ADD_SELECTED_JOB_TYPES]),
    // add onchange to update the jobs instantly when checkbox update(ถ้าใช้แคv-modelต้องรอsubmit)
    selectJobType() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes)
      this.$router.push({ name: "JobResults" })
      console.log(this.selectedJobTypes)
    }
  }
}
</script>

<style></style>
