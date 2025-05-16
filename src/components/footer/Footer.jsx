import TituloFooter from "./TItuloFooter";
import ConteudoFooter from "./ConteudoFooter";
import copyrightLaranja from "../../assets/icons/copyrightLaranja.svg"

function Footer() {
  return (
    <div>
      <div className="flex pt-15 pl-15 gap-75 border-t-black bg-white border-[1px] py-7">
        <div className="flex flex-col gap-y-[20px]">
          <TituloFooter>Empresa</TituloFooter>
          <ConteudoFooter>blah blah</ConteudoFooter>
          <ConteudoFooter>blah blah</ConteudoFooter>
          <ConteudoFooter>blah blah</ConteudoFooter>
          <ConteudoFooter>blah blah</ConteudoFooter>
        </div>
        <div className="flex flex-col gap-y-[20px]">
          <TituloFooter>Contato</TituloFooter>
          <ConteudoFooter>blah blah</ConteudoFooter>
          <ConteudoFooter>blah blah</ConteudoFooter>
          <ConteudoFooter>blah blah</ConteudoFooter>
          <ConteudoFooter>blah blah</ConteudoFooter>
        </div>
        <div className="flex flex-col gap-y-[20px]">
          <TituloFooter>Sobre</TituloFooter>
          <ConteudoFooter>blah blah </ConteudoFooter>
          <ConteudoFooter>blah blah</ConteudoFooter>
          <ConteudoFooter>blah blah</ConteudoFooter>
          <ConteudoFooter>blah blah</ConteudoFooter>
        </div>
      </div>
      <p className="flex bg-white gap-1 text-[12px] text-laranja text-bold justify-center "> 
        <img className="w-[12px] text-laranja" src= {copyrightLaranja} alt="" />Todos direitos reservados a Bruno</p>
    </div>
  );
}

export default Footer;
