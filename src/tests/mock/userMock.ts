import { faker } from "@faker-js/faker";

const users = [
  {
    email: faker.internet.email(),
    password: faker.internet.password(),
  },
  {
    email: faker.internet.email(),
    password: faker.internet.password(),
  },
];

export { users };
