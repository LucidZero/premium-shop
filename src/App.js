import './App.css';
import HomePage from './HomePage.js';
import Shop from './Shop.js';
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions.js';
import Cart from './Cart.js';
import Product from './Product.js';
import PageNotFound from './PageNotFound.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/FrequentlyAskedQuestions" element={<FrequentlyAskedQuestions />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Shop/:id" element={<Product />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
