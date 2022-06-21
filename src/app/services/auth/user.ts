export enum UserRole {
  Teacher=1,
  Student=2
}

export class User implements UserProps{
  email: string;
  password: string;
  role: UserRole;

  constructor(props : UserProps) {
    this.email = props.email;
    this.password = props.password;
    this.role = props.role;
  }

}

export interface UserProps {
  email: string;
  password: string;
  role: UserRole;
}
