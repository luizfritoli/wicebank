export type UserData = {
  name: string
  email: string
  password: string
  balance:number
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
