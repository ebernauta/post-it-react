import { useState } from "react";


const AgregarNota = ({guardarNotaClick}) => {
    const [notaTexto, setNotaTexto] = useState('');
    const manejarCambio = (event) => {
        setNotaTexto(event.target.value);
    };
    
    const agregarNotaClick = () => {
        if (notaTexto.trim().length > 0){
            guardarNotaClick(notaTexto);
            setNotaTexto('')
        }
    };

    return(<div className="card nueva">
        <textarea 
        rows="8" 
        cols="10" 
        placeholder="Agregar titulo de la nota"
        value={notaTexto}
        onChange={manejarCambio}
        ></textarea>
        <textarea 
        rows="8" 
        cols="10" 
        placeholder="Agregar titulo de la nota"
        value={notaTexto}
        onChange={manejarCambio}
        ></textarea>
        <div className="card-body">
            <button className="guardar" onClick={agregarNotaClick}>Guardar</button>
        </div>
    </div>
    );
};

export default AgregarNota;