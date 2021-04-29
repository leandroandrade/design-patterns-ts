export interface SalesStrategy {
    getDiscount: (client: any) => number;
}
