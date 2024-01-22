import "@testing-library/jest-dom/vitest"
import { cleanup } from "@testing-library/vue"
import { afterEach } from "vitest"

// run after every test, cleanup prev dom
afterEach(() => {
  cleanup()
})
