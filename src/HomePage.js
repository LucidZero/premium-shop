import Navbar from "./Navbar";
import './HomePage.css';


const HomePage = () => {
  return (
    <div className="home-page">
      <div className="background-image">

          <Navbar />
        <div className="content">
            <h1>Elevate Your Craftsmanship</h1>

            <a id="visitShop" href="/Shop">VISIT OUR SHOP</a>
        </div>
      </div>
    </div>

  );
}

export default HomePage;
