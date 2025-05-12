import filter from "../../assets/icons/filter.svg"

function FiltroTipo(props) {
    const filtros = ["Categoria", "Ativo/desativo"];
    return (
        <div className="flex">
            <img src={filter} className="w-[24px]" alt="" />
            <select
                className="focus:outline-0"
                {...props}
                >
                <option value="">Nenhum Filtro</option>
                    {filtros.map((filtroNome) => (
                <option value={filtroNome}> {filtroNome} </option>
                ))}
            </select>
        </div>
    ) 
}

export default FiltroTipo