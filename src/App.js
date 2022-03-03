import ProductsList from "./ProductsList";
import SingleProduct from "./SingleProduct";
import Navbar from "./Navbar";
import Home from "./Home";
import Cart from "./cart";


import { HashRouter  as Router, Route, Routes} from 'react-router-dom'

function App() {
  
 
  return (
    <div className="App">
       <Router  >
      <Navbar />
      <Routes>
      <Route exact path="/" element={ <Home />} /> 
      <Route path="/products" element={ <ProductsList />} />
      <Route path= "/cart" element = {<Cart/>} />
      <Route path="products">
      <Route path=":id" element={<SingleProduct />} />
     
      </Route>
      </Routes>

      </Router>
  </div>
  );
}

export default App;
