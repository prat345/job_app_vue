<template>
  <form
    action=""
    class="mt-10 flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3"
    @submit.prevent="handleJobSearch"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex h-full flex-1 flex-nowrap text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label for="role" class="absolute -top-8 left-0">Role</label>

        <text-input id="role" placeholder="Software engineer" v-model="role" />
      </div>

      <span
        class="flex h-full items-center border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3"
        >in</span
      >

      <div class="relative flex h-full flex-1 items-center pl-3">
        <label for="location" class="absolute -top-8 left-0">Where?</label>

        <text-input id="location" placeholder="Bangkok" v-model="location" />
      </div>

      <ActionButton text="Search" variant="secondary" class="rounded-r-3xl" />
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import ActionButton from "../Shared/ActionButton.vue"
import TextInput from "../Shared/TextInput.vue"
import { useRouter } from "vue-router"

const role = ref("")
const location = ref("")

const router = useRouter()

const handleJobSearch = () => {
  router.push({
    name: "JobResults",
    query: { role: role.value, location: location.value }
  })
}
</script>

<style></style>
