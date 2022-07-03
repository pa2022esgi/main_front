export enum UserRole {
  Teacher="professeur",
  Student="élève"
}

export class User {
  email: string;
  token: string;
  role: UserRole;
  id: string;

  constructor(props : {email: string, token: string, role: UserRole, id: string}) {
    this.email = props.email;
    this.role = props.role;
    this.token = props.token;
    this.id = props.id;
  }
}


