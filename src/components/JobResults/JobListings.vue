<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="(job, idx) in displayedJobs" :key="idx" :job="job" />
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-wrap justify-between">
        <p>{{ (currentPage - 1) * 10 + 1 }}-{{ currentPage * 10 }} of 100</p>

        <div class="flex items-center justify-center gap-x-3 text-brand-blue-1">
          <router-link
            role="link"
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            >Previous</router-link
          >
          <router-link
            role="link"
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import JobListing from "./JobListing.vue"
import { useJobsStore } from "@/stores/jobs"
import { useDegreesStore } from "@/stores/degrees"
import { computed, onMounted } from "vue"
import { useRoute } from "vue-router"
import usePrevAndNextPages from "@/composables/usePrevAndNextPages"

const jobsStore = useJobsStore()
onMounted(jobsStore.FETCH_JOBS)
const degreesStore = useDegreesStore()
onMounted(degreesStore.FETCH_DEGREES)

const route = useRoute()
const currentPage = computed(() => +((route.query.page as string) || "1"))

const FILTERED_JOBS = computed(() => jobsStore.FILTERED_JOBS)
const countPage = computed(() => Math.ceil(FILTERED_JOBS.value.length / 10))

const { previousPage, nextPage } = usePrevAndNextPages(currentPage, countPage) // dont need to use toRefs, bc prev, nextPage alrdy use computed

const displayedJobs = computed(() => {
  const pageCurrent = currentPage.value
  return FILTERED_JOBS.value.slice((pageCurrent - 1) * 10, pageCurrent * 10)
})
</script>

<style></style>
