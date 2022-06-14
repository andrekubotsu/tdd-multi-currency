import { Money } from './money'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Expression {
    reduce: (to: string) => Money
}
