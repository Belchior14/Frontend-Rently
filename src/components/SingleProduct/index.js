import { useState, useEffect } from "react";
import { client } from "client";
import { Link } from "react-router-dom";

export function SingleProductShow() {
  const [product, setProduct] = useState(null);
  const [userOfTheProduct, setUserOfTheProduct] = useState("");

  const oneProduct = async () => {
    try {
      const response = await client.get(
        `/product/${window.location.href.split("/").at(-1)}`
      );
      setProduct(response.data.product);
      setUserOfTheProduct(response.data.rentUser);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    oneProduct();
  }, []);

  return (
    <div>
      {product ? (
        <div>
          <Link to={`/profile/${userOfTheProduct._id}`}><h1>{userOfTheProduct.firstName}</h1></Link>
            
         
          <h3>{product.name}</h3>
          <h3>{product.price}</h3>
        </div>
      ) : null}
    </div>
  );
}
