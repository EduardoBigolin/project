import { describe, it, expect } from "vitest";
import { User } from "./user.domain";
import { faker } from "@faker-js/faker";

describe("User Domain", async () => {
  it("Test if create a new user stance if all data is correct", () => {
    const outputName = faker.name.fullName();
    const outputEmail = faker.internet.email();
    const input = {
      name: outputName,
      email: outputEmail,
      photoFile: faker.internet.avatar(),
    };
    const result = new User(input).getValue();

    expect(result.name).toBe(outputName);
    expect(result.email).toBe(outputEmail);
  });

  it("Test if return new error if email incorrect", () => {
    expect(() =>
      new User({
        name: faker.name.firstName(),
        email: "test",
        photoFile: faker.internet.avatar(),
      }).getValue()
    ).toThrow("Invalid email");
    expect(() =>
      new User({
        name: faker.name.firstName(),
        email: null as any,
        photoFile: faker.internet.avatar(),
      }).getValue()
    ).toThrow("Email is required");
  });

  it("Test if return new error if name incorrect", () => {
    const outputName = "1";
    const outputEmail = faker.internet.email();
    const input = {
      name: outputName,
      email: outputEmail,
      photoFile: faker.internet.avatar(),
    };
    expect(() => new User(input).getValue()).toThrow("Invalid name");
    expect(() =>
      new User({
        name: null as any,
        email: faker.internet.email(),
        photoFile: faker.internet.avatar(),
      }).getValue()
    ).toThrow("Name is required");
  });
});
