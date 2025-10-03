import RegisterForm from '../components/register/RegisterForm'
import Link from 'next/link'

const Register = () => {
  return (
    <section className="login-section">
      <div className="login-area">
        <RegisterForm />
          <span>
        Já tem uma conta?{' '}
        <Link href="/login" className="link-text">
          Entre aqui!
        </Link>
      </span>
      </div>
    </section>
  )
}

export default Register
