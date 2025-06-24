function BotaoHeader({className = '', ...props}) {
    return <button 
    {...props}
    className={`flex cursor-pointer text-[24px] items-center gap-2 hover:text-laranja duration-200 ${className}`}
    >
        {props.children}
    </button>
}

export default BotaoHeader;