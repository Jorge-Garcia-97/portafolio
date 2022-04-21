import React from 'react';
import { ProductosList } from '../productos/ProductosList';

export const AccesoriosScreen = () => {
    return (
        <div>
            <h1>Accesorios</h1>
            <hr></hr>

            <ProductosList tipo="Accesorios"/>
            
        </div>
    )
}
