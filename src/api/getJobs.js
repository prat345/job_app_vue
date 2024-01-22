import axios from "axios"

const getJobs = async () => {
  const baseUrl = import.meta.env.VITE_SERVER_API
  const url = `${baseUrl}/jobs`
  const response = await axios.get(url)
  return response.data
}

export default getJobs
