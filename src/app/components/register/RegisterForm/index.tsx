"use client"

import { User } from "@/lib/user";
import { UserData } from "@/lib/user";
import { useForm } from "react-hook-form";
import { AiFillAlert } from "react-icons/ai";
import { useState } from "react";
import { redirect } from "next/navigation";

type FormData = {
  name: string
  email: string
  password: string
  confirmPassword: string
}
const RegisterForm = () => {

    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm<FormData>()

    const [sameEmail, setSameEmail] = useState<boolean>(false)

    const onSubmit = (data: FormData): void => {

    const usersString = localStorage.getItem("users")
      const usersArray = usersString ? JSON.parse(usersString) : [];

      if (usersArray.find((user:UserData) => user.email === data.email)) {
        setSameEmail(true)
        return
      }

      setSameEmail(false)
      const newUser = new User(data.name, data.email, data.password)

      usersArray.push(newUser)

      localStorage.setItem("users", JSON.stringify(usersArray))
      
      redirect("/login")
    }
    
  return (
    <form className="login-inputs">
        <p className="form-warn"><strong>ATENÇÃO:</strong> Por se tratar de um projeto pessoal, 
        dados sensíveis não serão necessários. Ao mesmo tempo, não necessário
         colocar uma senha real.</p>
      <input
        type="text"
        className="inf-input"
        placeholder="Nome completo"
        {...register('name', { required: true, minLength: 5 })}
      />
      {errors?.name?.type === 'required' && (
        <span className="error-message">
          <AiFillAlert /> O nome é obrigatório.
        </span>
      )}
      {errors?.name?.type === 'minLength' && (
        <span className="error-message">
          <AiFillAlert /> O nome é muito curto.
        </span>
      )}
      <input
        type="email"
        className="inf-input"
        placeholder="Email"
        {...register('email', { required: true, minLength: 6, pattern: {
            value:  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Email inválido!"
        } })}
      />
      {errors?.email?.type === 'required' && (
        <span className="error-message">
          <AiFillAlert /> O email é obrigatório.
        </span>
      )}
      {errors?.email?.type === 'minLength' && (
        <span className="error-message">
          <AiFillAlert /> O email é muito curto.
        </span>
      )}
      {errors?.email?.type === "pattern" && (
        <span>
            <AiFillAlert /> Email inválido!
        </span>
      )
      }
      <input
        type="password"
        className="inf-input"
        placeholder="Senha"
        {...register('password', {
          required: true,
          pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#%])[0-9a-zA-Z$*&@#()¨%]{8,}$/,
            message: 'Sua senha deve conter ao menos:',
          },
        })}
      />
      {errors?.password?.type === 'required' && (
        <span className="error-message">
          <AiFillAlert /> A senha é obrigatória.
        </span>
      )}
      {errors?.password?.type === 'pattern' && (
        <span className="error-message">
          <AiFillAlert /> {errors.password.message} <strong>UMA LETRA MAIÚSCULA</strong>,
          <strong>UM CARACTERE ESPECIAL</strong> e no mínimo <strong>8 (OITO) CARACTERES</strong>.
        </span>
      )}
      <input
        type="password"
        className="inf-input"
        placeholder="Confirmação da senha"
        {...register('confirmPassword', {
          required: true,
          validate: (value) => value === watch('password') || 'As senhas não coincidem.',
        })}
      />
      {errors?.confirmPassword?.type === 'required' && (
        <span className="error-message">
          <AiFillAlert /> Confirme a senha.
        </span>
      )}
      {errors?.confirmPassword?.type === 'validate' && (
        <span className="error-message">
          <AiFillAlert /> As senhas não coincidem.
        </span>
      )}
      {sameEmail && <span className="error-message">Um usuário já utiliza este email.</span>}
      <button type="button" className="form-button" onClick={() => handleSubmit(onSubmit)()}>
        Registrar
      </button>
    </form>
  )
}

export default RegisterForm
