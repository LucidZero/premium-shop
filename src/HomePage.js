import Navbar from "./Navbar";
import './HomePage.css';
import Footer from './Footer.js'; 


const HomePage = () => {
  return (
    <div>
      <div className="home-page">
        <div className="background-image">

            <Navbar />
          <div className="content">
              <h1>Elevate Your Craftsmanship</h1>

              <a id="visitShop" href="#/Shop">VISIT OUR SHOP</a>
          </div>
        </div>
        <Footer />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
