import './App.css'
import {BrowserRouter, Routes ,Route, Navigate} from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import About from './pages/about/About'
import Login from './pages/login/Login'
import Registro from './pages/registro/Registro'

function App() {
  return (
   <div className="App">
     <BrowserRouter>
      <Navbar/>
      <div className="container">
        <Routes> 
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/registro' element={<Registro/>}></Route>
        </Routes>
      </div>
      <Footer/>
     </BrowserRouter>
   </div>
  )
}

export default App
