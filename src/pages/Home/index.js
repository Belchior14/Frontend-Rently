import "./Home.css";
import { Link } from "react-router-dom";

export function Home() {

  return (
    <div>
      <h1 className="h1Home">Rent your favorite 
      products while spending 
      half of the money</h1>


      <Link to="/signup"> 
      <button className="Btn">
        Start Renting
      </button>
      </Link>
   

    </div>
  );
}
