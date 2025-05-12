import Titulo from "./Titulo.jsx";
import circulo_laranja from "../assets/icons/circulo_laranja.svg";
import seta_baixo_branca from "../assets/icons/seta_baixo_branca.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BarraPesquisa from "../components/BarraPesquisa.jsx";
import FiltroAtual from "./filtro/FiltroAtual.jsx";
import FiltroTipo from "./filtro/FiltroTipo.jsx";

function Projects({ projects, categorias, onEstadoClick }) {
  const navigate = useNavigate();
  const [pesquisa, setPesquisa] = useState("");
  const estados = ["Ativo", "Desativo"];
  const [tipoFiltro, setTipoFiltro] = useState("");
  const [filtroAtual, setFiltroAtual] = useState("");

  function OnProjectClick(projeto) {
    const query = new URLSearchParams();
    query.set("nome", projeto.nome);
    query.set("categoria", projeto.categoria);

    navigate(`/projetos/projeto?${query.toString()}`);
  }

  function FiltrarProjetos(projects) {
    const projetosFiltrados =
    projects
      .filter(
        (project) =>
          pesquisa === "" ||
          project.nome
            .toLowerCase()
            .trim()
            .includes(pesquisa.toLowerCase().trim())
      )

      .filter((project) =>
        tipoFiltro === "Categoria"
          ? project.categoria == filtroAtual
          : project
      )

      .filter((project) =>
        filtroAtual === "Ativo" && tipoFiltro === "Ativo/desativo"
          ? project.ativo
          : project
      )

      .filter((project) =>
        filtroAtual === "Desativo" && tipoFiltro === "Ativo/desativo"
          ? !project.ativo
          : project
      )
    return projetosFiltrados
  }

  return (
    <div className="flex cursor-default  flex-col items-center justify-center mb-25">
      <Titulo> Seus Projetos</Titulo>
      <hr className="border-t-1 border-laranja mt-1 mb-4 w-[900px]" />
      <div className="flex gap-x-[6px]">
        <BarraPesquisa
          value={pesquisa}
          onChange={({ target }) => setPesquisa(target.value)}
        />
        <div className="flex border-[1px] gap-[10px] rounded-[4px] border-cinza w-[314px] h-[40px] px-2 text-laranja">
          <FiltroTipo onChange={(event) => setTipoFiltro(event.target.value)} />

          <FiltroAtual
            onChange={(event) => setFiltroAtual(event.target.value)}
            tipoFiltro={tipoFiltro}
            categorias={categorias}
            estados={estados}
          />
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

          .filter((project) =>
            tipoFiltro === "Categoria"
              ? project.categoria == filtroAtual
              : project
          )

          .filter((project) =>
            filtroAtual === "Ativo" && tipoFiltro === "Ativo/desativo"
              ? project.ativo
              : project
          )

          .filter((project) =>
            filtroAtual === "Desativo" && tipoFiltro === "Ativo/desativo"
              ? !project.ativo
              : project
          )

          .map((project) => (
            <li
              key={project.id}
              className="flex w-[880px] h-[80px] px-[40px] bg-white drop-shadow-xl items-center mt-[20px] mb-[30px] justify-between"
            >
              <div className="flex justify-center gap-15 items-center overflow-x-auto">
                <p className="font-bold text-[25px]">{project.nome}</p>
                <p className="text-[20px]"> 0 tarefas </p>
                <button
                  className={`text-[20px] cursor-pointer duration-500 ${
                    project.ativo ? "text-verde-ativo" : "text-red-600"
                  }`}
                  onClick={() => onEstadoClick(project.id)}
                >
                  {" "}
                  {project.ativo ? "Ativo" : "Pendente"}{" "}
                </button>
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
