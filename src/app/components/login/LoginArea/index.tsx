'use client'

import { useEffect, useState, useReducer } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { UserData } from '@/lib/user'
import { User } from '@/lib/user'

type UserState = {
  email: string;
  password: string;
  isValid: boolean | null;
};

type Action =
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "RESET" };


  const reducer = (state:UserState, action:Action):UserState => {
    switch(action.type) {
      case "SET_EMAIL":
        return { ...state, email: action.payload} 
      case "SET_PASSWORD":
       return { ...state, password: action.payload}
       case "RESET": 
       return { ...state, email: "", password: ""}
       default:
        return state
    }
  }

const LoginArea = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false)
  const [isInvalid, setIsInvalid] = useState<boolean>(false)
  const [state, dispatch] = useReducer(reducer, {
    email: "",
    password: "",
    isValid: null,
  })

  const router = useRouter()

  useEffect(() => {
    const stored = localStorage.getItem('isLogged')
    setIsLogged(JSON.parse(stored || 'false'))
    const users = localStorage.getItem("users")
    const usersArray = users ? JSON.parse(users) : []
    console.log(usersArray)
  }, [])

  useEffect(() => {
    if (isLogged) {
      router.push('/bank')
    }
  }, [])

  const login = ():void => {
    if (!state.email || !state.password) {
      setIsInvalid(false)
    }
    const users = localStorage.getItem("users")
    const usersArray = users ? JSON.parse(users) : []
    const verifyUser = usersArray.find((user:UserData) => user.email === state.email)

    if (verifyUser && verifyUser.password === state.password) {
      const actualUser = new User(verifyUser.user, verifyUser.email, verifyUser.password)
      localStorage.setItem("actualUser", JSON.stringify(verifyUser))
      setIsLogged(true)
      localStorage.setItem("isLogged", "true")
      router.push("/bank")
    } else {
      setIsInvalid(true)
      return
    }
  }

  return (
    <div className="login-inputs">
      <form className="login-inputs">
        <input
          type="email"
          placeholder="Digite seu email"
          className="inf-input"
          onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value})}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          className="inf-input"
          onChange={(e) => dispatch({ type: "SET_PASSWORD", payload: e.target.value})}
        />
        {isInvalid && <span className='error-message'>As informações estão incompletas/incorretas!</span>}
        <button type="button" className="form-button" onClick={login}>
          Entrar
        </button>
        <span>
          Não tem uma conta?{' '}
          <Link href="/register" className="link-text">
            Registre-se aqui!
          </Link>
        </span>
      </form>
    </div>
  )
}

export default LoginArea
