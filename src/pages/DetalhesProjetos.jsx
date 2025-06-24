// Bibls
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

// Imagens 
import Titulo from "../components/geral/Titulo.jsx";
import lixeiraGoogle from "../assets/icons/lixeiraGoogle.svg";
import setaEsquerda from "../assets/icons/setaEsquerda.svg";

function DetalhesProjetos() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState(
    JSON.parse(localStorage.getItem("projects"))
  );

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const projetoAtual = projects.find((project) => project.id == id);

  function DeletarProjeto(projetoID) {
    const novosProjetos = projects.filter((project) => projetoID != project.id);
    setProjects(novosProjetos);
    
    navigate('/projetos');
  }

  function Voltar() {
    navigate(-1);
  }

  if (projetoAtual != undefined)
    return (
      <div className="flex flex-col items-center bg-body gap-[40px] px-[60px] py-[20px] h-screen">
        <div className="flex flex-col justify-center ">
          <Titulo>{projetoAtual.nome}</Titulo>
          <p className="flex text-[24px] font-bold text-cinza-destaque mb-[18px] justify-center items-center">
            {projetoAtual.descricao}
          </p>
        </div>
        <div className="flex flex-col w-full  px-[15px] bg-white py-[10px] rounded-[10px] shadow-2xl">
          <p className="flex text-[28px] font-bold text-cinza-destaque mb-[18px] items-center justify-center">
            Detalhes do Projeto
          </p>
          <div className="flex text-cinza-destaque justify-center items-center text-[20px] gap-[20px]">
            <p>Categoria do Projeto: {projetoAtual.categoria}</p>
            <p>Estado: {projetoAtual.ativo ? "Ativo" : "Pendente"}</p>
          </div>
        </div>
        <button
          className="flex text border-[1px] gap-[2px] text-white font-bold border-white rounded-[20px] px-[10px] py-[5px] bg-laranja cursor-pointer hover:bg-red-600 duration-400"
          onClick={() => {
            DeletarProjeto(id);
          }}
        >
          Deletar Projeto
          <img src={lixeiraGoogle} />
        </button>
        <button
          onClick={() => Voltar()}
          className="flex text-laranja font-bold mt-[180px] cursor-pointer hover:text-red-500 duration-300"
        >
          <img src={setaEsquerda} /> Voltar
        </button>
      </div>
    );
  else navigate(-1);
}

export default DetalhesProjetos;
