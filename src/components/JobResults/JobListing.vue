<template>
  <li class="mb-7">
    <router-link
      :to="jobPageLink"
      class="mx-auto block rounded border border-solid border-brand-gray-2 bg-white hover:shadow-gray"
    >
      <div class="mx-8 border-b border-solid border-brand-gray-2 pb-2 pt-5">
        <h2 class="mb-2 text-2xl">
          {{ job.title }}
        </h2>

        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>{{ job.organization }}</span>
          </div>
          <div>
            <ul>
              <span class="mr-2 font-semibold">location:</span>
              <li v-for="location in job.locations" :key="location" class="mr-5 inline-block">
                {{ location }}
              </li>
            </ul>
          </div>
        </div>

        <div class="py-4">
          <h3 class="mb-2 mt-1 font-semibold">Qualifications</h3>
          <div>
            <ul class="list-disc pl-8">
              <li v-for="q in job.minimumQualifications" :key="q">{{ q }}</li>
            </ul>
          </div>
        </div>

        <div class="mt-2 text-center">
          <router-link :to="jobPageLink" class="text-brand-blue-1">Expand</router-link>
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "JobListing",
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  beforeMount() {
    // console.log(this.job)
  },
  computed: {
    jobPageLink() {
      return `/jobs/results/${this.job.id}`
    }
  }
}
</script>

<style></style>
