import { describe, expect, test } from 'vitest'
import { CharacterClass, PartList, PartType } from '../src/types'

describe('Types', () => {
  test('CharacterClass enum count must be 9', () => {
    expect(Object.keys(CharacterClass).length / 2).toStrictEqual(9)
  })
  test('PartList length must be 6', () => {
    expect(PartList.length).toStrictEqual(6)
  })

  test('PartList equal enums', () => {
    const enums = Object.keys(PartType).map(val => Number.parseInt(val, 10)).filter(Number.isInteger)
    expect(enums).toStrictEqual(PartList)
  })
})

