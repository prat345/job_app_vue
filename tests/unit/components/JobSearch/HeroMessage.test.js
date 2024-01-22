import { render, screen } from "@testing-library/vue"
// import { nextTick } from "vue"
import HeroMessage from "@/components/JobSearch/HeroMessage.vue"
import { afterEach } from "vitest"

describe("HeroMessage", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it("displays hero message", () => {
    render(HeroMessage)

    const messagePhrase = screen.getByRole("heading", {
      name: /build for everyone/i
    })
    expect(messagePhrase).toBeInTheDocument()
  })
  // check setInterval
  it("changes action verb at interval", () => {
    const mock = vi.fn()
    vi.stubGlobal("setInterval", mock)

    render(HeroMessage)

    expect(mock).toHaveBeenCalled()
  })

  // //
  // it("swaps action verb after interval", async () => {
  //   render(HeroMessage)
  //   vi.advanceTimersToNextTimer()

  //   await nextTick()
  //   const messagePhrase = screen.getByRole("heading", {
  //     name: /create for everyone/i
  //   })

  //   expect(messagePhrase).toBeInTheDocument()
  // })

  // it("removes interval when component disappears", () => {
  //   const clearInterval = vi.fn()
  //   vi.stubGlobal("clearInterval", clearInterval)

  //   const { unmount } = render(HeroMessage)
  //   unmount()
  //   expect(clearInterval).toHaveBeenCalled()
  //   vi.unstubAllGlobals()
  // })
})
