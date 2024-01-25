import nextElementInArr from "@/utils/nextElementInArr"

describe("nextElementInArr", () => {
  it("locates elment in list and returns the next element in arr", () => {
    const arr = ["A", "B", "C"]
    const value = "C"
    const result = nextElementInArr(arr, value)
    expect(result).toBe("A")
  })
})
