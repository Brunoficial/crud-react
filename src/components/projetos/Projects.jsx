// Imagens
import BarraPesquisa from "./BarraPesquisa.jsx";

// Hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Componentes 
import Titulo from "../geral/Titulo.jsx";
import RenderizarProjetos from "./RenderizarProjetos.jsx";
import Pesquisa_Filtragem from "./Pesquisa_Filtragem.jsx";

function Projects({ projects, categorias, onEstadoClick }) {
  const navigate = useNavigate();
  const [pesquisa, setPesquisa] = useState("");
  const [ordemAlfabetica, setOrdemAlfabetica] = useState(true)
  const [filtroCategoria, setFiltroCategoria] = useState("");

  function OnProjectClick(projeto) {
    const query = new URLSearchParams();
    query.set("nome", projeto.nome);
    query.set("id", projeto.id);

    navigate(`/projetos/projeto?${query.toString()}`);
  }

  return (
    <div className="flex cursor-default flex-col items-center justify-center mb-25">
      <Titulo> Seus Projetos</Titulo>
      <div className="flex flex-col bg-white justify-center shadow-xl px-10 rounded-[20px]">
        <Pesquisa_Filtragem categorias = {categorias} filtroCategoria={filtroCategoria} setFiltroCategoria={setFiltroCategoria} pesquisa={pesquisa} setPesquisa={setPesquisa} ordemAlfabetica={ordemAlfabetica} setOrdemAlfabetica={setOrdemAlfabetica}/>
        <RenderizarProjetos projects={projects} filtroCategoria={filtroCategoria} ordemAlfabetica={ordemAlfabetica} onEstadoClick={onEstadoClick} OnProjectClick={OnProjectClick} pesquisa={pesquisa}/>
      </div>
    </div>
  );
}

export default Projects;
