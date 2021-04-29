import { ContextStrategy } from './context-strategy';
import { getStrategySale } from './database';

async function run(client: any) {
    const strategy = getStrategySale();

    const contextStrategy = new ContextStrategy(strategy);
    const discount = await contextStrategy.getDiscount(client);
    return { strategy: strategy.constructor.name, discount };
}

const client = { id: 1, name: 'john', age: 30 };
run(client)
    .then((data) => console.table(data))
    .catch((err) => console.error(err));
