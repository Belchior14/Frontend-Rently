import { client } from "client";
import { useState ,useEffect } from "react";



export function EditProductForm() {


    const [product ,setProduct] = useState()


    const oneProduct = async () => {
        try {
          const response = await client.get(
            `/product/${window.location.href.split("/").at(-1)}`
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
      <form>
          {console.log(product)}
        <label>Category:</label>
        <select>
          <option value="Technology">Technology</option>
          <option value="Sports">Sports</option>
          <option option="Home">Home</option>
          <option option="Leisure">Leisure</option>
          <option option="Others">Others</option>
        </select>

        <label>Product Name:</label>
        <input type="text" id="name" value="test" />
        <label>Description:</label>
        <input type="text" id="description"  />
        <label>Image:</label>
        <input type="text" id="image" />
        <label>Price:</label>
        <input type="number" id="price" />
        <label>City:</label>

        <input type="text" id="city" />
        <label>Country:</label>
        <input type="text" id="country" />
        <button type="onSubmit">Edit Product</button>
      </form>
    </div>
  );
}
