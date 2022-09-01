// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

import Listado from './components/Listado';
import Cabecera from './components/Cabecera';
import { useState } from "react";

function App() {

  const [cantidadTotal, setCantidadTotal] =useState(0);

  function sumaUnoAlTotal(e){
    e.preventDefault();
    let cantidad = cantidadTotal+1;
    setCantidadTotal(cantidad);
  }

  return (
    <div className="App">
      <Cabecera cantidad={cantidadTotal} />
      <Listado sumar={sumaUnoAlTotal}/>
    </div>
  );
}

export default App;
