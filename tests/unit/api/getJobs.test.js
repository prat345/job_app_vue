import axios from "axios"

import getJobs from "@/api/getJobs"

// console.log(axios) // real axios
vi.mock("axios")
// console.log(axios) // mock axios

describe("getJobs", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          title: "Java Engineer"
        }
      ]
    })
  })
  it("fetches jobs from backend", async () => {
    await getJobs()
    expect(axios.get).toHaveBeenCalledWith("http://exampledomain.com/jobs")
  })

  it("extracts jobs from response", async () => {
    const data = await getJobs()
    expect(data).toEqual([{ id: 1, title: "Java Engineer" }])
  })
})
