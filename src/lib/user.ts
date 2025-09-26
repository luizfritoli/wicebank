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

  get showName():string {
    return this.name
  }

  get showBalance(): number {
    return this.balance
  }
}
