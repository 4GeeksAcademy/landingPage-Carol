export const Card = (props) => {

    return(
        <div className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 w-100">
                <img src={props.imagen} className="card-img-top" alt={props.titulo} />
                <div className="card-body">
                    <h5 className="card-title">{props.titulo} </h5>
                    <p className="card-text"> {props.descripcion} </p>
                    <a target="_blank" rel="noreferrer" href={props.url} className="btn btn-primary">Ver más</a>
                </div>
            </div>
        </div>
    );
};
