import { describe, it, expect } from "vitest";
import { User } from "../domain/user.domain";
import { PrismaUserRepos } from "./Prisma.user.repos";
import { faker } from "@faker-js/faker";

describe("Prisma Repos", () => {
  const repos = new PrismaUserRepos();
  it("test if create a new user in db", async () => {
    const data = new User({
      email: faker.internet.email(),
      name: faker.name.firstName(),
      photoFile: faker.internet.avatar(),
    }).getValue();
    const user = await repos.save(data);

    expect(user.name).toBe(data.name);
    expect(user.email).toBe(data.email);
    expect(user.photoFile).toBe(data.photoFile);
    expect(user.registration).toBeTruthy();
  });
  it("test if alter user in db", async () => {
    const name = faker.name.firstName();
    const nameAlter = faker.name.firstName();
    const data = new User({
      email: faker.internet.email(name),
      name: name,
      photoFile: faker.internet.avatar(),
    }).getValue();
    const dataAlter = {
      ...data,
      name: nameAlter,
    };

    const user = await repos.save(data);
    const userAlter = await repos.alter(dataAlter, user.registration);

    expect(userAlter.email).toBe(data.email);
    expect(userAlter.photoFile).toBe(data.photoFile);
    expect(userAlter.name).toBe(nameAlter);
  });

  it("test if alter user in db", async () => {
    const input = new User({
      email: faker.internet.email(),
      name: faker.name.firstName(),
      photoFile: faker.internet.avatar(),
    }).getValue();

    const user = await repos.save(input);

    await repos.delete(user.registration);
    const userExist = await repos.listById(user.registration);

    expect(user.name).toBe(input.name);
    expect(userExist).toBe(null);
  });

  it("test if list all user in db", async () => {
    const input = new User({
      email: faker.internet.email(),
      name: faker.name.firstName(),
      photoFile: faker.internet.avatar(),
    }).getValue();

    await repos.save(input);
    const user = await repos.listAll();

    expect(user.length).toBeGreaterThan(2);
  });
});
