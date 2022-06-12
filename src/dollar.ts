export class Dollar {
  amount: number = 10
  constructor (amount:number) {
    this.amount = amount
  }

  times (multiplier:number): Dollar {
    return new Dollar(this.amount * multiplier)
  }

  equals (other: Dollar):boolean {
    return this.amount === other.amount
  }
}
