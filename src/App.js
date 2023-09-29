import './sass/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteNav from './layout/SiteNav';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import About from "./components/About"
import ReduxExample from "./components/ReduxExample"
import i18 from 'i18next';
function App() {
  return (
    <div className={i18.language === "ar" && "rtl"}>
      <SiteNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/redux_example" element={<ReduxExample />} />
      </Routes>
    </div>
  );
}

export default App;
