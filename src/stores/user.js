import { defineStore } from "pinia"

export const ADD_SELECTED_ORGANIZATIONS = "ADD_SELECTED_ORGANIZATIONS"
export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES"
// define store name
export const useUserStore = defineStore("user", {
  state: () => ({
    isLogin: false,
    selectedOrganizations: [],
    selectedJobTypes: []
  }),
  actions: {
    loginUser() {
      this.isLogin = true
      // console.log("store ", this.isLogin)
    },
    [ADD_SELECTED_ORGANIZATIONS](organizations) {
      this.selectedOrganizations = organizations
    },
    [ADD_SELECTED_JOB_TYPES](jobTypes) {
      this.selectedJobTypes = jobTypes
    }
  }
})
