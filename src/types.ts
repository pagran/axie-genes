enum PartType {
  Eyes = 0,
  Mouth,
  Ears,
  Horn,
  Back,
  Tail,
}

enum CharacterClass {
  Beast = 0,
  Bug,
  Bird,
  Plant,
  Aquatic,
  Reptile,
  Mech = 16,
  Dawn,
  Dusk,
}

interface PartGroup {
  cls: CharacterClass
  value: number
}

interface Part {
  stage: number
  reservation: number
  skinInheritAbility: boolean
  skin: number
  groups: PartGroup[]
}

interface Axie {
  cls: CharacterClass
  bodySkin: number
  body: number[]
  primaryColors: number[]
  secondaryColors: number[]
  parts: Map<PartType, Part>
}

export const PartList = [PartType.Eyes, PartType.Mouth, PartType.Ears, PartType.Horn, PartType.Back, PartType.Tail]
export { PartType, CharacterClass, Axie, Part, PartGroup }
