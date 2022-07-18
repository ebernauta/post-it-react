

const AgregarNota = () => {
    return(<div className="card nueva">
        <textarea 
        rows="8" 
        cols="10" 
        placeholder="Agrega una nota nueva"
        ></textarea>
        <div className="card-body">
            <small>200 caracteres</small>
            <button className="guardar">Guardar</button>
        </div>
    </div>
    );
};

export default AgregarNota;