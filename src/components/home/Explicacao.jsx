function Explicacao( props ) {
    return (
        <p className="flex text-center cursor-default  align-center text-[24px] font-bold text-cinza-escuro">
            {props.children}
        </p>
    ) 
}

export default Explicacao