import search from "../../assets/icons/search.svg";

function BarraPesquisa(props) {
  return (
    <div className="flex border-[1px] my-[10px] gap-[10px] rounded-[4px] border-cinza w-[522px] h-[40px] px-2 text-black">
      <img className="w-[24px]" src={search} alt="" />
      <input
        placeholder="Pesquisar"
        type="text"
        className="w-full focus:outline-0 "
        {...props}
      />
    </div>
  );
}

export default BarraPesquisa;
