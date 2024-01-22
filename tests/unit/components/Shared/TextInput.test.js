import { render, screen } from "@testing-library/vue"
import userEvent from "@testing-library/user-event" // simulate click, typing

import TextInput from "@/components/Shared/TextInput.vue"
import { expect } from "vitest"

describe("TextInput", () => {
  it("displays that user has enter input", async () => {
    const { emitted } = render(TextInput, {
      props: {
        modelValue: ""
      }
    })
    const input = screen.getByRole("textbox")
    await userEvent.type(input, "NYC") //'update:modelValue': [ [ 'N' ], [ 'NY' ], [ 'NYC' ] ]
    // console.log(emitted())
    const messages = emitted()["update:modelValue"]
    expect(messages).toEqual([["N"], ["NY"], ["NYC"]])
  })
})
