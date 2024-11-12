import React, { useContext } from "react";
import "../Cart/Cart.css";
import {BsTrash} from 'react-icons/bs';
import { CartContext } from "../../context/cartContext";

export default function Cart({ id, nombre, precio, imagen, cantidad }) {

    const { removeItem } = useContext(CartContext);

    const handleEliminar = () => {
        removeItem(id);
    }
    console.log(typeof (cantidad)
    )
    console.log(typeof (precio)
    )
    return (
        <>
            <tr>
                <td><img src={imagen} alt={nombre} className="infoImage" /></td>
                <td><p className="infoName">{nombre}</p></td>
                <td><p className="infoQuantity">{cantidad}</p></td>
                <td><p className="infoPrice">${precio}</p></td>
                <td><BsTrash onClick={handleEliminar} className="buttonDelete">Eliminar producto</BsTrash></td>
                <td><p className="infoTotalProduct">${cantidad * precio}</p></td>
            </tr>

        </>)
}