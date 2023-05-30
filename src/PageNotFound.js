
import './PageNotFound.css';
import Navbar from './Navbar';



function PageNotFound() {
  return (
    <div className="NotFound">
    <Navbar />
    <div className="NotFoundContent">
      <h1 className='NotFoundText'>Page not found</h1>
    </div>
  </div>
  );
}

export default PageNotFound;
