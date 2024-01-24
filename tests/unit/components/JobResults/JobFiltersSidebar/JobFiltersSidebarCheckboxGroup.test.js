import { render, screen } from "@testing-library/vue"
import userEvent from "@testing-library/user-event"
import { createTestingPinia } from "@pinia/testing"
import { useRouter } from "vue-router"
vi.mock("vue-router")

import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue"

describe("JobFiltersSidebarCheckboxGroup", () => {
  const createProps = (props = {}) => ({
    header: "Some header",
    uniqueValues: new Set(["ValueA", "ValueB"]),
    action: vi.fn(),
    ...props
  })
  const renderJobFiltersSidebarCheckboxGroup = (props) => {
    const pinia = createTestingPinia()

    render(JobFiltersSidebarCheckboxGroup, {
      props: {
        ...props
      },
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
  }

  it("renders unique list of  fields", async () => {
    const props = createProps({
      header: "Job Types",
      uniqueValues: new Set(["Full-time", "Part-time"])
    })
    renderJobFiltersSidebarCheckboxGroup(props)

    const button = screen.getByRole("button", { name: /job types/i })
    await userEvent.click(button)

    const jobTypeListItems = screen.getAllByRole("listitem")
    const jobTypes = jobTypeListItems.map((node) => node.textContent)
    expect(jobTypes).toEqual(["Full-time", "Part-time"])
  })

  describe("when user clicks checkbox", () => {
    it("implys that user has selected checkbox for that field", async () => {
      useRouter.mockReturnValue({ push: vi.fn() })
      const action = vi.fn()
      const props = createProps({
        header: "Job Types",
        uniqueValues: new Set(["Full-time", "Part-time"]),
        action
      })
      renderJobFiltersSidebarCheckboxGroup(props)

      const button = screen.getByRole("button", { name: /job types/i })
      await userEvent.click(button)

      const fullTimeCheckbox = screen.getByRole("checkbox", {
        name: /full-time/i
      })
      await userEvent.click(fullTimeCheckbox)

      expect(action).toHaveBeenCalledWith(["Full-time"])
    })

    it("navigates user to job results page to first page", async () => {
      const push = vi.fn()
      useRouter.mockReturnValue({ push })
      const props = createProps({
        header: "Job Types",
        uniqueValues: new Set(["Full-time"])
      })
      renderJobFiltersSidebarCheckboxGroup(props)

      const button = screen.getByRole("button", { name: /job types/i })
      await userEvent.click(button)

      const fullTimeCheckbox = screen.getByRole("checkbox", {
        name: /full-time/i
      })
      await userEvent.click(fullTimeCheckbox)

      expect(push).toHaveBeenCalledWith({ name: "JobResults" })
    })
  })
})
