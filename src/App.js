import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Blog from './pages/Blog';
import Chef from './pages/Chef';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Shop from './pages/Shop';
import { CartProvider } from './utils/context';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
        <Cart/>
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/menu' element={<Menu />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/chef' element={<Chef />} />
            <Route path='/about' element={<About />} />
            <Route path='/FAQ' element={<FAQ />} />
            <Route path='/shop' element={<Shop />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
