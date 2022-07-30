import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      
      <div className="home_row" style={{ marginTop: "300px" }}>
        
           <Product title='the lean startup' price={29.99} 
           image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg' rating={1} /> 
           <Product/>

           <Product title='the lean startup' price={29.99} 
           image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg' rating={1} /> 
           <Product/>
                     
          </div>

          <div className="home_row">
           <Product
            id="12849"
            title="The Most helpful book in the world, this book gives you basic knowledge about life (ofcourse if you do not know)."
            price={29.99}
            image={`./images/shoe2.jpg`}
            rating={1}
            /> 
           <Product
            id="3534345"
            title="The Most helpful book in the world, this book gives you basic knowledge about life (ofcourse if you do not know)."
            price={29.99}
            image={`./images/watch.jpg`}
            rating={1}>
             </Product>
            <Product
            id="24242"
            title="The Most helpful book in the world, this book gives you basic knowledge about life (ofcourse if you do not know)."
            price={29.99}
            image={`./images/head.jpg`}
            rating={1}
          />
             
          </div>


          <div className="home_row">
          <Product
            id="24242"
            title="The Most helpful book in the world, this book gives you basic knowledge about life (ofcourse if you do not know)."
            price={29.99}
            image={`./images/dress.jpg`}
            rating={1}
            />

             <Product
            id="24242"
            title="The Most helpful book in the world, this book gives you basic knowledge about life (ofcourse if you do not know)."
            price={29.99}
            image={`./images/purse.jpg`}
            rating={1}
            />
                
          </div>
</div>
    </div>
    );
};

export default Home;