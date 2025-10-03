"use client"

import Image from 'next/image'
import Link from 'next/link'
import { User } from '@/lib/user'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useUser } from '@/context/UserContext'

const InitialPage = () => {

  const router = useRouter()

  const { isLogged, setActualUser, setIsLogged } = useUser()

    useEffect(() => {
      const stored = localStorage.getItem('isLogged')
      setIsLogged(JSON.parse(stored || 'false'))
      const actualUserStored = localStorage.getItem('actualUser')
      const actualUserParsed = actualUserStored ? JSON.parse(actualUserStored) : null
      if (actualUserParsed) {
        router.push("/bank")
      }
    }, [])

    useEffect(() => {
      const users = localStorage.getItem("users")
      const usersParsed = users ? JSON.parse(users) : []
      if (usersParsed.length === 0 ) {
        const newUser = new User("Rodolfo Almeida Veiga", "rodolfoalga@hotmail.com", "kgssv6$$s&33AB")
        const newUserTwo = new User("Daniel Oliveira de Vieira", "danielzinho@hotmail.com", "mntrp4%%k@78CD")
        const newUserThree = new User("Ronaldo Braga dos Santos", "ronaldobraga@hotmail.com", "xvbg7&&h#12EF")
        const newUserFour = new User("Alice Menezes Santana", "alicemsantana@hotmail.com", "qplw9$$j!45GH")
        usersParsed.push(newUser, newUserTwo, newUserThree, newUserFour)
        localStorage.setItem("users", JSON.stringify(usersParsed))
      }
    }, [])
   
  return (
    <div className="initial">
      <div className="wice-start">
        <Image
          src="/wice-bank.png"
          alt="Logo do WiceBank"
          id="wice-initial-image"
          width={900}
          height={135}
          priority
        />
        <span>Precisa de facilidade? O WiceBank é o banco mais simples e seguro para você!</span>
      </div>
      <div>
      <div className="initial-options">
        <Link className="initial-button" href="/login">
          Entrar
        </Link>
        <Link className="initial-button" href="/register">
          Não tenho uma conta
        </Link>
      </div>
      <span className='wrapper'>
      <Link href="/how-works" className='link-text'>Como funciona o WiceBank?</Link>
      </span>
      </div>
    </div>
  )
}

export default InitialPage
