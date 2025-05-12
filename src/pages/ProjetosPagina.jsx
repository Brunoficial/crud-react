import Header from "../components/Header.jsx";
import AddProject from "../components/AddProject.jsx";
import Projects from "../components/Projects.jsx";
import { useState, useEffect } from "react";
import Footer from "../components/footer/Footer.jsx"

function Projetos() {
  const [projects, setProjects] = useState(
    JSON.parse(localStorage.getItem("projects"))
  );

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
    console.log("Projetos foi alterado");
  }, [projects]);

  const categorias= ["Categoria 1", "Categoria 2"];

  function onAddProject(nome, categoria) {
    const newProject = {
      id: projects.length + 1,
      nome,
      categoria,
      ativo: true,
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
    <div>
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

export default Projetos;
