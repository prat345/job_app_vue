import { render, screen } from "@testing-library/vue"
import ActionButton from "@/components/Shared/ActionButton.vue"

describe("ActionButton", () => {
  it("render text", () => {
    render(ActionButton, {
      props: {
        text: "Click me",
        variant: "primary"
      }
    })

    const button = screen.getByRole("button", {
      name: /Click me/i
    })
    expect(button).toBeInTheDocument()
  })
})
