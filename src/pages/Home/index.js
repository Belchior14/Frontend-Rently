import "./Home.css";
import { Link } from "react-router-dom";
import image from "./heroPicture.png"

export function Home() {

  return (
    <div className="heroSection">
      <div className="mainQuote">
      <h1 className="h1Home">Rent your favorite 
      <br/>
      products while spending
      <br/>
      half of the money</h1>

      <Link to="/signup"> 
      <button className="Btn">
        Start Renting
      </button>
      </Link>
      </div>

      <div className="productImages">
      <img className="heroPicture" src={image} alt="heroPicture" />
      </div>

    </div>
  );
}
