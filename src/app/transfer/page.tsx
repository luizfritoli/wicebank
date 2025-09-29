"use client"

import { useUser } from "@/context/UserContext"
import { UserData } from "@/lib/user"
import { AiOutlineRollback } from "react-icons/ai";
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const Transfer = () => {

    const router = useRouter()
    const { actualUser, setTransferTarget } = useUser()
    const [useToTransfer, setUserToTransfer] = useState<string>("")
    const [usersArray, setUsersArray] = useState<UserData[]>([])
    const [userNotFound, setUserNotFound] = useState<boolean>(false)

      useEffect(() => {
        const users = localStorage.getItem("users")
        setUsersArray(users ? JSON.parse(users) : [])
    }, [])

    const catchUseToTransfer = (email:string):void => {
        if (!email) return
        if (!actualUser) return          
        if (email === actualUser.email) return
      if (usersArray.find((user:UserData) => user.email === email)) {
        setUserNotFound(false) 
        setTransferTarget(email)
        router.push("/finish-transfer")
      } else {
        setUserNotFound(true)
      }
    }

  return (
    <section className="transfer-section">
      <div className="transfer-area">
        <h2>Digite o email da conta para qual deseja transferir</h2>
        <input type="email" className="transfer-input" onChange={(e) => setUserToTransfer(e.target.value)} required />
        <button type="button" className="transfer-button" onClick={() => catchUseToTransfer(useToTransfer)}>
          Transferir
        </button>
        {userNotFound && <span className="error-message">Não há nenhum usuário com este email.</span>}
        <AiOutlineRollback className="return-icon" onClick={() => router.push('/bank')} />
      </div>
    </section>
  )
}

export default Transfer
