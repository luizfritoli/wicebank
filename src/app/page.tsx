"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Card from "./components/main/Card"
import Principal from './components/main/Principal'

const Page = () => {
     const [isLogged, setIsLogged] = useState(true)

     const router = useRouter()
     
    useEffect(() => {
      const stored = localStorage.getItem('isLogged')
      setIsLogged(JSON.parse(stored || 'false'))
     }, [])


  useEffect(() => {
     if (!isLogged) {
      router.push("/login")
     }
  }, [isLogged])

  return (
    <section className="main">
      <Principal />
      <Card title="Nome" desc="Conta corrente" />
      <Card title="Extrato" desc="Veja suas últimas transferências!" icon="extract" />
      <Card title="Transferir" desc="Deseja transferir seu saldo?" icon="transfer" />
      <Card title="Receber" desc="Receba dinheiro aqui!" icon="receive" />
      <Card title="Sair" desc="Encerre sua sessão." icon="leave" />
    </section>
  )
}

export default Page
