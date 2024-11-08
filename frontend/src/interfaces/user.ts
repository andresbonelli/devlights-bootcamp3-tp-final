import { User } from "next-auth";

export interface ApiResponse {
  success: boolean;
}

export enum Role {
  CUSTOMER = "customer",
  STAFF = "staff",
  ADMIN = "admin",
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  password: string;
}

export interface UserFromDB extends User {
  id?: string;
  name?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  role?: Role | string | null;
  cart?: string | null;
}

export interface LoginResponse extends ApiResponse {
  payload: UserFromDB;
}
