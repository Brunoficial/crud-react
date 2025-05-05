import BotaoHome from "./BotaoHome";
import user from "../assets/icons/user.svg";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation() 
    const navigate = useNavigate() 

    const rotaAtual = location.pathname.replace('/', '')

    const onHeaderButtonClick = (event) => {
        const rota = event.target.id;
        navigate(`/${rota}`)
    }

    return (
        <header className="flex bg-white h-[120px] mb-[160px] shadow-xl rounded-[30px] px-[54px] mx-auto max-w-[1320px] items-center justify-between">
            <p className="text-[32px] font-bold text-laranja">BRUNO CRUD</p>
            <div className="flex gap-[50px]">
                <BotaoHome 
                    id=""
                    onClick = { onHeaderButtonClick }
                    className = {rotaAtual === "" ? 'font-bold' : '' } 
                    >
                    Home
                </BotaoHome>

                <BotaoHome 
                    id="projetos"
                    onClick = { onHeaderButtonClick }
                    className = {rotaAtual === "projetos" ? 'font-bold' : '' } 
                    >
                    Projetos
                </BotaoHome>

                <BotaoHome
                    className = {rotaAtual === "categorias" ? 'font-bold' : '' } 
                >
                    Categorias
                </BotaoHome>

            </div>
            <BotaoHome>
                Conta
                <img src={user}/>
            </BotaoHome>
            
        </header>
    );
}

export default Header;