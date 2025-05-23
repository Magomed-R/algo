export function quickSort(array: number[]): number[] {
  if (array.length < 2) return array
  if (array.length === 2) return array[0] > array[1] ? [array[1], array[0]] : array

  const smallerThan = []
  const biggerThan = []

  for (let i = 1; i < array.length; i++) {
    if (array[0] > array[i]) smallerThan.push(array[i])
    if (array[0] <= array[i]) biggerThan.push(array[i])
  }

  return [...quickSort(smallerThan), array[0], ...quickSort(biggerThan)]
}

