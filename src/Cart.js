import './Cart.css';
import Navbar from './Navbar';
import Footer from './Footer.js';
import ProductInCart from './ProductInCart';
const Cart = () => {

  return (     <div>
    <Navbar />
      <ProductInCart />
    <Footer />
  </div> );
}

export default Cart;