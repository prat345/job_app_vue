<template>
  <div>job id {{ currentJobId }}</div>
</template>

<script>
export default {
  name: "JobView",
  computed: {
    currentJobId() {
      return this.$route.params.id // id from route
    }
  }
}
</script>

<style></style>
