import { defineStore } from "pinia"
import { ref } from "vue"

// export const ADD_SELECTED_ORGANIZATIONS = "ADD_SELECTED_ORGANIZATIONS"
// export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES"
// export const ADD_SELECTED_DEGREES = "ADD_SELECTED_DEGREES"
// export const CLEAR_USER_JOB_FILTER_SELECTIONS = "CLEAR_USER_JOB_FILTER_SELECTIONS"
// define store name
export const useUserStore = defineStore("user", () => {
  // state
  const isLogin = ref(false)
  const selectedOrganizations = ref<string[]>([])
  const selectedJobTypes = ref<string[]>([])
  const selectedDegrees = ref<string[]>([])
  // method
  const LOGIN_USER = () => {
    isLogin.value = true
  }
  const ADD_SELECTED_ORGANIZATIONS = (organizations: string[]) => {
    selectedOrganizations.value = organizations
  }
  const ADD_SELECTED_JOB_TYPES = (jobTypes: string[]) => {
    selectedJobTypes.value = jobTypes
  }
  const ADD_SELECTED_DEGREES = (degrees: string[]) => {
    selectedDegrees.value = degrees
  }
  const CLEAR_USER_JOB_FILTER_SELECTIONS = () => {
    selectedDegrees.value = []
    selectedJobTypes.value = []
    selectedOrganizations.value = []
  }
  return {
    isLogin,
    selectedDegrees,
    selectedJobTypes,
    selectedOrganizations,
    LOGIN_USER,
    ADD_SELECTED_DEGREES,
    ADD_SELECTED_JOB_TYPES,
    ADD_SELECTED_ORGANIZATIONS,
    CLEAR_USER_JOB_FILTER_SELECTIONS
  }
})

// export const useUserStore = defineStore("user", {
//   state: (): UserState => ({
//     isLogin: false,
//     selectedOrganizations: [],
//     selectedJobTypes: [],
//     selectedDegrees: []
//   }),
//   actions: {
//     loginUser() {
//       this.isLogin = true
//       // console.log("store ", this.isLogin)
//     },
//     [ADD_SELECTED_ORGANIZATIONS](organizations: string[]) {
//       this.selectedOrganizations = organizations
//     },
//     [ADD_SELECTED_JOB_TYPES](jobTypes: string[]) {
//       this.selectedJobTypes = jobTypes
//     },
//     [ADD_SELECTED_DEGREES](degrees: string[]) {
//       this.selectedDegrees = degrees
//     },
//     [CLEAR_USER_JOB_FILTER_SELECTIONS]() {
//       this.selectedDegrees = []
//       this.selectedJobTypes = []
//       this.selectedOrganizations = []
//     }
//   }
// })
