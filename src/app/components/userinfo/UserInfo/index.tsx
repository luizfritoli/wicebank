'use client'

import { useUser } from '@/context/UserContext'
import { AiOutlineRollback } from 'react-icons/ai'
import { useRouter } from 'next/navigation'

const UserInfo = () => {
  const router = useRouter()

  const { actualUser } = useUser()

  return (
    <div className="user-info-area">
      <div>
        <h1>Suas informações</h1>
        <p>
          <strong>Nome:</strong> {actualUser?.showName}
        </p>
        <p>
          <strong>Email:</strong> {actualUser?.showEmail}
        </p>
        <p>
          <strong>Saldo:</strong> R$ {actualUser?.showBalance.toFixed(2)}
        </p>
        <p>
          <strong>Tipo de conta:</strong> Corrente
        </p>
        <span className="extract-return-wrapper">
          <AiOutlineRollback className="return-icon" onClick={() => router.push('/bank')} />
        </span>
      </div>
    </div>
  )
}

export default UserInfo
