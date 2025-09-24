import Image from "next/image"

const InitialPage = () => {
  return (
    <div className="initial">
      <div className='wice-start'>
        <Image src="/wice-bank.png" alt="Logo do WiceBank" id="wice-initial-image" width={100} height={40} />
        <span>Precisa de facilidade? O WiceBank é o banco mais simples e seguro para você!</span>
      </div>
      <div className='initial-options'>
        <button className='initial-button'>Entrar</button>
        <button className='initial-button'>Não tenho uma conta</button>
      </div>
    </div>
  )
}

export default InitialPage
