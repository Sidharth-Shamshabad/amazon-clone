import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                />

                <div className="home__row">
                    <Product 
                        id="12321341"
                        title="The Lean Startup" 
                        price={19.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                        rating={5}
                    />
                    <Product 
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Liter Glass Bowl"
                        price={239.00}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61ldrpQsxBL._AC_UL160_SR160,160_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="43256753"
                        title="SANMADROLA Stuffed Animal Storage Bean Bag Chair Cover for Adults"
                        price={35.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71-kIVNiuLL._AC_UL320_.jpg"
                    />
                    <Product 
                        id="93728372"
                        title="All-new Echo (4th Gen) | With premium sound, smart home hub, and Alexa"
                        price={99.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71yEX4ugtJL._AC_UY218_.jpg"
                    />
                    <Product 
                        id="28374637"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB)"
                        price={999.00}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY218_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="28374637"
                        title="LG 38WK95C-W 37.5 21:9 UltraWide Curved IPS Monitor"
                        price={4964.95}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61W8K7KpI0L._AC_UY218_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
