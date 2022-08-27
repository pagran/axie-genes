import { describe, expect, test } from 'vitest'
import BitReader from '../src/bit-reader'

describe('BitReader', () => {
  test.each([
    { value: '10101000', size: 8, num: 1, expected: '1' },
    { value: '10101000', size: 8, num: 5, expected: '10101' },
    { value: '10101000', size: 8, num: 8, expected: '10101000' },
    { value: '10101000', size: 8, num: 99, expected: 0 },
    { value: '1', size: 8, num: 7, expected: '0000000' },
    { value: '1', size: 0, num: 1, expected: -1 },
  ])('read($value, $num) -> $expected', ({ value, size, num, expected }) => {
    const expectedResult = typeof expected == 'string' ? Number.parseInt(expected, 2) : expected

    const reader = new BitReader(BigInt(`0b${value}`), size)

    const result = reader.read(num)
    expect(result).toBe(expectedResult)
  })
})
