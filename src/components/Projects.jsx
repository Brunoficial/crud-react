import Titulo from "./Titulo"
import seta_baixo_branca from "../assets/icons/seta_baixo_branca.svg"
import circulo_laranja from "../assets/icons/circulo_laranja.svg"

function Projects( {projects} ) {
    return (
        <div className="flex flex-col items-center justify-center">
            <Titulo> Seus Projetos</Titulo>
            <ul>
                {projects.map((project) => (
                <li key = { project.id } className="flex w-[880px] h-[100px] px-[40px] bg-white shadow-2xl items-center mt-[20px] mb-[46px] justify-between">                    
                    <div className="flex justify-center gap-15 items-center">             
                        <p className="font-bold text-[25px]">{project.nome}</p>
                        <p className="text-[20px]"> 0 tarefas </p>
                        <p className={`text-[20px] ${project.ativo ?  "text-verde-ativo":'text-red-600'}`} > { project.ativo? "Ativo" : "Pendente" } </p>
                        <p className="text-[20px]"> { project.categoria } </p>
                    </div>     
                    <button className="relative cursor-pointer items-center justify-center">
                        <img src = { seta_baixo_branca } className="absolute w-full h-full" />
                        <img src = { circulo_laranja } className=""  />
                    </button>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Projects 