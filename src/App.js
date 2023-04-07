import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Components/Header';
import Footers from './Components/Footer';
import StoreFront from './Components/StoreFront';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<StoreFront />}/>
        <Route path="/product/:id" element={<ProductDetails />}/>
      </Routes>
    <Footers/>
    </BrowserRouter>
    </>
  );
}

export default App;
