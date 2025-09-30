"use client"

import { AiOutlineRollback } from "react-icons/ai"
import { useRouter } from "next/navigation"

const FinishedTransfer = () => {

    const router = useRouter()

  return (
    <section className="transfer-section">
      <div className='transfer-area'>
        <h2>Transferência concluída!</h2>
        <AiOutlineRollback className="return-icon" onClick={() => router.push("/bank")} />
      </div>
    </section>
  )
}

export default FinishedTransfer
