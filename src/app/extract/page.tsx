"use client"


import { useEffect } from "react"
import { useUser } from "@/context/UserContext"
import { AiOutlineRollback } from "react-icons/ai"
import { useRouter } from "next/navigation"

const Extract = () => {

    const router = useRouter()
    const { actualUser, setActualUser} = useUser()

    useEffect(() => {
        const stored = localStorage.getItem("actualUser")
        const actualUserObject = stored ? JSON.parse(stored) : null
        setActualUser(actualUserObject)
    }, [])
    console.log(actualUser)
  return (
    <div>
      <h1>Oi</h1>
      <ul>
<ul>
  {(actualUser?.extract ?? []).slice().reverse().map((t) =>
    t.type === "sent" ? (
      <li key={t.id}>
        - R${t.moneyTransfered} | {t.transferedTo} | Balanço: {t.actualBalance}
      </li>
    ) : (
      <li key={t.id}>
        + R${t.moneyReceived} | {t.transferedFrom} | Balanço: {t.actualBalance}
      </li>
    )
  )}

  {(actualUser?.extract ?? []).length === 0 && (
    <li>Nenhuma transação encontrada</li>
  )}
</ul>

      </ul>
      <AiOutlineRollback className="return-icon" onClick={() => router.push("/bank")} />
    </div>
  )
}

export default Extract
