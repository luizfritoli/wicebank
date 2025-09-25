export type UserData = {
  name: string
  email: string
  password: string
}

export class User {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public balance:number = 1000
  ) {}

  get nome(): string {
    return this.name
  }
}
