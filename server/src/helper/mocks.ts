import { faker } from '@faker-js/faker';

export function createRandomEvent() {
    return {
        _id: faker.string.uuid(),
        event: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        id: faker.string.sample(),
        image: faker.image.url(),
        category: faker.string.uuid(),
        admin: faker.string.uuid(),
        status: faker.string.uuid(),
        competitors: faker.helpers.arrayElements(['cat', 'dog', 'mouse']),
        teams: faker.helpers.arrayElements([1, 2, 3, 4, 5], 2),
        matchs: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
        comments: faker.helpers.arrayElements(['Comment', 'Comment2', 'Comment3'])
    };
}

export const EVENTS = faker.helpers.multiple(createRandomEvent, {
    count: 25,
});