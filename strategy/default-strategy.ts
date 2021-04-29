import { SalesStrategy } from './sales-strategy';

export class DefaultStrategy implements SalesStrategy {
    getDiscount(client: any): number {
        return 0;
    }
}
