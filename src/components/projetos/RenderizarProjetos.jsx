// Bibliotecas
import React from "react";

// Imagens
import setaBaixoBranca from "../../assets/icons/seta_baixo_branca.svg";
import circuloLaranja from "../../assets/icons/circulo_laranja.svg";

export default function RenderizarProjetos({
  projects,
  filtroCategoria,
  ordemAlfabetica,
  onEstadoClick,
  OnProjectClick,
  pesquisa,
}) {
  if (projects.length > 0)
    return (
      <ul className="h-[460px]  overflow-y-auto ">
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
            filtroCategoria === ""
              ? project
              : project.categoria == filtroCategoria
          )

          .sort((a, b) =>
            ordemAlfabetica == true ? a.nome.localeCompare(b.nome) : ""
          )

          .map((project) => (
            <li
              key={project.id}
              className="flex border-[1px] w-[880px] h-[80px] px-[40px] bg-white drop-shadow-xl items-center mt-[20px] mb-[30px] justify-between"
            >
              <div className="flex justify-center gap-15 items-center overflow-x-auto">
                <p className="font-bold text-[25px]">{project.nome}</p>
                <p className="text-[20px]"> 0 tarefas </p>
                <button
                  className={`text-[20px] cursor-pointer duration-500  ${
                    project.ativo
                      ? "text-verde-ativo hover:text-red-500"
                      : "text-red-600 hover:text-green-400"
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
                <img src={setaBaixoBranca} className="absolute w-full h-full" />
                <img src={circuloLaranja} className="" />
              </button>
            </li>
          ))}
      </ul>
    );
  else return (<p className="flex font-bold justify-center py-4">Nenhum projeto encontrado :( </p>)
}
