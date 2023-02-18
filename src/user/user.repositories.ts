import { User } from "@prisma/client";
import { UserData } from "./dtos/user-data.dto";

export interface UserRepos {
  save(userData: UserData): Promise<User>;
  alter(userData: UserData, registration: string): Promise<User>;
  delete(registration: string): Promise<void>;
  listAll(): Promise<User[]>;
  listById(registration: string): Promise<User | null>;
  listByEmail(email: string): Promise<User | null>;
}
