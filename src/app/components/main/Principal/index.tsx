type Props = {
  balance: number
}

const Principal = ({ balance }: Props) => {
  return (
    <div className="principal">
      <span>IMAGEM DO WICEBANK</span>
      <span className="view-money">R$ {balance.toFixed(2)}</span>
    </div>
  )
}

export default Principal
