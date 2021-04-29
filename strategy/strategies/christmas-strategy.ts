import { SalesStrategy } from './sales-strategy';

export class ChristmasStrategy implements SalesStrategy {
    getDiscount(client: any): number {
        return 10;
    }
}
