import Titulo from "../geral/Titulo.jsx";
import Input from "../geral/Input.jsx";
import adicionar_branco from "../../assets/icons/adicionar_branco.svg";
import { useState } from "react";
import { toast, Toaster } from "sonner";

function AddProject({ onAddProject, categorias }) {
  const [nome, setNome] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [descricao, setDescricao] = useState("");

  return (
    <div className="flex flex-col items-center cursor-default">
      <Toaster richColors />
      <Titulo> Criar Projeto </Titulo>
      <div className="flex flex-col rounded-[15px] bg-white items-center justify-center max-w-[885px] mx-auto max-h-[412px] shadow-xl px-[216px] gap-y-[30px] mb-[100px]">
        <p className="text-cinza-escuro font-bold text-[30px]">
          Informações do Projeto
        </p>

        <Input
          type="text"
          maxLength="16"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          placeholder="Nome do Projeto:"
        />

        <select
          name="Categorias"
          id=""
          onChange={(event) => setCategoriaSelecionada(event.target.value)}
          className="flex  border-[1px] rounded-[4px] border-cinza w-[300px] h-[40px] px-2"
        >
          <option value=""> Nenhuma Categoria </option>
          {categorias.map((categoria) => (
            <option value={categoria.nome}> {categoria.nome} </option>
          ))}
        </select>

        <textarea
          placeholder="Dê uma descrição ao projeto:"
          value={descricao}
          maxLength="100"
          onChange={(event) => setDescricao(event.target.value)}
          className="flex border-[1px] rounded-[4px] border-cinza w-[300px] h-[120px] px-2"
        />

        <button
          onClick={() => {
            if (!nome.trim()) return alert("Dê um nome ao projeto!!!");
            onAddProject(nome, categoriaSelecionada, descricao);
            console.log(nome);
            console.log(categoriaSelecionada);
            setNome("");
            setCategoriaSelecionada("");
            setDescricao("");
            toast.success("Projeto criado com sucesso");
          }}
          className="flex rounded-[12px] px-4 bg-laranja cursor-pointer text-[24px] font-bold text-white gap-[5px] mb-[16px] hover:bg-red-500 duration-200"
        >
          Adicionar <img src={adicionar_branco} />
        </button>
      </div>
    </div>
  );
}

export default AddProject;
