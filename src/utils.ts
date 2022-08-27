import { CharacterClass } from './types'

function safeCharacterClassFromNumber(value: number): CharacterClass {
  if (value in CharacterClass)
    return value

  throw new Error(`Unknown value: ${value} for CharacterClass enum`)
}

export { safeCharacterClassFromNumber }
