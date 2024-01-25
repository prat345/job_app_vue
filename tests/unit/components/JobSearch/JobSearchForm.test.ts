import { render, screen } from "@testing-library/vue"
import userEvent from "@testing-library/user-event"

import { useRouter } from "vue-router"
import type { Mock } from "vitest"
vi.mock("vue-router")

import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue"

const useRouterMock = useRouter as Mock

describe("JobSearchForm", () => {
  describe("when user submits form", () => {
    it("directs user to job results page with query params", async () => {
      const push = vi.fn()
      useRouterMock.mockReturnValue({ push })

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

      expect(push).toHaveBeenCalledWith({
        name: "JobResults",
        query: { role: "Vue Developer", location: "Bangkok" }
      })
    })
  })
})
