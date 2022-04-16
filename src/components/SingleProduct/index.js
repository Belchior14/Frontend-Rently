import { AuthContext } from "context";
import { useContext, useState, useEffect } from "react";
import { client } from "client";

export function SingleProductShow() {
  const [product, setProduct] = useState(null);

  const oneProduct = async (name) => {
    try {
      const response = await client.get(
        `/product/${window.location.href.split("/").at(-1)}`,
        {
          name,
        }
      );
      setProduct(response.data.product);
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
          <h3>{product.name}</h3>
          <h3>{product.price}</h3>
        </div>
      ) : null}
    </div>
  );
}
