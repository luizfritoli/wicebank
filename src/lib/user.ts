import { redirect } from "next/navigation"

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

  get showEmail():string {
    return this.email
  }

  transferMoney(email: string, users: UserData[], money: number): void {
  if (!email) throw new Error("Usuário destinatário não informado")
  const recipient = users.find(u => u.email === email)
  if (!recipient) throw new Error("Usuário não encontrado")
  if (money <= 0) throw new Error("Valor inválido")
  if (this.balance < money) throw new Error("Saldo insuficiente")


  recipient.balance += money


  const sender = users.find(u => u.email === this.email)
  if (sender) sender.balance = this.balance - money
  this.balance -= money


  localStorage.setItem("users", JSON.stringify(users))
}
}
