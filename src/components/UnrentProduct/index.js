import { client } from "client";
import { AuthContext } from "context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./UnrentProduct.css"

export function UnrentProductButton () {
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
  
      const handleUnrentProduct = async () => {
          try {
            const response = await client.post(`/product/unrent/${window.location.href.split("/").at(-1)}`);
            navigate(`/profile/${user._id}`)
          } catch (error) {
            console.log(error);
          }
        };
  
      return(
          <button onClick={handleUnrentProduct}>Return this product</button>
      )
  }