import Nota from "./Nota";
import AgregarNota from "./AgregarNota";
const ListasNotas = ({notas, guardarNotaClick, borrarNotaClick }) => {
    return(
        <div class="row">
            {notas.map((nota) => (
            <Nota id={nota.id} 
            titulo={nota.titulo} 
            texto={nota.texto}
            borrarNotaClick={borrarNotaClick}
            /> 
            ))}
            <AgregarNota guardarNotaClick={guardarNotaClick} />
        </div>
        
        
    );
};

export default ListasNotas;