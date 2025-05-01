import caneta from "../assets/icons/caneta.svg"
import marcaPagina from "../assets/icons/marcapagina.svg"
import setaBaixo from "../assets/icons/seta_baixo.svg"
import lixeira from "../assets/icons/lixeira.svg"

function CRUD() {
    return (
        <div className="flex gap-[100px] text-center justify-center mb-25">
            <div className="letra-explicacao">
                <div className="letras">C</div>
                <div className="explicacao">Criar</div>
                <img className="icones" src = { caneta } />
            </div>
            <div className="letra-explicacao">
                <div className="letras">R</div>
                <div className="explicacao">Retornar</div>
                <img className="icones" src = { marcaPagina } />
            </div>
            <div className="letra-explicacao">
                <div className="letras">U</div>
                <div className="explicacao">Atualizar</div>
                <img className="icones" src = { setaBaixo } />
            </div>
            <div className="letra-explicacao">
                <div className="letras">D</div>
                <div className="explicacao">Deletar</div>
                <img className="icones" src = { lixeira } />
            </div>
        </div>
    )
}

export default CRUD