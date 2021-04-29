import { ContextStrategy } from './context-strategy';
import { BlackfridayStrategy } from './blackfriday-strategy';
import { ChristmasStrategy } from './christmas-strategy';
import { DefaultStrategy } from './default-strategy';

type Campain = {
    promo: string,
    active: boolean
}
const promosDB: Campain[] = [
    { promo: 'christmas', active: false },
    { promo: 'blackfriday', active: false },
];

const strategies = {
    christmas: new ChristmasStrategy(),
    blackfriday: new BlackfridayStrategy(),
    default: new DefaultStrategy(),
};

async function run(client: any) {
    const active = promosDB.find((campain) => campain.active);
    const strategy = strategies[active?.promo] || strategies.default;

    const contextStrategy = new ContextStrategy(strategy);
    const result = await contextStrategy.getDiscount(client);

    return { strategy, result };
}

const client = { id: 1, name: 'john', age: 30 };
run(client).then((data) => {
    const { strategy, result } = data;
    console.info(
        `> Strategy: [${strategy.constructor.name}] | discount [${result}]`,
    );
}).catch((err) => console.error(err));
