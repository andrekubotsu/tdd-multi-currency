export class Money {
  public amount: number | undefined

  equals (other: Money):boolean {
    return this.amount === other.amount
  }
}
