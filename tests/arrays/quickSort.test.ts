import { quickSort } from '../../algos/arrays&hashing/quickSort'

describe('quick sort', () => {
  test('empty array', () => {
    const array: number[] = []

    expect(quickSort(array)).toStrictEqual([])
  })

  test('base case array', () => {
    const array: number[] = [4, 7]

    expect(quickSort(array)).toStrictEqual([4, 7])
  })

  test('small array', () => {
    const array: number[] = [68, 17, 23]
    const sortedArray: number[] = [17, 23, 68]

    expect(quickSort(array)).toStrictEqual(sortedArray)
  })

  test('full array', () => {
    const array: number[] = [
      706, 440, 670, 431, 904, 354, 700, 379, 347, 38, 396, 712, 265, 970, 675, 245, 579, 542, 554,
      787,
    ]
    const sortedArray: number[] = [
      38, 245, 265, 347, 354, 379, 396, 431, 440, 542, 554, 579, 670, 675, 700, 706, 712, 787, 904,
      970,
    ]

    expect(quickSort(array)).toStrictEqual(sortedArray)
  })

  test('full array with copies', () => {
    const array: number[] = [
      706, 440, 670, 431, 904, 354, 700, 347, 347, 38, 396, 712, 265, 970, 675, 245, 579, 542, 579,
      787,
    ]
    const sortedArray: number[] = [
      38, 245, 265, 347, 347, 354, 396, 431, 440, 542, 579, 579, 670, 675, 700, 706, 712, 787, 904,
      970,
    ]

    expect(quickSort(array)).toStrictEqual(sortedArray)
  })
})
