'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Card from '../components/main/Card'
import Principal from '../components/main/Principal'
import { User } from '@/lib/user'
import { UserData } from '@/lib/user'

const Page = () => {
  const router = useRouter()

  const [isLogged, setIsLogged] = useState(true)
  const [actualUser, setActualUser] = useState<UserData | null>(null)


  useEffect(() => {
    const stored = localStorage.getItem('isLogged')
    const actualUserStored = localStorage.getItem("actualUser")
    const actualUserParsed = actualUserStored ? JSON.parse(actualUserStored) : null
    if (actualUserParsed === null) {
    router.push("/login")
    return
   }
    setActualUser(new User(actualUserParsed.user, actualUserParsed.email, actualUserParsed.password, actualUserParsed.balance))
    setIsLogged(JSON.parse(stored || 'false'))
  }, [])


  useEffect(() => {
    if (!isLogged) {
      router.push('/login')
    }
  }, [isLogged])

  return (
    <section className="main">
      <Principal balance={actualUser?.balance ?? 0} />
      <Card title="Nome" desc="Conta corrente" />
      <Card title="Extrato" desc="Veja suas últimas transferências!" icon="extract" />
      <Card title="Transferir" desc="Deseja transferir seu saldo?" icon="transfer" />
      <Card title="Receber" desc="Receba dinheiro aqui!" icon="receive" />
      <Card title="Sair" desc="Encerre sua sessão." icon="leave" />
    </section>
  )
}

export default Page
