
import './App.css';
import { Fragment } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Contador from './components/contador/Contador';
import Alumnos from './components/alumnos/Alumnos';


function App() {

  // JS
  let titulo = 'React!!!';
  let contador = 0;
  const crecer = () => {
    console.log('Clic dentro de crecer');
    // Reasignación * Prohibido
    contador = contador + 1;
    // Hay que gestionarlo mediante el STATE de React

    console.log(contador)
  }


  // Todos los componentes con vista tienen que tener un return -> La vista del componente HTML
  // JSX -> HTML dentro de JS
  return (
    <Fragment>
      <h1 className="texto_principal"> Hola mundo {titulo} </h1>

      <BrowserRouter>

        <nav>
          <Link to="/"> Home  </Link>
          <Link to="/alumnos"> Alumnos  </Link>
          <Link to="/contador" > Contador  </Link>
        </nav>
        <Routes>
          <Route path='' element={<Home></Home>} > </Route>
          <Route path='contador' element={<Contador></Contador>} > </Route>
          <Route path='alumnos' element={<Alumnos></Alumnos>} > </Route>
        </Routes>

      </BrowserRouter>
      {/* <div> Contenido  </div>
      <h2> Contador: {contador} </h2>
      <div>
        <button onClick={crecer} > Crecer </button>
      </div> */}
      {/* <Contador></Contador> */}
      {/* <Crono></Crono> */}
      {/* <Alumnos clase="JS"></Alumnos> */}
    </Fragment>
  );


}

export default App;

function Home() {
  return <>
    <h1> Soy el HOME </h1>
  </>
}
// function saludo(  ){
//   // let element = document.createElement( 'div' );
//   // return element
// }


