import BotaoHome from "./BotaoHome";
import user from "../assets/icons/user.svg";
import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate() 

    const onHeaderButtonClick = (event) => {
        console.log("Clicado")
        const rota = event.target.id;
        console.log(`Clicou em ${rota}`)
        navigate(`/${rota}`)
    }

    return (
        <header className="flex bg-white h-[120px] mb-[160px] shadow-xl rounded-[30px] px-[54px] mx-auto max-w-[1320px] items-center justify-between">
            <p className="text-[32px] font-bold text-laranja">BRUNO CRUD</p>
            <div className="flex gap-[50px]">
                <BotaoHome 
                    id=""
                    onClick = { onHeaderButtonClick }
                    >
                    Home
                </BotaoHome>

                <BotaoHome 
                    id="projetos"
                    onClick = { onHeaderButtonClick }
                    >
                    Projetos
                </BotaoHome>

                <BotaoHome>
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