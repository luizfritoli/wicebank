'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Card from '../components/main/Card'
import Principal from '../components/main/Principal'
import { User } from '@/lib/user'
import { useUser } from '@/context/UserContext'

const Page = () => {
  const router = useRouter()

  const [isLogged, setIsLogged] = useState(true)
  const { actualUser, setActualUser } = useUser()


  useEffect(() => {
    const stored = localStorage.getItem('isLogged')
    const actualUserStored = localStorage.getItem("actualUser")
    const actualUserParsed = actualUserStored ? JSON.parse(actualUserStored) : null
    if (actualUserParsed === null) {
    router.push("/login")
    return
   }
    setActualUser(new User(actualUserParsed.name, actualUserParsed.email, actualUserParsed.password, actualUserParsed.balance))
    setIsLogged(JSON.parse(stored || 'false'))
  }, [])


  useEffect(() => {
    if (!isLogged) {
      router.push('/login')
    }
  }, [isLogged])

    const goToUserInfo = () => {
    router.push("/userinfo")
  }

    const goToTransfer = () => {
      router.push("/transfer")
    }

  return (
    <section className="main">
      <Principal balance={actualUser?.showBalance ?? 0} />
      <Card title={actualUser?.showName ?? "No name"} desc="Conta corrente" onClick={goToUserInfo} />
      <Card title="Extrato" desc="Veja suas últimas transferências!" icon="extract" onClick={goToTransfer} />
      <Card title="Transferir" desc="Deseja transferir seu saldo?" icon="transfer" onClick={goToTransfer} />
      <Card title="Receber" desc="Receba dinheiro aqui!" icon="receive" onClick={goToUserInfo} />
      <Card title="Sair" desc="Encerre sua sessão." icon="leave" onClick={goToUserInfo} />
    </section>
  )
}

export default Page
