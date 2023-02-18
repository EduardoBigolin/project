import { randomUUID } from "crypto";
import { UserData } from "../dtos/user-data.dto";
import { UserInput } from "../dtos/user-input.dto";

export class User {
  userData: UserData;
  constructor(userInput: UserInput) {
    try {
      this.validate(userInput);
      this.userData = {
        role: "USER",
        ...userInput,
        registration: randomUUID(),
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
  validate(userInput: UserInput) {
    this.validateEmail(userInput.email);
    this.validateName(userInput.name);
  }
  validateName(name: string) {
    if (!name) {
      throw new Error("Name is required");
    }
    const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!regex.test(name)) {
      throw new Error("Invalid name");
    }
  }
  validateEmail(email: string) {
    if (!email) {
      throw new Error("Email is required");
    }
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!regex.test(email)) {
      throw new Error("Invalid email");
    }
  }

  getValue(): UserData {
    return {
      role: this.userData.role,
      registration: this.userData.registration,
      name: this.userData.name,
      email: this.userData.email,
      photoFile: this.userData.photoFile,
    };
  }
}
