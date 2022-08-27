class BitReader {
  private readonly _value: bigint
  private _bitsLeft: number

  constructor(value: bigint, size: number) {
    this._value = value
    this._bitsLeft = size
  }

  private peek(size: number): number {
    const right = BigInt((1 << size) - 1)
    if (this._bitsLeft > size)
      return Number((this._value >> (BigInt(this._bitsLeft) - BigInt(size))) & right)
    return Number(this._value & right)
  }

  read(size: number): number {
    if (this._bitsLeft === 0)
      return -1

    const result = this.peek(size)
    if (this._bitsLeft > size) {
      this._bitsLeft -= size
      return result
    }
    this._bitsLeft = 0
    return result
  }
}

export default BitReader
