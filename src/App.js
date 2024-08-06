import './App.css';
import Navbar from './Compounts/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Compounts/Pages/Shop';
import ShopCategory from './Compounts/Pages/ShopCategory';
import Product from './Compounts/Pages/Product';
import Cart from './Compounts/Pages/Cart';
import LoginSignup from './Compounts/Pages/LoginSignup';
import Footer from './Compounts/Footer/Footer';
import Register from './Compounts/Register/Register';

function App() {
  return (
    <>
   
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route  path="/" element={<Shop/>} />
    </Routes>
    {/* <div className='container'> */}

    <Routes>
    
   
    <Route path="/mens" element={<ShopCategory category="men"/>} />
    <Route path="/womens" element={<ShopCategory category="women"/>} />
    <Route path="/kids" element={<ShopCategory category="kid"/>} />
    
    <Route path= "/product" element={<Product/>}/>
     
    {/* </Route> */}
    <Route path= "product/:id" element={<Product/>}/>

    <Route path="/cart" element={<Cart/>} />
    {/* </div> */}
    <Route path="/login" element={<LoginSignup/>} />
    <Route path="/signup" element={<Register/>} />
    </Routes>
    
    <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
