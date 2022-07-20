import { useEffect, useState } from 'react';
import {nanoid} from 'nanoid';
import ListasNotas from "./components/ListasNotas";

const App = () => {

  const [notas, setNotas] = useState([
    {
      id: nanoid(),
      titulo: "Esta es mi primera nota",
      texto: "Esta es una prueba de mi nota",
    },
    {
      id: nanoid(),
      titulo: "Esta es mi segunda nota",
      texto: "Esta es una prueba de mi nota",
    },
    {
      id: nanoid(),
      titulo: "Esta es mi tercera nota",
      texto: "Esta es una prueba de mi nota",
    },
    {
      id: nanoid(),
      titulo: "Esta es mi nueva nota",
      texto: "Esta es una prueba de mi nota",
    }

  ]);

  useEffect(() => {
    const notasGuardadas = JSON.parse(localStorage.getItem('post-it-app-data')
    );
    if (notasGuardadas){
      setNotas(notasGuardadas);
    };
  },[]);


  useEffect(() => {
    localStorage.setItem('post-it-app-data', 
    JSON.stringify(notas)
    );

  },[notas])

  const agregarNota = (titulo, texto) => { //No estoy seguro si agregar titulo como parametro
    const nuevaNota = {
      id: nanoid(),
      titulo: titulo,
      texto: texto,
    }
    const nuevasNotas = [...notas, nuevaNota];
    setNotas(nuevasNotas);
  }

  const borrarNota = (id) => {
    const nuevasNotas = notas.filter((nota)=> nota.id !== id);
    setNotas(nuevasNotas);
  }
  return (
    <div className="container">
      <ListasNotas 
      notas={notas} 
      guardarNotaClick={agregarNota}
      borrarNotaClick={borrarNota}
      />
    </div>
  );
};
export default App;