import './App.css';
import {  Navigation } from './customer/component';
import Product from './customer/component/Product/Product';
// import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <HomePage /> */}
      <Product />

    </div>
  );
}

export default App;
