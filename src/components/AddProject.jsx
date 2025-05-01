import Titulo from "./Titulo"
import Input from "./Input"
import adicionar from "../assets/icons/adicionar.svg"
import { useState } from "react"

function AddProject({ onAddProject }) {
    const [nome, setNome] = useState("")
    const [categoria, setCategoria] = useState("")
    return (
        <div className="flex flex-col items-center">
            <Titulo> Criar Projeto </ Titulo>

            <div className="flex flex-col bg-white items-center justify-center max-w-[885px] mx-auto max-h-[412px] shadow-xl px-[216px] gap-y-[30px] mb-[100px]">
                <p className="text-cinza-escuro font-bold text-[30px]">Informações do Projeto</p>

                <Input 
                    value = { nome }
                    onChange = {(event) => setNome(event.target.value)} 
                    placeholder = "Nome do Projeto" />
                <Input  
                    value = { categoria } 
                    onChange = {(event) => setCategoria(event.target.value)}
                    placeholder = "Categoria do Projeto" />

                <button 
                    onClick = {() => {
                        if (!nome.trim() || !categoria.trim()) return alert("Preencha os campos");
                        onAddProject(nome, categoria);
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