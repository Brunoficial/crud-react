import Header from './components/Header.jsx'
import Propaganda from './components/home/Propaganda.jsx'
import CRUD from './components/home/CRUD.jsx'
import Footer from './components//footer/Footer.jsx'


function App() {
  return (
    <div className='bg-body'>
      <Header />
      <Propaganda />
      <CRUD />
      <Footer />
    </div>
  )
}

export default App
