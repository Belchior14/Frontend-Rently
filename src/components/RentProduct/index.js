import { client } from "client";


export function RentProductButton () {

    const handleRentProduct = async () => {
        try {
          const response = await client.post(`/product/rent/${window.location.href.split("/").at(-1)}`);

          console.log(response)
      
        } catch (error) {
          console.log(error);
        }
      };

    return(
        <button onClick={handleRentProduct}>Rent this product</button>
    )
}