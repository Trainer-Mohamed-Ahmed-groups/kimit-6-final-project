import './sass/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteNav from './layout/SiteNav';
import { Routes, Route } from 'react-router-dom';
import Home from "./views/Home"
import About from "./views/About"
import Cart from "./views/Cart"
// import i18 from 'i18next';
import { useTranslation } from 'react-i18next';
import Products from './views/Products';
import ProductDetails from './components/ProductDetails';
import { useContext } from 'react';
import { ThemeContext } from "./context/ThemeContext"
import ErrorPage from './views/ErrorPage';
function App() {
  const { i18n } = useTranslation();
  let theme = useContext(ThemeContext)
  return (
    <div className={`App ${i18n.language === "ar" ? "rtl" : ""} ${theme.theme}`}>
      <SiteNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
