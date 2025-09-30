"use client"

import { useEffect, useState } from "react"
import { UserData } from '@/lib/user'
import { useUser } from "@/context/UserContext"
import { useRouter } from "next/navigation"
import { AiOutlineRollback } from "react-icons/ai"

const FinishTransfer = () => {

      const router = useRouter()
      const [usersArray, setUsersArray] = useState<UserData[]>([])
      const [value, setValue] = useState<number>(0)
      const { actualUser, transferTarget, setActualUser } = useUser()
      const [errorMessage, setErrorMessage] = useState<string | null>(null)

        useEffect(() => {
          const users = localStorage.getItem('users')
          setUsersArray(users ? JSON.parse(users) : [])
        }, [])

const completeTransfer = (): void => {
  try {
    actualUser?.transferMoney(transferTarget!, usersArray, value)
    setErrorMessage(null)
    setActualUser(actualUser)
    router.push("/finished-transfer")
  } catch (error: any) {
    setErrorMessage(error.message)
  }
}

  return (
    <section className='transfer-section'>
    <div className='transfer-area'>
      <h2>Digite o valor que deseja transferir para <span>{transferTarget}</span></h2>
      <div className="input-wrapper">
      <span className="prefix">R$ </span>
      <input type="number" className="transfer-value" onChange={(e) => setValue(Number(e.target.value))} />
      </div>
      {errorMessage && <span className="error-message">{errorMessage}</span>}
        <button type="button" className="transfer-button" onClick={completeTransfer}>Transferir</button>
        <AiOutlineRollback className="return-icon" onClick={() => router.push("/transfer")} />
    </div>
    </section>
  )
}

export default FinishTransfer
