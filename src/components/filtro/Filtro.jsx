import React from "react";
import filter from "../../assets/icons/filter.svg";
import setaFiltro from "../../assets/icons/setaAlfabeto.svg";

function Filtro({ categorias, filtroCategoria, setFiltroCategoria, ordemAlfabetica ,setOrdemAlfabetica }) {

  return (
    <div className="flex my-[10px] items-center border-[1px] gap-[40px] rounded-[4px] border-cinza w-[400px] h-[40px] px-2">
      <div className="flex">
        <img src={filter} className="w-[24px]" /> 
        <select
          className={`font-bold text-[15px] cursor-pointer focus:outline-0 ${filtroCategoria == "" ? "text-black" : 'text-laranja'}`}
          onChange={({ target }) => {
            setFiltroCategoria(target.value);
          }}
        >
          <option value="" className="cursor-pointer">Categoria</option>
          {categorias.map((categoria) => (
            <option className="cursor-pointer " value={categoria.nome}> {categoria.nome} </option>
          ))}
        </select>
      </div>

      <button className={`flex cursor-pointer font-bold duration-300 ${ordemAlfabetica ? 'text-laranja hover:text-red-400' : 'text-red-400'}`} onClick={() => setOrdemAlfabetica(!ordemAlfabetica)}>
        {ordemAlfabetica ?  'A' : 'Z'} <img className="w-[16px]" src={setaFiltro} />
      </button>

      <button 
        className={`border-[1px] rounded-[50%] w-[24px] h-[24px] bg-gradient-to-b from-verde-ativo to-green-400  text-green-400 cursor-pointer`}>
        .
      </button>
    </div>
  );
}

export default Filtro;
