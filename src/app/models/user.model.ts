export enum UserRole {
  Teacher="professeur",
  Student="élève"
}

export class User {
  email?: string;
  password?: string;
  role?: UserRole;
}
