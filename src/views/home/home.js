import React from "react";
import illustrator from "../../assets/orthesis.png";
import "./home.css";

function Home() {
  return (
    <section className="home">
      <div className="grid">
        <div className="main-headline">
          <h2 className="title"> PRODUCTOS ORTOPEDICOS! </h2>
        </div>
        <div className="supp-headline">
          <h1 className="content"> Mejore su salud y calidad de vida </h1>
          <h2 className="content"> con nosotros...</h2>
        </div>
        <div className="hero-image">
          <img src={illustrator}></img>
        </div>
      </div>
    </section>
  );
}

export default Home;
