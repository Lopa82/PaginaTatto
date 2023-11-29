import { Navigate, Route, Routes } from "react-router-dom";


import Layaut from "./components/layaut";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

import Inicio from "./pages/inicio";
import Cursos from "./pages/cursos";
import Imagenes from "./pages/imagenes";
import Registro from "./pages/registro";


function App() {

  return (
    <>
      <div className="bg-secondary min-h-screen">
          <NavBar></NavBar>
          <Layaut>
              <Routes>
                <Route path={`/`} element={<Inicio></Inicio>}></Route> 
                <Route path={`/cursos`} element={<Cursos></Cursos>}></Route>
                <Route path={`/imagenes`} element={<Imagenes></Imagenes>}></Route>
                <Route path={`/registro`} element={<Registro></Registro>}></Route>
                <Route path={`*`} element={<Navigate to= {`/`}></Navigate>}></Route>
              </Routes>
          </Layaut>
          <Footer/> 
      </div>
    
    </>
  )
}

export default App
