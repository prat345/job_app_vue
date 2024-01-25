import axios from "axios"
import type { Mock } from "vitest"
import getJobs from "@/api/getJobs"

// console.log(axios) // real axios
vi.mock("axios")
const axiosGetMock = axios.get as Mock
// console.log(axios) // mock axios

describe("getJobs", () => {
  beforeEach(() => {
    axiosGetMock.mockResolvedValue({
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
    expect(axiosGetMock).toHaveBeenCalledWith("http://exampledomain.com/jobs")
  })

  it("extracts jobs from response", async () => {
    const data = await getJobs()
    expect(data).toEqual([{ id: 1, title: "Java Engineer" }])
  })
})
