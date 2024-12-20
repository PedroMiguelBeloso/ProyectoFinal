import React, { useContext } from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import "../Cart/CartList.css";
import { CartContext } from "../../context/cartContext";

export default function CartList() {

    const { cart, cartQuantity, priceTotal,clear } = useContext(CartContext)

    return (

        <div className="flexboxCL">
            {
                cartQuantity === 0
                    ? <>
                        <div className="flexboxNotFound">
                            <h2 className="notFound">Items not found</h2>
                            <Link to="/" ><button className="notFoundLink"> Back to list </button></Link>
                        </div>
                    </>
                    : <>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th></th>
                                    <th>Total Item</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((prod) => {
                                        return (
                                            <Cart key={prod.id} id={prod.id} nombre={prod.title} precio={prod.price} imagen={prod.thumbnail} cantidad={prod.quantityToAdd} precioTotal={priceTotal} />
                                        )
                                    })
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>{cartQuantity}</td>
                                    <td></td>
                                    <td></td>
                                    <td>{priceTotal}</td>
                                </tr>
                            </tfoot>
                        </table>
                        <Link> <button className="buttonProceed"onClick={clear}> Finish purchase </button> </Link>
                    </>
            }
        </div>

    )
}