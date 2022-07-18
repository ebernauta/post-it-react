import { useState } from 'react';
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

  return (
    <div className="container">
      <ListasNotas notas={notas}/>
    </div>
  );
};

export default App;