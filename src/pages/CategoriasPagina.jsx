import React from "react";

// Componentes
import AddCategoria from "../components/categorias/addCategoria";
import Header from "../components/header/Header";
import Categorias from "../components/categorias/Categorias";
import Footer from "../components/footer/Footer"

// Bibliotecas
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";


export default function CategoriasPagina() {

  const [categorias, setCategorias] = useState(
      JSON.parse(localStorage.getItem("categorias"))
    );

    useEffect(() => {
      localStorage.setItem("categorias", JSON.stringify(categorias));
    }, [categorias]);

  function onAddCategoria(nome) {
    console.log(nome)
    const novaCategoria = {
      id: uuidv4(),
      nome,
    };
    setCategorias([...categorias, novaCategoria]);
  }

  return (
    <div className="bg-body h-full">
      <Header />
      <AddCategoria onAddCategoria={onAddCategoria} />
      <Categorias categorias={categorias}/>
      <Footer />
    </div>
  );
}
