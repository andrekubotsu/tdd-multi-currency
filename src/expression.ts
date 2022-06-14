import { Bank } from './bank'
import { Money } from './money'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Expression {
    reduce: (bank: Bank, to: string) => Money
    plus: (addend: Expression) => Expression
    times: (multiplier: number) => Expression
}
