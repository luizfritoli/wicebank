'use client'

import { act, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Card from '../components/main/Card'
import Principal from '../components/main/Principal'
import { User } from '@/lib/user'

const Page = () => {
  const router = useRouter()

  const [isLogged, setIsLogged] = useState(true)

  const actualUserStored = localStorage.getItem("actualUser")
  const actualUserParsed = actualUserStored ? JSON.parse(actualUserStored) : null

  if (actualUserParsed === null) {
    router.push("/login")
  }

  const actualUser = new User(actualUserParsed.user, actualUserParsed.email, actualUserParsed.password)

  useEffect(() => {
    const stored = localStorage.getItem('isLogged')
    setIsLogged(JSON.parse(stored || 'false'))
  }, [])

  useEffect(() => {
    if (!isLogged) {
      router.push('/login')
    }
  }, [isLogged])

  return (
    <section className="main">
      <Principal balance={actualUser.balance} />
      <Card title="Nome" desc="Conta corrente" />
      <Card title="Extrato" desc="Veja suas últimas transferências!" icon="extract" />
      <Card title="Transferir" desc="Deseja transferir seu saldo?" icon="transfer" />
      <Card title="Receber" desc="Receba dinheiro aqui!" icon="receive" />
      <Card title="Sair" desc="Encerre sua sessão." icon="leave" />
    </section>
  )
}

export default Page
