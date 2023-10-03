import './sass/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteNav from './layout/SiteNav';
import { Routes, Route } from 'react-router-dom';
import Home from "./views/Home"
import About from "./views/About"
import ReduxExample from "./views/ReduxExample"
// import i18 from 'i18next';
import { useTranslation } from 'react-i18next';
import Products from './views/Products';
import ProductDetails from './components/ProductDetails';
function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className={i18n.language === "ar" ? "rtl" : ""}>
      <SiteNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/redux_example" element={<ReduxExample />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
