import { useState, useEffect } from "react";
import { client } from "client"

export function SingleProductShow() {
    const [products, setProducts] = useState([]);
  
    const getProducts = () => {
      client
        .get("/product/:id")
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error));
    };
  
    useEffect(() => {
      getProducts();
    }, []);
    console.log(setProducts)
    return (
    <div>
        {products.map((product) => {
            return(
                <div>
                    <h3>{product.name}</h3>
                </div>
            )
        })}
    </div>
 )
}