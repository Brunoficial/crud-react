import Titulo from "./Titulo.jsx"
import Input from "./Input.jsx"
import adicionar from "../assets/icons/adicionar.svg"
import { useState } from "react"

function AddProject({ onAddProject }) {
    const [nome, setNome] = useState("")
    const [categoria, setCategoria] = useState("")
    const [descricao, setDescricao] = useState("")
    const [categorias, setCategorias] = useState(['Categoria 1', 'Categoria 2'])

    return (
        <div className="flex flex-col items-center">
            <Titulo> Criar Projeto </ Titulo>

            <div className="flex flex-col bg-white items-center justify-center max-w-[885px] mx-auto max-h-[412px] shadow-xl px-[216px] gap-y-[30px] mb-[100px]">
                <p className="text-cinza-escuro font-bold text-[30px]">Informações do Projeto</p>

                <Input 
                    type = "text"
                    value = { nome }
                    onChange = {(event) => setNome(event.target.value)} 
                    placeholder = "Nome do Projeto" />

                <select 
                    name="Categorias" 
                    id="" 
                    onChange = {(event) => setCategoria(event.target.value)}
                    className="flex border-[1px] rounded-[4px] border-cinza w-[300px] h-[40px] px-2 text-laranja">
                        <option value=""> Nenhuma Categoria </option>
                    {categorias.map((categoriaNome) => (
                        <option value = {categoriaNome} > {categoriaNome} </option>
                    ))}
                </select>
            

                <textarea 
                    placeholder = "Dê uma descrição ao projeto"
                    value = { descricao }
                    onChange = {(event) => setDescricao(event.target.value)}
                    className="flex border-[1px] rounded-[4px] border-cinza w-[300px] h-[120px] px-2 text-laranja"
                /> 

                <button 
                    onClick = {() => {
                        if (!nome.trim()) return alert ("Dê um nome ao projeto!!!");
                        onAddProject(nome, categoria);
                        console.log(nome)
                        console.log(categoria)
                        setNome("")
                        setCategoria("")
                    }}
                    className = "flex cursor-pointer text-[24px] font-bold text-cinza-escuro gap-[5px] mb-[16px] hover:text-laranja duration-200" >
                    Adicionar <img src = { adicionar }/>
                </button>
            </div>

        </div>
    )
}

export default AddProject