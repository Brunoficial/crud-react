function Letras( props ) {
    return (
        <p className="font-bold cursor-default text-center align-center text-[80px] text-laranja h-[100px]"> 
            {props.children}
        </p>
    )
}

export default Letras