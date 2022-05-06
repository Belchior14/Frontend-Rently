import "./about.css";
import  zoey  from "./zoey.jpg";
import cristina from "./cristina.png"
import bandido from "./bandido.png"
import belchior from "./belchior.jpg"
import logo from "./modernLogo.png"

export function About() {
  return (
    <div className="aboutPage">
      <div className="divLogoImage">
        <img className="logoImage" src={logo} alt={logo}/>
      </div>
      <div className="visionTitle">
        <h1>Vision</h1>
      </div>
      <div className="vision">
        <div className="textArea">
          <p>
            It is estimated that we have at home a value of € 2,000 in products
            that are stopped or in our garages or even in closets.
          </p>
        </div>
        <div className="textArea">
          <p>Have you ever thought that you can rent these products?</p>
        </div>
        <div className="textArea">
          <p>
            Your neighbor might need a bike for a day and you can borrow yours
            that you haven't used for a year, and most amazingly, everyone wins!
          </p>
        </div>
        <div className="textArea">
          <p>
            You can earn some income from something you no longer use, your
            neighbor can ride a bicycle for a low price, and the environment
            also benefits, as they will make one less bicycle be produced.
          </p>
        </div>
      </div>
      <div className="teamTitle">
        <h1>Meet the team!</h1>
      </div>
      <div className="team">
        <div className="belchiorTeam">
          <div>
          <img className="teamMemberPicture" src={belchior} alt={belchior} />
          </div>
          <div className="teamMemberInfo">
            <p>
              <b>Name:</b> Belchior Fontão
            </p>
            <p>
              <b>Age:</b> 28
            </p>
            <p>
              <b>Nationality:</b> Portuguese
            </p>
            <p>
              <b>Favorite movie:</b> The Dark Knight
            </p>
          </div>
        </div>
        <div className="cristinaTeam">
          <div>
          <img className="teamMemberPicture" src={cristina} alt={cristina} />
          </div>
          <div className="teamMemberInfo">
            <p>
              <b>Name:</b> Cristina Quijano
            </p>
            <p>
              <b>Age: </b>
              <span>&#128563;</span>
            </p>
            <p>
              <b>Nationality:</b> Colombian
            </p>
            <p>
              <b>Favorite movie:</b> Inception
            </p>
          </div>
        </div>
        <div className="bandidoTeam">
          <div >
          <img className="teamMemberPicture" src={bandido} alt={bandido} />
          </div>
          <div className="teamMemberInfo">
            <p>
              <b>Name:</b> Bandido
            </p>
            <p>
              <b>Age:</b> 1.5
            </p>
            <p>
              <b>Nationality:</b> Netherlands
            </p>
            <p>
              <b>Favorite Movie:</b> Dog Time
            </p>
          </div>
        </div>
        <div className="zoeyTeam">
          <div >
            <img className="teamMemberPicture" src={zoey} alt={zoey} />
          </div>
          <div className="teamMemberInfo">
            <p>
              <b>Name:</b> Zoey
            </p>
            <p>
              <b>Age:</b> 3
            </p>
            <p>
              <b>Nationality:</b> Portuguese
            </p>
            <p>
              <b>Favorite Movie:</b> Into the Wild
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
