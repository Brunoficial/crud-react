import Header from "../components/Header.jsx"
import AddProject from "../components/AddProject.jsx"
import Projects from "../components/Projects.jsx"
import { useState } from "react"

function Projetos( ) {

      const [projects, setProjects] = useState([
          {
            id: 1,
            nome: "Nome do Projeto",
            categoria: "Categoria:teste",
            ativo: true
          },  
        {
          id: 2,
          nome: "Nome do Projeto 2",
          categoria: "Categoria:teste 2",
          ativo: false
        }, 
      ]) 
  
    function onAddProject( nome, categoria ) {
      const newProject = {
        id: projects.length + 1,
        nome, 
        categoria, 
        ativo: true 
      }
      setProjects([... projects, newProject])
    }

    return (
        <div>
            <Header />
            <AddProject onAddProject = { onAddProject } />
            <Projects projects = { projects } onAddProject = { onAddProject } />
        </div>
    )
}

export default Projetos 