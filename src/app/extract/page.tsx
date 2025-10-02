'use client'

import { AiOutlineRollback } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import ExtractArea from '../components/extract/ExtractArea'
import { useEffect } from 'react'
import { useUser } from '@/context/UserContext'

const Extract = () => {
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
    <section className="extract-section">
      <div className="extract-area">
        <h2>Histórico de transferências</h2>
        <ExtractArea />
        <AiOutlineRollback className="return-icon" onClick={() => router.push('/bank')} />
      </div>
    </section>
  )
}

export default Extract
