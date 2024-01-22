const nextElementInArr = (arr, value) => {
  const currentValueIndex = arr.indexOf(value)
  const nextValueIndex = (currentValueIndex + 1) % arr.length
  const nextValue = arr[nextValueIndex]
  return nextValue
}

export default nextElementInArr
