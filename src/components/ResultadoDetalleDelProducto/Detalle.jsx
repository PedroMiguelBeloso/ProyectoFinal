import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../services/productService.js";
import "./Detalle.css";
import { CartContext } from "../../context/cartContext";



const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const { addItem } = useContext(CartContext);
  
  const onAdd = () => {
    if (product) {
      addItem({ ...product, quantityToAdd: 1 }); // Agrega el producto con una cantidad inicial
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productData = await fetchProductById(id);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    getProduct();
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="product-detail-container">
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
      <p className="price">Price: ${product.price}</p>
      <p className="rating">Rating: {product.rating}</p>
      <button className="button" onClick={onAdd}> Add to cart </button>
    </div>
  );
};

export default ProductDetail;
