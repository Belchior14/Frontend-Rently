import { client } from "client";
import { useState ,useEffect } from "react";

export function EditProductForm() {
    const [product, setProduct] = useState()
    const [newName, setNewName] = useState()
    const [newDescription, setNewDescription] = useState()
    const [newImage, setNewImage] = useState()
    const [newPrice, setNewPrice] = useState()
    const [newCity, setNewCity] = useState()
    const [newCountry, setNewCountry] = useState()

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

      const changeProductContent = () => {
        product &&
        setNewName(product.name)
      };
      useEffect(() => {
        changeProductContent();
      }, [product])

  return (
    <div>
      {product && 
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
        <input type="text" id="name" value={newName} onChange={(event) => setNewName(event.target.value)}/>
        <label>Description:</label>
        <input type="text" id="description" value={newDescription} onChange={(event) => setNewDescription(event.target.value)} />
        <label>Image:</label>
        <input type="text" id="image" value={newImage} onChange={(event) => setNewImage(event.target.value)}/>
        <label>Price:</label>
        <input type="number" id="price" value={newPrice} onChange={(event) => setNewPrice(event.target.value)}/>
        <label>City:</label>

        <input type="text" id="city" value={newCity} onChange={(event) => setNewCity(event.target.value)}/>
        <label>Country:</label>
        <input type="text" id="country" value={newCountry} onChange={(event) => setNewCountry(event.target.value)}/>
        <button type="submit">Edit Product</button>
      </form>
   }
    </div> 
  );
}
