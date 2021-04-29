import { ContextStrategy } from './context-strategy';
import { ChristmasStrategy } from './strategies/christmas-strategy';
import { BlackfridayStrategy } from './strategies/blackfriday-strategy';
import { DefaultStrategy } from './strategies/default-strategy';

// change the attribute active to true and see the behavior
const promos = [
    { promo: 'christmas', active: false },
    { promo: 'blackfriday', active: false },
];

const strategies = {
    christmas: new ChristmasStrategy(),
    blackfriday: new BlackfridayStrategy(),
    default: new DefaultStrategy(),
};

async function run(client: any) {
    const active = promos.find((campain) => campain.active);
    const strategy = strategies[active?.promo] || strategies.default;

    const contextStrategy = new ContextStrategy(strategy);
    const discount = await contextStrategy.getDiscount(client);

    return { strategy: strategy.constructor.name, discount };
}

const client = { id: 1, name: 'john', age: 30 };
run(client)
    .then((data) => console.table(data))
    .catch((err) => console.error(err));
