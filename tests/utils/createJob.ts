import type { Job } from "@/api/types"

export const createJob = (job: Partial<Job> = {}): Job => ({
  id: 1,
  title: "Go Specialist",
  organization: "VueTube",
  degree: "Bachelor's",
  jobType: "Full-time",
  locations: ["Jacksonville"],
  minimumQualifications: ["Scale front-end models"],
  preferredQualifications: ["Iterate back-end web services"],
  description: ["Possible produce same drop admit."],
  dateAdded: "2021-01-04",
  ...job
})
