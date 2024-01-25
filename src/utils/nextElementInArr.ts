const nextElementInArr = <T>(arr: T[], value: T) => {
  const currentValueIndex = arr.indexOf(value)
  const nextValueIndex = (currentValueIndex + 1) % arr.length
  const nextValue = arr[nextValueIndex]
  return nextValue
}

export default nextElementInArr
