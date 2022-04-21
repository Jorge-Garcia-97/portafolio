import { productos } from "../data/productos";

export const getProductsByName = (name)=>{
    
    if(name === ''){
        return[];
    }

    name = name.toLocaleLowerCase();
    return productos.filter(producto => producto.nombre.toLocaleLowerCase().includes(name));
}