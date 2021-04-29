import { SalesStrategy } from './sales-strategy';

export class ContextStrategy {
    constructor(private readonly salesStrategy: SalesStrategy) {}

    async getDiscount(client: any) {
        return this.salesStrategy.getDiscount(client);
    }
}
