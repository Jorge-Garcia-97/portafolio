import React, { useMemo } from 'react';
import queryString from "query-string";
import { useForm } from '../hooks/useForm';
import { ProductosCard } from '../productos/ProductosCard';
import { getProductsByName } from '../../selectors/getProductsByName';
import { useLocation } from 'react-router-dom';

export const SearchScreen = ({history}) => {
    const location = useLocation();
    const {q=''}=queryString.parse(location.search);
    
    const [formValues, handleInputChange]= useForm({
        nombre:q
    });

    const {nombre} = formValues;

    const productoFiltro =  useMemo(()=>getProductsByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${nombre}`);
    }

    return (
        <div className="container">
            <h1>Buscar Producto</h1>
            <hr />

            <div className="row">
                <div className="col-md-3 p-2">

                    <form onSubmit={handleSearch}>
                        <div className="form-group p-1">
                            <input type="text" placeholder="Nombre del producto"
                                className="form-control"
                                name="nombre"
                                value={nombre}
                                autoComplete="off"
                                onChange={handleInputChange}></input>
                        </div>
                        <div className="form-group mt-3 p-1">
                            <button type="submit" className="btn btn-outline-primary">Buscar</button>
                        </div>

                    </form>

                </div>
                <div className="col-md-9">
                    <h4> Resultados </h4>
                    <hr />
                    <div className="container-fluid animate__animated animate__fadeIn">
                        <div className="row p-2 justify-content-center align-items-center">

                            {
                                (q === '') &&
                                <div className="alert alert-info">
                                    Empieza por buscar el producto
                                </div>
                            }
                        
                            {
                                (q !== '' && productoFiltro.length === 0) &&
                                <div className="alert alert-danger">
                                    No se ha podido encontrar el producto {q}
                                </div>
                            }

                            {
                                productoFiltro.map(producto => (
                                    <ProductosCard
                                        key={producto.id}
                                        {...producto}
                                    />
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
