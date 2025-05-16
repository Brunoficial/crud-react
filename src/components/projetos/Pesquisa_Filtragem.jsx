import React from 'react'
import BarraPesquisa from './BarraPesquisa'
import Filtro from '../filtro/Filtro'

export default function Pesquisa_Filtragem({ categorias, filtroCategoria, setFiltroCategoria, pesquisa, setPesquisa, setOrdemAlfabetica, ordemAlfabetica }) {
  return (
    <div className="flex gap-x-[6px]">
        <BarraPesquisa value={pesquisa} onChange={({ target }) => setPesquisa(target.value)}/>
        <Filtro categorias = {categorias} filtroCategoria={filtroCategoria} setFiltroCategoria = {setFiltroCategoria} ordemAlfabetica={ordemAlfabetica} setOrdemAlfabetica={setOrdemAlfabetica}/>
    </div>
  )
}
