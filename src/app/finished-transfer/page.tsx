'use client'

import { AiOutlineRollback } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useUser } from '@/context/UserContext'

const FinishedTransfer = () => {
  const router = useRouter()
  const { setIsLogged } = useUser()

  useEffect(() => {
    const storedIsLogged = localStorage.getItem('isLogged')
    const parsedIsLogged = storedIsLogged ? JSON.parse(storedIsLogged) : false
    if (!parsedIsLogged) {
      router.push('/login')
      return
    }
    setIsLogged(parsedIsLogged)
  })

  return (
    <section className="transfer-section">
      <div className="transfer-area">
        <h2>Transferência concluída!</h2>
        <AiOutlineRollback className="return-icon" onClick={() => router.push('/bank')} />
      </div>
    </section>
  )
}

export default FinishedTransfer
