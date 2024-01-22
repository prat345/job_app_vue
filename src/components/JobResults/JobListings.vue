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

<script>
import JobListing from "./JobListing.vue"
import { useJobsStore, FETCH_JOBS, FILTERED_JOBS } from "@/stores/jobs"
import { mapActions, mapState } from "pinia"

export default {
  name: "JobListings",
  components: { JobListing },
  // data() {
  //   return {
  //     jobs: []
  //   }
  // },
  computed: {
    currentPage() {
      return +(this.$route.query.page || "1")
    },
    previousPage() {
      const prevPage = this.currentPage - 1
      return prevPage >= 1 ? prevPage : undefined
    },
    ...mapState(useJobsStore, {
      FILTERED_JOBS,
      nextPage() {
        const nextPage = this.currentPage + 1
        const countPage = Math.ceil(this.FILTERED_JOBS.length / 10)
        console.log(this.previousPage, this.nextPage, countPage)
        return nextPage <= countPage ? nextPage : undefined
      },
      displayedJobs() {
        const pageCurrent = this.currentPage
        return this.FILTERED_JOBS.slice((pageCurrent - 1) * 10, pageCurrent * 10)
      }
    })
  },

  async mounted() {
    this.FETCH_JOBS()
  },
  methods: {
    ...mapActions(useJobsStore, [FETCH_JOBS])
  }
}
</script>

<style></style>
