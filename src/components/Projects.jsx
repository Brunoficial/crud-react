import Titulo from "./Titulo.jsx";
import circulo_laranja from "../assets/icons/circulo_laranja.svg";
import seta_baixo_branca from "../assets/icons/seta_baixo_branca.svg";
import { useNavigate } from "react-router-dom";
import filter from "../assets/icons/filter.svg";
import { useState } from "react";
import BarraPesquisa from "../components/BarraPesquisa.jsx";

function Projects({ projects, categorias }) {
  const navigate = useNavigate();
  const [pesquisa, setPesquisa] = useState("");
  const filtros = ["Categoria", "Ativo/desativo"];
  const estados = ["Ativo", "Desativo"]
  const [tipoFiltro, setTipoFiltro] = useState("");
  const [filtroAtual, setFiltroAtual] = useState("");

  function OnProjectClick(projeto) {
    const query = new URLSearchParams();
    query.set("nome", projeto.nome);
    query.set("categoria", projeto.categoria);

    navigate(`/projetos/projeto?${query.toString()}`);
  }


  return (
    <div className="flex cursor-default  flex-col items-center justify-center mb-25">
      <Titulo> Seus Projetos</Titulo>
      <hr className="border-t-3 border-laranja mt-1 mb-4 w-[900px]" />
      <div className="flex gap-x-[6px]">
        <BarraPesquisa
          value={pesquisa}
          onChange={({ target }) => setPesquisa(target.value)}
        />
        <div className="flex border-[1px] gap-[10px] rounded-[4px] border-cinza w-[314px] h-[40px] px-2 text-laranja">
          <img src={filter} className="w-[24px]" alt="" />
          <select
            onChange={(event) => setTipoFiltro(event.target.value)}
            className="focus:outline-0"
          >
            <option value="">Nenhum Filtro</option>
            {filtros.map((filtroNome) => (
              <option value={filtroNome}> {filtroNome} </option>
            ))}
          </select>
          <select
            className="focus:outline-0"
            onChange={(event) => setFiltroAtual(event.target.value)}
          >
            {tipoFiltro === "Categoria" &&
              categorias.map((categoriaNome) => (
                <option value={categoriaNome}> {categoriaNome} </option>
              ))}

            {tipoFiltro === "Ativo/desativo" &&
              estados.map((estado) => (
                <option value = {estado} >{estado}</option>
              ))
            }
          </select>
        </div>
      </div>

      <ul className="h-[460px] overflow-y-auto">
        {projects
          .filter(
            (project) =>
              pesquisa === "" ||
              project.nome
                .toLowerCase()
                .trim()
                .includes(pesquisa.toLowerCase().trim())
          )
        
          .filter(
            (project) =>
              tipoFiltro === "Categoria" ? project.categoria == filtroAtual : project
          )
          
          .filter(
            (project) =>
              filtroAtual === "Ativo" ? project.ativo : !project.ativo
          )

          .map((project) => (
            <li
              key={project.id}
              className="flex w-[880px] h-[80px] px-[40px] bg-white drop-shadow-xl items-center mt-[20px] mb-[30px] justify-between"
            >
              <div className="flex justify-center gap-15 items-center">
                <p className="font-bold text-[25px]">{project.nome}</p>
                <p className="text-[20px]"> 0 tarefas </p>
                <p
                  className={`text-[20px] ${
                    project.ativo ? "text-verde-ativo" : "text-red-600"
                  }`}
                >
                  {" "}
                  {project.ativo ? "Ativo" : "Pendente"}{" "}
                </p>
                <p className="text-[20px]"> {project.categoria} </p>
              </div>
              <button
                onClick={() => OnProjectClick(project)}
                className="relative cursor-pointer items-center justify-center"
              >
                <img
                  src={seta_baixo_branca}
                  className="absolute w-full h-full"
                />
                <img src={circulo_laranja} className="" />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Projects;
