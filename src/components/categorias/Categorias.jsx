import React from 'react'
import { useState } from 'react'

// Componentes
import BarraPesquisa from '../projetos/BarraPesquisa'
import Titulo from '../geral/Titulo'


export default function Categorias({categorias}) {
  const [pesquisa, setPesquisa] = useState('')
  console.log(typeof categorias)
  return (
    <div className='flex cursor-default flex-col items-center justify-center mb-25'>
        <div className="flex flex-col bg-white justify-center shadow-xl px-5 rounded-[20px] mb-25">
            <BarraPesquisa value={pesquisa} onChange={({ target }) => setPesquisa(target.value)} />
            <ul className='h-[400px] w-[540px] overflow-y-auto'>
                {categorias
                  .map((categoria) => (
                  <li className='flex font-bold text-[18px] mb-5 border-[1px] shadow-xl py-4 px-8'>
                    {categoria.nome}
                  </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
