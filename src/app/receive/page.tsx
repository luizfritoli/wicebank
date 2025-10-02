'use client'
import { useEffect, useState } from 'react'
import { useUser } from '@/context/UserContext'
import { useRouter } from 'next/navigation'
import { User, UserData } from '@/lib/user'

const Receive = () => {
  const { actualUser, setActualUser, isLogged, setIsLogged } = useUser()
  const [usersArray, setUsersArray] = useState<UserData[]>([])
  const [money, setMoney] = useState<number>(0)

  const router = useRouter()

  useEffect(() => {
    const stored = localStorage.getItem('isLogged')
    const actualUserStored = localStorage.getItem('actualUser')
    const actualUserParsed = actualUserStored ? JSON.parse(actualUserStored) : null
    if (actualUserParsed === null) {
      router.push('/login')
      return
    }
    setActualUser(
      new User(
        actualUserParsed.name,
        actualUserParsed.email,
        actualUserParsed.password,
        actualUserParsed.balance,
      ),
    )
    setIsLogged(JSON.parse(stored || 'false'))
  }, [])

  useEffect(() => {
    const stored = localStorage.getItem('actualUser')
    const actualUserObject = stored ? JSON.parse(stored) : null
    setActualUser(actualUserObject)
    const users = localStorage.getItem('users')
    setUsersArray(users ? JSON.parse(users) : [])
  }, [])

  const getMoney = (): void => {
    if (!money) return
    if (!actualUser) {
      router.push('/initial-area')
      return
    }

    const updatedUsers = User.increaseBalance(actualUser, money, usersArray)
    setUsersArray(updatedUsers)
    setActualUser(actualUser)

    router.push('/finished-transfer')
  }
  return (
    <section className="transfer-section">
      <div className="transfer-area">
        <h2>Digite a quantidade de dinheiro que deseja receber:</h2>
        <div className="input-wrapper">
          <span className="prefix">R$ </span>
          <input
            type="number"
            className="transfer-value"
            onChange={(e) => setMoney(Number(e.target.value))}
          />
        </div>
        <button type="button" className="transfer-button" onClick={getMoney}>
          Receber
        </button>
      </div>
    </section>
  )
}

export default Receive
