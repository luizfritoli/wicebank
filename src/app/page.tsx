"use client"

import { useEffect, useState } from "react"
import Card from "./components/main/Card"
import { redirect } from "next/navigation"

const Page = () => {

  const [isLogged, setIsLogged] = useState<boolean>(true)
  useEffect(() => {
    if (!isLogged) {
      redirect("/login")
    }
  }, [])
  return (
    <section className="main">
      <Card title="Nome" desc="Conta corrente" />
      <Card title="Extrato" desc="Veja suas últimas transferências!" icon="extract" />
      <Card title="Transferir" desc="Deseja transferir seu saldo?" icon="transfer" />
      <Card title="Receber" desc="Receba dinheiro aqui!" icon="receive" />
      <Card title="Sair" desc="Encerre sua sessão." icon="leave" />
    </section>
  )
}

export default Page
