import { client } from "client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function AllProductsShow() {
  const { search } = window.location;
/*   const query = new URLSearchParams(search).get("s");
 */  const [searchQuery, setSearchQuery] = useState("");
 const [searchCity, setSearchCity] = useState("")
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    client
      .get("/product")
      .then((response) => {
        /* console.log(response.data.message) */
        setProducts(response.data.product);
      })
      .catch((error) => console.log(error));
  };

  useEffect(async () => {
    await getProducts();
    filterProducts()
  }, []);

  useEffect(() => {
    filterProducts();
  }, [searchQuery, searchCity])

  const filterProducts = () => {
   /*  if (!query) {
      return products;
    } */
  const productFilters = products;

    if (searchQuery) productFilters = productFilters.filter((product) => product.name.includes(searchQuery))
    if (searchCity) productFilters = productFilters.filter((product) => product.city.includes(searchCity))
    return productFilters;
  }; 

/*   const filteredProducts = filterProducts(products, searchQuery);
 */ /*  const filteredCities = (filteredProducts, query) => {
    if (!query) {
      return filteredProducts;
    } 
    return filteredProducts.filter((product) => {
      const prodCity = product.city;
      return prodCity.includes(query);
    });
  } */

/*   const filteredCitiesProducts = filteredCities(filteredProducts, searchQuery)
 */
  return (
    <div className="theProducts">
      <form action="/" method="get">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search Products</span>
        </label>
        <input
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
          type="text"
          id="header-search"
          placeholder="Search products"
          name="s"
        />
      </form>

      <form action="/" method="get">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search Cities</span>
        </label>
        <input
          value={searchCity}
          onInput={(e) => setSearchCity(e.target.value)}
          type="text"
          id="header-search"
          placeholder="Search cities"
          name="s"
        />
      </form>


      <h1>Products</h1>
     {<div className="allProfileProducts">
        {filterProducts.map((product) => {
          return (
            <div className="profileProduct">
              <Link
                className="profileProductName"
                to={`/product/${product._id}`}
              >
                <div>
                  <h3>{product.name}</h3>
                  <img
                    className="productImg"
                    src={product.image}
                    alt={product.image}
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div> }
    </div>
  );
}
