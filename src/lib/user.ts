import { v4 as uuidv4 } from "uuid"

interface Extract {
  id:string,
  type: "sent" | "received"
  moneyTransfered?:number
  moneyReceived?:number
  transferedTo?:string
  transferedFrom?:string
  actualBalance:number
}

export type UserData = {
  name: string
  email: string
  password: string
  balance:number
  extract: Extract[]
}

export class User {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public balance:number = 1000,
    public extract:Extract[] = []
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

  transferMoney(email: string, users: UserData[], money: number): UserData[] {
    const senderIndex = users.findIndex((u) => u.email === this.email)
    const recipientIndex = users.findIndex((u) => u.email === email)

    if (senderIndex === -1 || recipientIndex === -1) throw new Error('Usuário não encontrado')
    if (money <= 0) throw new Error('Valor inválido')
    if (users[senderIndex].balance < money) throw new Error('Saldo insuficiente')

    // atualiza saldos
    users[senderIndex].balance -= money
    users[recipientIndex].balance += money

    // cria transações
    const sentTx: Extract = {
      id: uuidv4(),
      type: 'sent',
      moneyTransfered: money,
      transferedTo: email,
      actualBalance: users[senderIndex].balance,
    }

    const receivedTx: Extract = {
      id: uuidv4(),
      type: 'received',
      moneyReceived: money,
      transferedFrom: this.email,
      actualBalance: users[recipientIndex].balance,
    }

    // adiciona ao extrato
    users[senderIndex].extract = [...(users[senderIndex].extract ?? []), sentTx]
    users[recipientIndex].extract = [...(users[recipientIndex].extract ?? []), receivedTx]

    // salva no localStorage
    localStorage.setItem('users', JSON.stringify(users))
    localStorage.setItem('actualUser', JSON.stringify(users[senderIndex]))

    return users
  }
}
