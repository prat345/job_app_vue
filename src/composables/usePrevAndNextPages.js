import { computed } from "vue"

const usePrevAndNextPages = (currentPage, countPage) => {
  const previousPage = computed(() => {
    const prevPage = currentPage.value - 1
    return prevPage >= 1 ? prevPage : undefined
  })

  const nextPage = computed(() => {
    const nextPage = currentPage.value + 1
    // const countPage = Math.ceil(FILTERED_JOBS.value.length / 10)
    // console.log(previousPage.value, nextPage, countPage)
    return nextPage <= countPage.value ? nextPage : undefined
  })

  return { previousPage, nextPage }
}

export default usePrevAndNextPages
