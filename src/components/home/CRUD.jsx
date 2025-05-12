import caneta from "../../assets/icons/caneta.svg"
import marcaPagina from "../../assets/icons/marcapagina.svg"
import setaBaixo from "../../assets/icons/seta_baixo.svg"
import lixeira from "../../assets/icons/lixeira.svg"
import Letras from "./Letras"
import Explicacao from "./Explicacao"

function CRUD() {
    return (
        <div className="flex gap-[100px] text-center justify-center mb-25">

            <div className="flex flex-col items-center justify-center">
                <Letras>C</Letras>
                <Explicacao>Criar</Explicacao>
                <img className="icones" src = { caneta } />
            </div>

            <div className="flex flex-col items-center justify-center">
                <Letras>R</Letras>
                <Explicacao>Retornar</Explicacao>
                <img className="icones" src = { marcaPagina } />
            </div>
            <div className="flex flex-col items-center justify-center">
                <Letras>U</Letras>
                <Explicacao>Atualizar</Explicacao>
                <img className="icones" src = { setaBaixo } />
            </div>
            <div className="flex flex-col items-center justify-center">
                <Letras>D</Letras>
                <Explicacao>Deletar</Explicacao>
                <img className="icones" src = { lixeira } />
            </div>
        </div>    
    )
}

export default CRUD