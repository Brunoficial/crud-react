import Header from "../components/header/Header.jsx";
import AddProject from "../components/projetos/AddProject.jsx";
import Projects from "../components/projetos/Projects.jsx";
import { useState, useEffect } from "react";
import Footer from "../components/footer/Footer.jsx"
import {v4 as uuidv4} from 'uuid'
import { Icons } from "../assets/icons/index.jsx";

function ProjetosPagina() {

  const [projects, setProjects] = useState(
    JSON.parse(localStorage.getItem("projects"))
  );

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const categorias = (
        JSON.parse(localStorage.getItem("categorias"))
      );

  function onAddProject(nome, categoria, descricao) {
    const newProject = {
      id: uuidv4(),
      nome,
      categoria,
      ativo: true,
      descricao,
    };
    setProjects([...projects, newProject]);
  }

  function onEstadoClick(projetoID) {
    const projetos = projects.map((project) => {
      if (project.id == projetoID) {
         return {...project, ativo: !project.ativo}
      }

      return project;
    })
    setProjects(projetos);
  }



  return (
    <div className="bg-body">
      <Header />
      <AddProject onAddProject={onAddProject} categorias={categorias} />
      <Projects
        projects={projects}
        categorias={categorias}
        onEstadoClick={onEstadoClick}
      />
    
      <Footer />
    </div>
  );
}

export default ProjetosPagina;
