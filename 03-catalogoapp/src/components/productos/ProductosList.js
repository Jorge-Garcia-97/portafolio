import React, { useMemo } from 'react'
import { getProductsByTipo } from '../../selectors/getProductsByTipo'
import { ProductosCard } from './ProductosCard';

export const ProductosList = ({tipo}) => {
    
    const productos = useMemo(() => getProductsByTipo(tipo), [tipo]);

    return (
        <div className="container-fluid animate__animated animate__fadeIn">
            <div className="row p-2 justify-content-center align-items-center">
                {
                    productos.map(producto =>(
                        <ProductosCard key={producto.id}  {...producto}/>
                    ))
                }
            </div>
        </div>
    )
}
