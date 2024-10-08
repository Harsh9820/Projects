import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <HomePage /> */}
      {/* <Product /> */}
      <ProductDetails />
    </div>
  );
}

export default App;
