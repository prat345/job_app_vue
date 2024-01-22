import { useUserStore } from "@/stores/user"
import { createPinia, setActivePinia } from "pinia"

describe("state", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it("tracks if user is logged in", () => {
    const store = useUserStore()
    expect(store.isLogin).toBe(false)
  })

  it("stores organizations from checkbox onchange", () => {
    const store = useUserStore()
    expect(store.selectedOrganizations).toEqual([])
  })

  it("stores job types that the user would like to filter jobs by", () => {
    const store = useUserStore()
    expect(store.selectedJobTypes).toEqual([])
  })
})

describe("action", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe("loginUser", () => {
    it("logs the user in", () => {
      const store = useUserStore()
      store.loginUser()
      expect(store.isLogin).toBe(true)
    })
  })

  describe("ADD_SELECTED_ORGANIZATIONS", () => {
    it("updates organizations the user chose to filter jobs", () => {
      const store = useUserStore()
      store.ADD_SELECTED_ORGANIZATIONS(["Org1", "Org2"])
      expect(store.selectedOrganizations).toEqual(["Org1", "Org2"])
    })
  })

  describe("ADD_SELECTED_JOB_TYPES", () => {
    it("updates job types the user has chosen to filter jobs by", () => {
      const store = useUserStore()
      store.ADD_SELECTED_JOB_TYPES(["Full-time", "Part-time"])
      expect(store.selectedJobTypes).toEqual(["Full-time", "Part-time"])
    })
  })
})
