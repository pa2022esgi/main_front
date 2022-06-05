export enum UserRole {
  Teacher,
  Student
}

export class User {
  email?: string;
  password?: string;
  //role?: UserRole;
  role = UserRole.Teacher;
}
