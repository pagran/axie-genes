import { describe, expect, test } from 'vitest'
import parseGenes512 from '../src/genes512'
import testAxies from './test-axies.json'

const preparedAxies = testAxies.map((a) => {
  a.axie.parts = new Map(a.axie.parts)
  return a
})

describe('parseGenes512', () => {
  test.each(preparedAxies)('parseGenes512($axieId)', ({ genes512, axie }) => {
    const x = BigInt(genes512.x)
    const y = BigInt(genes512.y)

    const resultAxie = parseGenes512(x, y)
    expect(resultAxie).toStrictEqual(axie)
  })
})
