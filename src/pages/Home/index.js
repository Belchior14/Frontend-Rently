import "./Home.css";
import { Link } from "react-router-dom";
import image from "./heroPicture.png";
import futebolImage from "./futebol.png";
import technology from "./recording.png";
import home from "./robot Vacuum.png";
import leisure from "./leisure.png";
import books from "./books.png";
import steps from "./Steps.png";
import confetti from "./confetti.png";

export function Home() {

  return (
    <div className="homePage">
      <div className="heroSection">
        <div className="mainQuote">
          <h1 className="h1Home">
          Gain money with your unused products
          <br/>
           or rent something you need for a fair price!
          </h1>
          <Link to="/signup">
            <button className="Btn">Start Renting</button>
          </Link>
        </div>
        <div className="productImages">
          <img className="heroPicture" src={image} alt="heroPicture" />
        </div>
      </div>
      <div className="secondsection">
        <div className="categories">
          <div className="categoriesTitle">
            <h2 className="h2title">Explore our categories</h2>
          </div>
          <div className="categoriesExamples">
            <div className="eachCategory">
              <h3>Sports</h3>
              <Link to="/product">
                <img src={futebolImage} alt="futebol" width={200} />
              </Link>
            </div>
            <div className="eachCategory">
              <h3>Technology</h3>
              <Link to="/product">
                <img src={technology} alt="Technology" width={200} />
              </Link>
            </div>
            <div className="eachCategory">
              <h3>Home</h3>
              <Link to="/product">
                <img src={home} alt="Home" width={212} />
              </Link>
            </div>
            <div className="eachCategory">
              <h3>Leisure</h3>
              <Link to="/product">
                <img src={leisure} alt="Leisure" width={200} />
              </Link>
            </div>
            <div className="eachCategory">
              <h3>Others</h3>
              <Link to="/product">
                <img src={books} alt="Others" width={200} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="thirdSection">
        <div>
          <h2 className="h2titleRenting">How to start renting?</h2>
        </div>
        <div>
          <img className="stepsImage" src={steps} alt="steps to rent" />
        </div>
        <div>

          <Link to="/signup">
            <button className="Btn">Start Renting</button>
          </Link>
        </div>
        <div className="enjoyMessage">
          <img className="confetti" src={confetti} alt="confetti" />
          <p>Start enjoying your product!</p>
          <img className="confetti" src={confetti} alt="confetti" />
        </div>
      </div>
    </div>
  );
}
