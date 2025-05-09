import Titulo from "./Titulo.jsx"
import circulo_laranja from "../assets/icons/circulo_laranja.svg"
import seta_baixo_branca from "../assets/icons/seta_baixo_branca.svg"
import { useNavigate } from "react-router-dom";
import search from "../assets/icons/search.svg"
import filter from "../assets/icons/filter.svg"
import { useState } from "react";

function Projects( {projects} ) {
    const navigate = useNavigate()
    const [pesquisa, setPesquisa] = useState("")
    const filtros = ['Categoria']
    const [filtro, setFiltro] = useState("")

    
    function OnProjectClick(projeto) {
        const query = new URLSearchParams()
        query.set("nome", projeto.nome)
        query.set("categoria", projeto.categoria)

        navigate(`/projetos/projeto?${query.toString()}`)
    }
    
    return (
        <div className="flex flex-col items-center justify-center">
            <Titulo> Seus Projetos</Titulo>
            <hr className="border-t-1 border-laranja my-4 w-full" />
            <div className="flex gap-x-[6px]">
                <div className="flex border-[1px] gap-[10px] rounded-[4px] border-cinza w-[522px] h-[40px] px-2 text-laranja">
                    <img className="w-[24px]" src = { search } alt="" />
                    <input 
                        value = { pesquisa }
                        onChange = {(event) => setPesquisa(event.target.value) }
                        placeholder="Pesquisar Projeto"
                        type="text" 
                        className="w-full focus:outline-0 "
                        />
                </div>
                <div 
                    className="flex border-[1px] gap-[10px] rounded-[4px] border-cinza w-[314px] h-[40px] px-2 text-laranja">
                    <img src = { filter } className="w-[24px]" alt="" />
                    <select
                        onChange = {(event) => setFiltro(event.target.value)  }
                        >
                        <option value="">Nenhum Filtro</option>
                        {filtros.map((filtroNome) => (
                        <option value = {filtroNome} > {filtroNome} </option>
                    ))}
                    </select>
                </div>
                
            </div>
            
            
            <ul>
                {projects
                .filter((project) => 
                    pesquisa === "" || 
                    project.nome.toLowerCase().trim().includes(pesquisa.toLowerCase().trim()))
                
                .map((project) => (
                <li key = { project.id } className="flex w-[880px] h-[80px] px-[40px] bg-white drop-shadow-xl items-center mt-[20px] mb-[30px] justify-between">                    
                    <div className="flex justify-center gap-15 items-center">             
                        <p className="font-bold text-[25px]">{project.nome}</p>
                        <p className="text-[20px]"> 0 tarefas </p>
                        <p className={`text-[20px] ${project.ativo ?  "text-verde-ativo":'text-red-600'}`} > { project.ativo? "Ativo" : "Pendente" } </p>
                        <p className="text-[20px]"> { project.categoria } </p>
                    </div>     
                    <button onClick = {() =>  OnProjectClick(project)} className="relative cursor-pointer items-center justify-center">
                        <img src = { seta_baixo_branca } className="absolute w-full h-full" />
                        <img src = { circulo_laranja } className=""  />
                    </button>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Projects 