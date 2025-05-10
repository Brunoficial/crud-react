import Header from "../components/Header.jsx";
import AddProject from "../components/AddProject.jsx";
import Projects from "../components/Projects.jsx";
import { useState, useEffect } from "react";

function Projetos() {
  const [projects, setProjects] = useState(
    JSON.parse(localStorage.getItem("projects"))
  );

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
    console.log("Projetos foi alterado");
  }, [projects]);

  const [categorias, setCategorias] = useState(["Categoria 1", "Categoria 2"]);

  function onAddProject(nome, categoria) {
    const newProject = {
      id: projects.length + 1,
      nome,
      categoria,
      ativo: true,
    };
    setProjects([...projects, newProject]);
  }

  return (
    <div>
      <Header />
      <AddProject onAddProject={onAddProject} categorias={categorias} />
      <Projects
        projects={projects}
        categorias={categorias}
        onAddProject={onAddProject}
      />
    </div>
  );
}

export default Projetos;
