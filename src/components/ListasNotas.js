import Nota from "./Nota";
import AgregarNota from "./AgregarNota";
const ListasNotas = ({notas}) => {
    return(
        <div class="row">
            {notas.map((nota) => (
            <Nota id={nota.id} 
            titulo={nota.titulo} 
            texto={nota.texto}/> 
            ))}
            <AgregarNota/>
        </div>
        
        
    );
};

export default ListasNotas;