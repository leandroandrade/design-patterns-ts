import { ChristmasStrategy } from './christmas-strategy';
import { BlackfridayStrategy } from './blackfriday-strategy';
import { DefaultStrategy } from './default-strategy';
import { SalesStrategy } from './sales-strategy';

const promos = [
    { promo: 'christmas', active: false },
    { promo: 'blackfriday', active: true },
];

const strategies = {
    christmas: new ChristmasStrategy(),
    blackfriday: new BlackfridayStrategy(),
    default: new DefaultStrategy(),
};

export const getStrategySale = ():SalesStrategy => {
    const active = promos.find((campain) => campain.active);
    return strategies[active?.promo] || strategies.default;
};
