import React from 'react'
import Titulo from '../components/geral/Titulo'

export default function AuthPagina() {
  return (
    <div className='flex flex-col items-center justify-center bg-body h-screen'>
      <div className='grid grid-cols-2 justify-center items-center my-4'>
        <div className='flex flex-col h-full bg-white rounded-l-[12px] shadow-2xl px-30 py-20 gap-y-8'>
          <Titulo>Login</Titulo>
          <input type="text" placeholder='Insira seu nome:' className='border-[1px] px-3 py-1 rounded-[6px]' />
          <input type="password" placeholder='Insira sua senha:' className='border-[1px] px-3 py-1 rounded-[6px]' />
          <button className="flex justify-center items-center rounded-[6px] px-4 py-2 bg-laranja cursor-pointer font-bold text-white gap-[5px] mb-[16px] hover:bg-red-500 hover:rounded-[0px] duration-200">
            Fazer login
          </button>
        </div>
        <div className='flex flex-col rounded-r-[12px] items-center bg-gradient-to-t from-laranja to-orange-400 px-20 py-20'>
          <p className='text-[48px] text-white font-bold'>Bem vindo!</p>
          <p className='flex justify-center items-center text-gray-100 mb-34 font-bold'>Ainda não tem uma conta?</p>
          <button className='flex justify-center items-center rounded-[6px] px-4 py-2 bg-white cursor-pointer font-bold text-laranja gap-[5px] mb-[16px] hover:bg-black hover:text-white hover:rounded-[0px] duration-500'>Fazer Cadastro</button>
        </div>
      </div>
    </div>
  )
}
