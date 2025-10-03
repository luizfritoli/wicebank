import Link from "next/link"
import { AiOutlineRollback } from "react-icons/ai"

const HowWorks = () => {
  return (
    <section className="how-works-section">
      <div className="how-works-area">
        <h2>Saiba mais sobre o WiceBank</h2>
        <h3>O que é o WiceBank?</h3>
        <p>
          O WiceBank é uma simulação de um banco digital, onde se possui funções como transferir
          saldo, receber saldo e ver o histórico das transações, com as mesmas sendo simples e
          intuitivas, podendo ser facilmente executadas pelo usuário.
        </p>
        <h3>Como interagir com o WiceBank?</h3>
        <p>
          Ao voltar para a seção inicial, é possível clicar em "Entrar", caso já tenha uma conta
          registrada, ou, "Não tenho uma conta", caso não tenha uma conta. Ao clicar em um dos
          botões, será redirecionado para um formulário, onde basta preencher as informações para
          registrar ou entrar.
        </p>
        <p>
          Ao colocar as informações no formulário para entrar, o usuário será redirecionado ao
          banco, onde poderá executar as funcionalidades simples de um banco digital, como
          transferir, receber e ver extrato.
        </p>
        <p>
          Para sair, ou mudar de conta (para testar funcionalidades da aplicação), basta clicar no
          último card do banco "Sair". Assim, o usuário será redirecionado para a área de entrar,
          local onde poderá entrar com outra conta para analisar funcionalidades.
          <br />
        </p>
        <p>
          <span className="alert">ATENÇÃO: </span> Ao colocar sua senha ou email, não é necessário
          colocar dados reais. Pois como se trata de uma simulação de banco, dados fictícios são o
          suficiente.
        </p>
        <h3>Funcionalidades do WiceBank</h3>
        <p>
          <strong>Transferir:</strong> É possível transferir o saldo para outros usuários,
          utilizando o email. Disponível na opção transferir.
        </p>
        <p>
          <strong>Receber:</strong> Na opção receber, o usuário especifica quanto de saldo fictício
          ele quer receber.
        </p>
        <p>
          <strong>Extrato:</strong> A funcionalidade extrato permite ao usuário ver o histórico de
          transferências ou recebimentos.
        </p>
        <h3>Particularidades do WiceBank</h3>
        <p>
          O WiceBank foi criado por Luiz Fritoli, visando ampliar conhecimentos sobre lógica de
          programação, persistência de informações com <strong>LocalStorage</strong> (ou seja, todas
          as informações salvas da aplicação estão no localStorage) e praticar as linguagens{' '}
          <strong>Next.js</strong> e <strong>TypeScript</strong>.
        </p>
        <p>
          Então, é possível criar outra conta fictícia, para comprovar que o saldo fictício é
          transferido e fica registrado no extrato de quem recebeu.
        </p>
        <h3>Usuários fictícios para transferir dinheiro</h3>
        <p>rodolfoalga@hotmail.com</p>
        <p>danielzinho@hotmail.com</p>
        <p>ronaldobraga@hotmail.com</p>
        <p>alicemsantana@hotmail.com</p>
        <span id="wrapper">
          <Link href="/">
            <AiOutlineRollback className="return-icon" />
          </Link>
        </span>
      </div>
    </section>
  )
}

export default HowWorks
