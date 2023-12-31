import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import i18n from "i18next";
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

let handleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")
}
function SiteNav() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Kimit final project</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        <NavLink className="nav-link" to="/redux_example">redux example</NavLink>
                        <Button
                            variant="info"
                            onClick={handleLang}>
                            {i18n.language === "en" ? "تغيير الى العربية" : "Change to English"}
                        </Button>
                        <FontAwesomeIcon icon={faEarthAmericas} />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SiteNav;