import { productos } from '../data/productos';

export const getProductsByTipo = ( tipo ) =>{
    const validtipo = ['Procesador', 'Monitor', 'Accesorios'];

    if (!validtipo.includes(tipo)) {
        throw new Error( `Tipo "${tipo}" no es correcto` );
    }

    return productos.filter(producto => producto.tipo ===tipo);

} 