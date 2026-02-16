export const Card = (props) => {

    return(
        <div className="col-3">
            <button onClick={()=> console.log(props) }  className="btn btn-primary"/>
            <div className="card w-100">
                <button onClick={()=> console.log("")}></button>
                <img src={props.imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.titulo} </h5>
                    <p className="card-text"> {props.descripcion} </p>
                    <a target="_blank" href={props.url} className="btn btn-primary">Ver más</a>
                </div>
            </div>
        </div>
    );
};