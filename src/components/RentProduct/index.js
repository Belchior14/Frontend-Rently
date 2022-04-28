import { client } from "client";
import { AuthContext } from "context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./RentProduct.css"


export function RentProductButton () {
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)

    const handleRentProduct = async () => {
        try {
          const response = await client.post(`/product/rent/${window.location.href.split("/").at(-1)}`);
          navigate(`/profile/${user._id}`)
        } catch (error) {
          console.log(error);
        }
      };

    return(
        <button onClick={handleRentProduct}>Rent this product</button>
    )
}