import Link from 'next/link';

const LoginArea = () => {
  return (
    <div className="login-inputs">
      <form className="login-inputs">
        <input type="email" placeholder="Digite seu email" className="inf-input" />
        <input type="password" placeholder="Digite sua senha" className="inf-input" />
        <button type="button" className="form-button">Validate</button>
      </form>
      <span>Não tem uma conta? <Link href="/register" className="link-text">Registre-se aqui.</Link></span>
    </div>
  );
}

export default LoginArea
