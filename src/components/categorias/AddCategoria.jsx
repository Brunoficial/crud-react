import React from "react";
import { useState } from "react";
import Titulo from "../geral/Titulo";

export default function AddCategoria({onAddCategoria}) {
  const [nomeCategoria, setNomeCategoria] = useState("");

  return (
    <div className="flex flex-col items-center justify-center mb-5 gap-y-2">
      <Titulo>Categorias</Titulo>
      <div className="flex flex-col justify-center items-center w-[520px] rounded-[12px]  shadow-xl bg-white px-10 py-2 ">
        <p className="flex justify-center text-[24px] text-cinza-escuro font-bold mb-2">Adicionar</p>
        <div className="flex gap-2 justify-center items-center ">
          <input
            type="text"
            value={nomeCategoria}
            onChange={(event) => setNomeCategoria(event.target.value)}
            placeholder="Insira o nome da Categoria"
            className="flex border-[1px] rounded-[4px] border-cinza w-[300px] h-[40px] px-2"
          />
          <button
            onClick={() => {
              if (!nomeCategoria.trim())
                return alert("Dê um nome à categoria!!!");
              onAddCategoria(nomeCategoria);
              console.log(nomeCategoria);
              setNomeCategoria("");
            }}
            className="flex items-center justify-center rounded-[12px] px-4 bg-laranja cursor-pointer text-[24px] font-bold text-white gap-[5px] hover:bg-red-500 duration-200"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
