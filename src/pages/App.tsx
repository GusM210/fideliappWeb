import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  '../components/global.css'
import Login from './login/login'
import TelaRegistro from './cadastro/cadastro'

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/cadastro" element={<TelaRegistro />} />
      </Routes>
    
    </BrowserRouter>
    

  
  )
}


