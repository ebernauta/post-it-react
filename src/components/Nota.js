


const Nota = ({id, titulo, texto, borrarNotaClick }) => {
    return(
        <div class="col">
            <div class="card" style={{width: '18rem'}}>
                <div class="card-body">
                    <button type="button" onClick={() => borrarNotaClick(id)} class="btn-close" aria-label="Close"></button>
                    <h5 class="card-title">{titulo}</h5>
                    <p>{texto}</p>
                </div>
            </div>
        </div>
        
        
        
    );


};

export default Nota;