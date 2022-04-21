import React,  { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getProductsById } from '../../selectors/getProductsById';

export const ProductosScreen = ({history}) => {

    const { productoId } = useParams();

    const producto = useMemo(() => getProductsById(productoId), [productoId]);

    if (!producto) {
        return <Redirect to="/" />;
    }

    const handleReturn = () =>{
        if(history.lenght <= 2){
            history.push('/');
        }else{
            history.goBack();
        }
    }

    const {
        nombre,
        marca,
        tipo,
        descripcion,
    } = producto;

    return (
        <div className="container-fluid">
            <h3 className="mt-3">Información del Producto</h3>      
            <hr/>
        <div className="container mt-3 animate__animated animate__fadeIn">
            <div className="row m-1">
                <div className="col-md-5 p-4">
                    <div className="rounded border p-1">
                    <img className="img-fluid m-1 mx-auto d-block" src={`../assets/images/${productoId}.jpg`} alt={nombre} />
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="p-2">
                    <h3 className="display-5">{nombre}</h3>
                    <hr />
                    </div>
                    <div className="border-bottom p-2 bg-light">
                    <p className="lead">Fabricante: {marca}</p>
                    <p className="lead">Tipo: {tipo}</p>
                    <p className="lead">Descripción: {descripcion}</p>
                    </div>
                </div>

            </div>
            <div className="mt-3 text-center">
                <button className="btn btn-primary" onClick={handleReturn}>Regresar</button>
            </div>
        </div>
        </div> 
    )
}

