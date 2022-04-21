import React from 'react';
import { Link } from 'react-router-dom';

export const ProductosCard = ({
    id,
    nombre, 
    marca, 
    tipo
}) => {

    return (
        <div className="card col-md-4 m-1 text-center justify-content-center align-items-center" style={{maxWidth:300}}>
            <div className="card-header w-100 bg-white">
                <img className="img-fluid m-2" src={`../assets/images/${id}.jpg`} alt={nombre}/>
                </div>
                <div className="card-body">
                    <h4 className="card-title">{nombre}</h4>
                    <p className="card-text">Fabricante: {marca}</p>
                    <p className="card-text">Tipo: {tipo}</p>
            </div>   
            <div className="card-footer w-100 bg-white">
                <Link to={`./producto/${id}`} className="btn btn-primary m-1 p-1">Conocer más</Link>
                </div> 
        </div>
    )
}
