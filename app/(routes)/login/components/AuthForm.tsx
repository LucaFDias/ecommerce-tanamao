"use client";

import router from 'next/navigation';
import { useRouter } from 'next/navigation';
import { BsGithub, BsGoogle } from 'react-icons/bs'

import { useCallback, useEffect, useState }  from 'react'
import AuthSocialButton from './AuthSocialButton'
import { signIn, useSession } from "next-auth/react"
import Input from '@/app/components/ui/Input/Input';
import { Button } from 'reactstrap';
import error from 'next/error';

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const session = useSession()
  const [variant, setVariant] = useState<Variant>("LOGIN")
  
  useEffect(() => {
    if (session?.status === "authenticated") {
      console.log("Authenticated")
    }
  }, [session?.status, router])

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER")
    } else {
      setVariant("LOGIN")
    }
  }, [variant])
  
  
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6">
          {
          variant === "REGISTER" && 
            <Input id="name" label="Nome" placeholder='name' />
          }
          <Input id="email" label="E-mail" type="email" placeholder='Email'/>
          <Input id="password" label="Senha" type="password" placeholder='Senha'/>
          <div>
            <Button fullWidth type="submit">
              {variant === "LOGIN" ? "Acessar conta" : "Registrar conta"}
            </Button>
          </div>
        </form>
        {/* Credentials */}

        <div className="mt-6">
          <div className="relative">
            <div
              className="
                absolute
                inset-0
                flex
                items-center"
            >
              <div
                className="
                  w-full 
                  border-t
                border-x-gray-300"
              />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Ou continue com
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => {''}}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => {''}}
            />
          </div>
        </div>
        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant === "LOGIN"
              ? "Novo no Messenger?"
              : "Você já tem uma conta?"}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Crie uma conta" : "Login"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm