export enum UserRole {
  Teacher,
  Student
}

export class User {
  //role?: UserRole;
  role = UserRole.Teacher;
}
