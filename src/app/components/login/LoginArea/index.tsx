"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginArea = () => {
    const [isLogged, setIsLogged] = useState(false);

    const router = useRouter()

     useEffect(() => {
       const stored = localStorage.getItem('isLogged')
       setIsLogged(JSON.parse(stored || 'false'))
     }, [])

  useEffect(() => {
     if (isLogged) {
      router.push("/bank")
     }
  }, [])

  return (
    <div className="login-inputs">
      <form className="login-inputs">
        <input type="email" placeholder="Digite seu email" className="inf-input" />
        <input type="password" placeholder="Digite sua senha" className="inf-input" />
        <button type="button" className="form-button">Entrar</button>
        <span>Não tem uma conta? <Link href="/register" className="link-text">Registre-se aqui!</Link></span>
      </form>
    </div>
  );
}

export default LoginArea
