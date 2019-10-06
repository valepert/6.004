export enum Sign {
  None = "",
  Positive = "0",
  Negative = "1",
}


export class Integer {
  value = 0;
  sign = Sign.None;

  constructor(value: number, sign = Sign.None) {
    this.value = value;
    this.sign = sign;
  }

  public static fromBinary(value: string, signed = false): Integer {
    return signed ?
      this.fromSigned(value.slice(1), value.startsWith("1")) :
      this.fromUnsigned(value);
  }

  protected static fromSigned = (value: string, negative: boolean): Integer => {
    const sign = negative ? Sign.Negative : Sign.Positive;
    return new Integer(parseInt(value, 2), sign);
  };

  protected static fromUnsigned = (value: string): Integer => {
    return new Integer(parseInt(value, 2), Sign.None);
  };

  public isSigned(): boolean {
    return this.sign !== Sign.None;
  }

  public toBinary(): string {
    return this.sign + this.value.toString(2);
  }

  public toBool(): boolean[] {
    return this.toBinary().split("").map(x => x === "1" ? true : false);
  }

  public toHex(): string {
    return this.value.toString(16); // eslint-disable-line
  }
}
