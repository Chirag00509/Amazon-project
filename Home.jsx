import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home_container">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="Amazon Prime"
            className="home_img"
          />

          <div className="home_row">
            <Product 
              id='12345678'
              key='1'
              title='The Lean Startup: How 
              Constant Innovation Creates Radically 
              Successful BusinessesThe Lean Startup: How 
              Constant Innovation Creates Radically 
              Successful Businesses'
              price={30}
              rating={3}
              img='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
              img_alt='Book img' />

              <Product 
              id='15465151'
              key='2'
              title='Kenwood kMix Stand Mixer for 
              Baking,Stylish Kitchan Mixer with 
              K-beater, Dough Hook and Whisk , 5 Liter 
              Glass Bowl'
              price={3000}
              rating={4}
              img='https://m.media-amazon.com/images/I/81q2NoeC78S._SX679_.jpg'
              img_alt='Beater' />
          </div>

          <div className="home_row">
          <Product 
              id='12895678'
              key='3'
              title='Mi Smart Band 5 – 
              India’s No. 1 Fitness Band, 
              1.1-inch AMOLED Color Display, 
              Magnetic Charging, 2 Weeks Battery Life, 
              Personal Activity Intelligence (PAI), 
              Women’s Health Tracking'
              price={1000}
              rating={5}
              img='https://m.media-amazon.com/images/I/719ZywAmvOL._SX522_.jpg'
              img_alt='Mi Smart Band' />
          <Product 
              id='56345678'
              key='4'
              title='ZEBRONICS Zeb-Smart Bot, 
              Smart Speaker with IR Remote, Alexa 
              Built-in, Works with iOS and Android Smartphones'
              price={5000}
              rating={2}
              img='https://m.media-amazon.com/images/I/710q0Qi8VBL._SY879_.jpg'
              img_alt='Alexa' />
          <Product 
              id='56745678'
              key='5'
              title='2021 Apple iPad Pro with 
              Apple M1 chip (11-inch/27.96 cm, Wi-Fi, 128GB) - Silver (3rd Generation)'
              price={71000}
              rating={4}
              img='https://m.media-amazon.com/images/I/81MF389-9gS._SX679_.jpg'
              img_alt='iPad' />
          </div>

          <div className="home_row">
          <Product 
              id='12345123'
              key='6'
              title='AmazonBasics 127cm (50 inch) 4K Ultra HD Smart LED Fire TV AB50U20PS (Black)'
              price={70000}
              rating={4}
              img='https://m.media-amazon.com/images/I/71AqQyCMmeL._SX522_.jpg'
              img_alt='Televison' />
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
