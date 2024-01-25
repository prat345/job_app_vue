<template>
  <div class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4">
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do</h3>
        <div class="flex items-center text-sm">
          <action-button
            variant="secondary"
            text="clear"
            @click="userStore.CLEAR_USER_JOB_FILTER_SELECTIONS"
          />
        </div>
      </div>
      <collapsible-accordian header="Degrees">
        <job-filters-sidebar-checkbox-group
          :unique-values="UNIQUE_DEGREES"
          :action="userStore.ADD_SELECTED_DEGREES"
        />
      </collapsible-accordian>
      <collapsible-accordian header="Job Types">
        <job-filters-sidebar-checkbox-group
          :unique-values="UNIQUE_JOB_TYPES"
          :action="userStore.ADD_SELECTED_JOB_TYPES"
        />
      </collapsible-accordian>
      <collapsible-accordian header="Organizations">
        <job-filters-sidebar-checkbox-group
          :unique-values="UNIQUE_ORGANIZATIONS"
          :action="userStore.ADD_SELECTED_ORGANIZATIONS"
        />
      </collapsible-accordian>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import ActionButton from "../../Shared/ActionButton.vue"
import CollapsibleAccordian from "../../Shared/CollapsibleAccordian.vue"
import JobFiltersSidebarCheckboxGroup from "./JobFiltersSidebarCheckboxGroup.vue"

import { useDegreesStore } from "@/stores/degrees"
import { useJobsStore } from "@/stores/jobs"
import { useUserStore } from "@/stores/user"

const jobsStore = useJobsStore()
const userStore = useUserStore()
const degreesStore = useDegreesStore()

const UNIQUE_ORGANIZATIONS = computed(() => jobsStore.UNIQUE_ORGANIZATIONS)
const UNIQUE_JOB_TYPES = computed(() => jobsStore.UNIQUE_JOB_TYPES)
const UNIQUE_DEGREES = computed(() => degreesStore.UNIQUE_DEGREES)
</script>

<style></style>
