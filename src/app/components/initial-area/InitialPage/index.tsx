import Image from "next/image"
import { redirect } from "next/navigation"
import Link from "next/link"

const InitialPage = () => {
  return (
    <div className="initial">
      <div className="wice-start">
        <Image
          src="/wice-bank.png"
          alt="Logo do WiceBank"
          id="wice-initial-image"
          width={100}
          height={40}
          priority
        />
        <span>Precisa de facilidade? O WiceBank é o banco mais simples e seguro para você!</span>
      </div>
      <div className="initial-options">
        <Link className="initial-button" href="/login">
          Entrar
        </Link>
        <Link className="initial-button" href="/register">
          Não tenho uma conta
        </Link>
      </div>
    </div>
  )
}

export default InitialPage
