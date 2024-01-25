import { render, screen } from "@testing-library/vue"
import userEvent from "@testing-library/user-event"

import CollapsibleAccordian from "@/components/Shared/CollapsibleAccordian.vue"

describe("CollapsibleAccordian", () => {
  const renderCollapsibleAccordian = (config = {}) => {
    render(CollapsibleAccordian, {
      global: {
        stubs: {
          FontAwesomeIcons: true
        }
      },
      props: {
        header: "My Category"
      },
      slots: {
        default: "<h3>My nested child</h3>"
      },
      ...config
    })
  }

  it("renders child content", async () => {
    const props = { header: "My Category" }
    const slots = {
      default: "<h3>My nested child</h3>"
    }
    renderCollapsibleAccordian({ props, slots })

    expect(screen.queryByText("My nested child")).not.toBeInTheDocument()
    const button = screen.getByRole("button", { name: /my category/i })
    await userEvent.click(button)
    expect(screen.getByText("My nested child")).toBeInTheDocument()

    describe("when parent does not provide content", () => {
      it("renders default content", async () => {
        const props = { header: "My Category" }
        const slots = {}
        renderCollapsibleAccordian({ props, slots })

        const button = screen.getByRole("button", { name: /my category/i })
        await userEvent.click(button)
        expect(screen.getByText("default content")).toBeInTheDocument()
      })
    })
  })
})
