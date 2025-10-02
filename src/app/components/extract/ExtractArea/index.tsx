'use client'

import { useEffect } from 'react'
import { useUser } from '@/context/UserContext'

const ExtractArea = () => {
  const { actualUser, setActualUser } = useUser()

  useEffect(() => {
    const stored = localStorage.getItem('actualUser')
    const actualUserObject = stored ? JSON.parse(stored) : null
    setActualUser(actualUserObject)
  }, [])

  useEffect(() => {
    const isLogged = localStorage.getItem('isLogged')
  }, [])

  return (
    <ul className="extract-list">
      {(actualUser?.extract ?? [])
        .slice()
        .reverse()
        .map((t) =>
          t.type === 'sent' ? (
            <li key={t.id}>
              <span className="extract-date">
                <strong>{new Date(t.date).toLocaleDateString('pt-BR')}</strong>
              </span>
              <div className="extract-wrapper">
                <span className="money-transfered">- R$ {t.moneyTransfered}</span>
                <span><strong>Transferido para:</strong> {t.transferedTo}</span>
                <span><strong>Balanço:</strong> R$ {t.actualBalance.toFixed(2)}</span>
              </div>
            </li>
          ) : (
            <li key={t.id}>
              <span className="extract-date">
                <strong>{new Date(t.date).toLocaleDateString('pt-BR')}</strong>
              </span>
              <div className="extract-wrapper">
                <span className="money-received">+ R$ {t.moneyReceived}</span>
                <span><strong>Recebido de:</strong> {t.transferedFrom}</span>
                <span><strong>Balanço:</strong> R$ {t.actualBalance.toFixed(2)}</span>
              </div>
            </li>
          ),
        )}

      {(actualUser?.extract ?? []).length === 0 && <li>Nenhuma transação encontrada</li>}
    </ul>
  )
}

export default ExtractArea
