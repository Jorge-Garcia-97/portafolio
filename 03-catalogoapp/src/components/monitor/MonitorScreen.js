import React from 'react';
import { ProductosList } from '../productos/ProductosList';

export const MonitorScreen = () => {
    return (
        <div>
            <h1>Monitores</h1>
            <hr></hr>

            <ProductosList tipo="Monitor"/>

        </div>
    )
}
