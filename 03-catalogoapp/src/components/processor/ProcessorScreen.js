import React from 'react';
import { ProductosList } from '../productos/ProductosList';

export const ProcessorScreen = () => {
    return (
        <div>
            <h1>Procesadores</h1>
            <hr></hr>
            <ProductosList tipo="Procesador"/>
        </div>
    )
}
