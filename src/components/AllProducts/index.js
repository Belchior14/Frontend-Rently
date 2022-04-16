import axios from "axios";
import { client } from "client";
import { useState, useEffect } from "react";
import {  useNavigate, Link } from "react-router-dom";

export function AllProductsShow() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const getProducts = () => {
    client
      .get("/product")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.map((product) => {
        return (
          <div>
            {<Link to={`/product/${product._id}`}> <h3>{product.name}</h3> </Link>}
           {/*  <h3>{product.country}</h3>
            <h3>{product.city}</h3>
            <h3>{product.price}</h3>
            <h3>{product.description}</h3> */}
            {/* <h3 onClick={navigate("/profile/:id")} >{product.user}</h3> */}
          </div>
        );
      })}
    </div>
  );
}
