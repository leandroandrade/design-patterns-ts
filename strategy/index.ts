import { ContextStrategy } from './context-strategy';
import { ChristmasStrategy } from './strategies/christmas-strategy';
import { BlackfridayStrategy } from './strategies/blackfriday-strategy';
import { DefaultStrategy } from './strategies/default-strategy';

// estrategias de vendas definidas pelo RH para descontos.
const promos = [
    { promo: 'christmas', active: false },
    { promo: 'blackfriday', active: false },
];

// caso exista a necessidade de mais uma estrategia, basta adicionar o comporamento no array abaixo.
const strategies = {
    christmas: new ChristmasStrategy(),
    blackfriday: new BlackfridayStrategy(),
    default: new DefaultStrategy(),
};

async function run(client: any) {
    const active = promos.find((campain) => campain.active);

    // caso todas as estrategias estejam desativadas, utilizamos a estrategia default
    const strategy = strategies[active?.promo] || strategies.default;

    const contextStrategy = new ContextStrategy(strategy);
    const discount = await contextStrategy.getDiscount(client);

    return { strategy: strategy.constructor.name, discount };
}

const client = { id: 1, name: 'john', age: 30 };
run(client)
    .then((data) => console.table(data))
    .catch((err) => console.error(err));
