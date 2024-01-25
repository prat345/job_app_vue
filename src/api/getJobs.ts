import axios from "axios"
import type { Job } from "@/api/types"

const getJobs = async () => {
  const baseUrl = import.meta.env.VITE_SERVER_API
  const url = `${baseUrl}/jobs`
  const response = await axios.get<Job[]>(url)
  return response.data
}

export default getJobs
