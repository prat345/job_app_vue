<template>
  <collapsible-accordian header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            class="h-8 w-1/2 text-sm"
            v-for="organization in Array.from(UNIQUE_ORGANIZATIONS)"
            :key="organization"
          >
            <input
              :id="organization"
              v-model="selectedOrganizations"
              :value="organization"
              type="checkbox"
              class="mr-3"
              @change="selectOrganization"
            />
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordian>
</template>

<script>
import { mapState, mapActions } from "pinia"
import { useJobsStore, UNIQUE_ORGANIZATIONS } from "@/stores/jobs"
import { useUserStore, ADD_SELECTED_ORGANIZATIONS } from "@/stores/user"
import CollapsibleAccordian from "../../Shared/CollapsibleAccordian.vue"

export default {
  name: "JobFiltersSidebarOrganizations",
  components: { CollapsibleAccordian },
  data() {
    return {
      selectedOrganizations: []
    }
  },
  computed: {
    ...mapState(useJobsStore, [UNIQUE_ORGANIZATIONS])
  },
  methods: {
    ...mapActions(useUserStore, [ADD_SELECTED_ORGANIZATIONS]),
    // add onchange to update the jobs instantly when checkbox update(ถ้าใช้แคv-modelต้องรอsubmit)
    selectOrganization() {
      this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations)
      this.$router.push({ name: "JobResults" })
      console.log(this.selectedOrganizations)
    }
  }
}
</script>

<style></style>
