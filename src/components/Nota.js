


const Nota = ({id, titulo, texto  }) => {
    return(
        <div class="col">
            <div class="card" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">{titulo}</h5>
                    <p>{texto}</p>
                    <button type="button" class="btn-close" aria-label="Close"></button>
                </div>
            </div>
        </div>
        
        
        
    );


};

export default Nota;