import { SalesStrategy } from './sales-strategy';

export class BlackfridayStrategy implements SalesStrategy {
    getDiscount(client: any): number {
        return 20;
    }
}
