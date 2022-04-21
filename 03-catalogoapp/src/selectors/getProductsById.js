import { productos } from '../data/productos';

export const getProductsById = ( id ) =>{
    
    return productos.find(producto => producto.id === id);

}