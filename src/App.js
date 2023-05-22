import './App.css';
import HomePage from './HomePage.js';
import Shop from './Shop.js';
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions.js';
import Cart from './Cart.js';
import Product from './Product.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
      <Routes>
        <Route path="/Shop" element={<Shop />}></Route>
      </Routes>
      <Routes>
        <Route path="/FrequentlyAskedQuestions" element={<FrequentlyAskedQuestions />}></Route>
      </Routes>
      <Routes>
        <Route path="/Cart" element={<Cart />}></Route>
      </Routes>

      <Routes>
        <Route path="/Shop/:id" element={<Product />}></Route>
      </Routes>

    </Router>
  );
}

export default App;