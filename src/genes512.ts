import { PartList } from './types'
import type { Axie, Part, PartGroup, PartType } from './types'
import BitReader from './bit-reader'
import { safeCharacterClassFromNumber } from './utils'

function readTriple(reader: BitReader, size: number): number[] {
  return [
    reader.read(size),
    reader.read(size),
    reader.read(size),
  ]
}

function parseGenes512(x: bigint, y: bigint): Axie {
  const genes = (x << BigInt(256)) | y
  const reader = new BitReader(genes, 512)

  const cls = safeCharacterClassFromNumber(reader.read(5))
  reader.read(45 + 5 + 1) // skip

  const bodySkin = reader.read(9)
  const body = readTriple(reader, 9)
  const primaryColors = readTriple(reader, 6)
  const secondaryColors = readTriple(reader, 6)

  const parts = new Map<PartType, Part>()

  for (let i = 0; i < PartList.length; i++) {
    const partType = PartList[i]
    const stage = reader.read(2)
    const reservation = reader.read(13)
    const skinInheritAbility = reader.read(1) !== 0
    const skin = reader.read(9)

    const groups: PartGroup[] = []
    for (let y = 0; y < 3; y++) {
      const partCls = safeCharacterClassFromNumber(reader.read(5))
      const value = reader.read(8)
      groups.push({ cls: partCls, value })
    }

    parts.set(partType, { stage, reservation, skinInheritAbility, skin, groups })
  }

  return { cls, bodySkin, body, primaryColors, secondaryColors, parts }
}

export default parseGenes512
