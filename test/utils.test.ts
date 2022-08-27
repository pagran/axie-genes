import { describe, expect, test } from 'vitest'
import { CharacterClass } from '../src/types'
import { safeCharacterClassFromNumber } from '../src/utils'

describe('Valid CharacterClass values', () => {
  const allCharacterClasses = Object.keys(CharacterClass).map(e => Number.parseInt(e, 10)).filter(Number.isInteger)
  test.each(allCharacterClasses)('safeCharacterClassFromNumber($i)', (value) => {
    expect(safeCharacterClassFromNumber(value)).toBe(value)
  })
})

describe('Invalid CharacterClass values', () => {
  test.each([-1, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER])('safeCharacterClassFromNumber($i)', (value) => {
    expect(() => safeCharacterClassFromNumber(value)).toThrowError(/^Unknown value/)
  })
})
