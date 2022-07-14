export enum UserRole {
  Teacher="professeur",
  Student="élève"
}

export class User {
  email: string;
  token: string;
  role: UserRole;
  id: string;
  firstname: string;
  lastname: string;

  constructor(props : {email: string, token: string, role: UserRole, id: string, firstname: string, lastname: string}) {
    this.email = props.email;
    this.role = props.role;
    this.token = props.token;
    this.id = props.id;
    this.firstname = props.firstname;
    this.lastname = props.lastname;
  }
}


