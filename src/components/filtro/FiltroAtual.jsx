function FiltroAtual({onChange, tipoFiltro, categorias}) {
    const estados = ["Ativo", "Desativo"];
    return (
        <select
            className="focus:outline-0"
            onChange = {onChange}
          >
            <option value="">Selecionar</option>
            {tipoFiltro === "Categoria" &&
              categorias.map((categoriaNome) => (
                <option value={categoriaNome}> {categoriaNome} </option>
              ))}

            {tipoFiltro === "Ativo/desativo" &&
              estados.map((estado) => <option value={estado}>{estado}</option>)}
          </select>
    )
}

export default FiltroAtual