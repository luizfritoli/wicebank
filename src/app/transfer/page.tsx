"use client"

import { useUser } from "@/context/UserContext"
import { UserData } from "@/lib/user"
import { useEffect, useState } from "react"

const Transfer = () => {

    const { actualUser } = useUser()
    const [useToTransfer, setUserToTransfer] = useState<string>("")
    const [usersArray, setUsersArray] = useState<UserData[] | any>(null)

      useEffect(() => {
        const users = localStorage.getItem("users")
        setUsersArray(users ? JSON.parse(users) : [])
    }, [])

  return (
    <section>
      <input type="email" onChange={(e) => setUserToTransfer(e.target.value)} />
      <button type="button" onClick={() => actualUser?.transferMoney(useToTransfer, usersArray)}>Transferir</button>
    </section>
  )
}

export default Transfer
