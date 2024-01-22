import { render, screen } from "@testing-library/vue"
import { createTestingPinia } from "@pinia/testing"
import { useJobsStore } from "@/stores/jobs"
import { useRoute } from "vue-router"
vi.mock("vue-router")

import SubNav from "@/components/Navigation/SubNav.vue"

describe("SubNav", () => {
  // helper func
  const renderSubNav = () => {
    const pinia = createTestingPinia()
    const jobsStore = useJobsStore()
    render(SubNav, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
    return { jobsStore }
  }

  describe("when user is on jobs page", () => {
    it("displays job count", async () => {
      useRoute.mockReturnValue({ name: "JobResults" })

      const { jobsStore } = renderSubNav()
      const countJobs = 16

      jobsStore.FILTERED_JOBS = Array(countJobs).fill({})

      const jobCount = await screen.findByText(countJobs) // fail if not found
      expect(jobCount).toBeInTheDocument()
    })
  })

  describe("when user is not on job page", () => {
    it("does NOT display job count", () => {
      useRoute.mockReturnValue({ name: "Home" })
      const { jobsStore } = renderSubNav()
      const countJobs = 16

      jobsStore.FILTERED_JOBS = Array(countJobs).fill({})

      const jobCount = screen.queryByText(countJobs) // return null if not found (wont fail)
      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
