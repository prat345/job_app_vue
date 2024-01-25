import usePrevAndNextPages from "@/composables/usePrevAndNextPages"
import { ref } from "vue"

describe("usePrevAndNextPages", () => {
  it("calculates page before current one", () => {
    const currentPage = ref(8)
    const countPage = ref(10)
    const { previousPage } = usePrevAndNextPages(currentPage, countPage)
    expect(previousPage.value).toBe(7)
  })

  it("calculates page after current one", () => {
    const currentPage = ref(8)
    const countPage = ref(10)
    const { nextPage } = usePrevAndNextPages(currentPage, countPage)
    expect(nextPage.value).toBe(9)
  })

  describe("when current page is 1", () => {
    it("does not provide previous page", () => {
      const currentPage = ref(1)
      const countPage = ref(2)
      const { previousPage } = usePrevAndNextPages(currentPage, countPage)
      expect(previousPage.value).toBeUndefined()
    })
  })

  describe("when current page is last page", () => {
    it("does not provide previous page", () => {
      const currentPage = ref(2)
      const countPage = ref(2)
      const { nextPage } = usePrevAndNextPages(currentPage, countPage)
      expect(nextPage.value).toBeUndefined()
    })
  })
})
