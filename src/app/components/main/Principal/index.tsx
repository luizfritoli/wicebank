import Image from "next/image"

type Props = {
  balance: number
}

const Principal = ({ balance }: Props) => {
  return (
    <div className="principal">
      <span><Image src="/wice-bank.png" alt="Logo do WiceBank" id="bank-wice-img" width={900} height={135} /></span>
      <span className="view-money">R$ {balance.toFixed(2)}</span>
    </div>
  )
}

export default Principal
