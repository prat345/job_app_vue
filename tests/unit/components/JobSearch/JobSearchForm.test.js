import { render, screen } from "@testing-library/vue"
import userEvent from "@testing-library/user-event"

import { useRouter } from "vue-router"
vi.mock("vue-router")

import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue"

describe("JobSearchForm", () => {
  describe("when user submits form", () => {
    it("directs user to job results page with query params", async () => {
      const push = vi.fn()
      useRouter.mockReturnValue({ push })

      render(JobSearchForm, {
        global: {
          stubs: {
            FontAwesomeIcons: true
          }
        }
      })
      const roleInput = screen.getByRole("textbox", {
        name: /role/i
      })
      await userEvent.type(roleInput, "Vue Developer")

      const locationInput = screen.getByRole("textbox", {
        name: /where?/i
      })
      await userEvent.type(locationInput, "Bangkok")

      const submitButton = screen.getByRole("button", {
        name: /search/i
      })
      await userEvent.click(submitButton)

      expect(push).toHaveBeenCalled({
        name: "JobResults",
        query: { role: "Vue Developer", location: "Bangkok" }
      })
    })
  })
})
