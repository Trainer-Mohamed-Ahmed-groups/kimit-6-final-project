import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import i18n from "i18next";
import { faMoon, faSun, faLanguage, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux"

let handleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")
    localStorage.setItem("language", i18n.language)
}


function SiteNav() {
    let theme = useContext(ThemeContext)
    let { t, i18n } = useTranslation()
    const countState = useSelector((state) => state.count)

    return (
        <Navbar expand="md" className="bg-body-tertiary text-center">
            <Container>
                <Navbar.Brand href="#home">Kimit final project</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mx-auto">
                        <NavLink className="nav-link" to="/">{t('home')}</NavLink>
                        <NavLink className="nav-link" to="/about">{t('about')}</NavLink>
                        <NavLink className="nav-link" to="/redux_example">{t('cart')}</NavLink>
                        <NavLink className="nav-link" to="/products">{t('products')}</NavLink>
                        <FontAwesomeIcon
                            icon={faLanguage}
                            onClick={handleLang}
                            className='text-secondary mt-3 m-2 theme_icon'
                        >
                            {i18n.language === "en" ? "تغيير الى العربية" : "Change to English"}
                        </FontAwesomeIcon>
                        <FontAwesomeIcon
                            icon={theme.theme === "light" ? faMoon : faSun}
                            className="text-secondary mt-3 m-2 theme_icon"
                            onClick={theme.toggleTheme}
                        />
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            className="text-warning mt-3 m-2 theme_icon  "
                        />
                        <div className="text-primary">{countState}</div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SiteNav;