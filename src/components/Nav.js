import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

// reactstrap components
import {
    Collapse,
    UncontrolledCollapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    FormGroup,
    Form,
    Input,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Button,
    Container
} from "reactstrap";

const SimpleNav = ({ activeTab, onTabChange }) => {

    const itemClass = tabName =>
        `App-nav-item ${activeTab === tabName ? 'selected' : ''
        }`;

    return (
        <nav className="App-nav">
            <ul>
                <li className={itemClass('items')}>
                    <button onClick={() => onTabChange('items')}>Items</button>
                </li>
                <li className={itemClass('cart')}>
                    <button onClick={() => onTabChange('cart')}>Cart</button>
                </li>
            </ul>
        </nav>
    );
};

// export default SimpleNav;

// core components

function PaperKitNav({ activeTab, onTabChange }) {
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);

    const itemClass = tabName =>
        `App-nav-item ${activeTab === tabName ? 'selected' : ''
        }`;

    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle("nav-open");
    };

    return (
        <Navbar
            // color-on-scroll="300"
            expand="lg"
            color="primary"
        >
            <Container>
                <div className="navbar-translate">
                    <NavbarBrand
                        data-placement="bottom"
                        href="https://www.fiverr.com/tonyomendoza"
                        target="_blank"
                        title="Tony Mendoza"
                    >
                        Mendoza Creative Solutions
                    </NavbarBrand>
                    <button
                        aria-expanded={navbarCollapse}
                        className={classnames("navbar-toggler navbar-toggler", {
                            toggled: navbarCollapse,
                        })}
                        onClick={toggleNavbarCollapse}
                    >
                        <span className="navbar-toggler-bar bar1" />
                        <span className="navbar-toggler-bar bar2" />
                        <span className="navbar-toggler-bar bar3" />
                    </button>
                </div>
                <Collapse
                    className="justify-content-end"
                    navbar
                    isOpen={navbarCollapse}
                >
                    <Nav navbar>
                        <NavItem>
                            <NavLink className={itemClass('items')} onClick={() => onTabChange('items')}>
                                <i class="fa-solid fa-bag-shopping"></i> Items
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={itemClass('cart')} onClick={() => onTabChange('cart')}>
                                <i class="fa-solid fa-cart-shopping"></i> Cart
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                data-placement="bottom"
                                href="http://www.fiverr.com/s2/3bcc16d610"
                                target="_blank"
                                title="Follow us on Twitter"
                            >
                                <i className="fa fa-twitter" />
                                <p className="d-lg-none">Twitter</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                data-placement="bottom"
                                href="http://www.fiverr.com/s2/3bcc16d610"
                                target="_blank"
                                title="Like us on Facebook"
                            >
                                <i className="fa fa-facebook-square" />
                                <p className="d-lg-none">Facebook</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                data-placement="bottom"
                                href="http://www.fiverr.com/s2/3bcc16d610"
                                target="_blank"
                                title="Follow us on Instagram"
                            >
                                <i className="fa fa-instagram" />
                                <p className="d-lg-none">Instagram</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                data-placement="bottom"
                                href="https://github.com/tonyomendoza"
                                target="_blank"
                                title="Star on GitHub"
                            >
                                <i className="fa fa-github" />
                                <p className="d-lg-none">GitHub</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <Button
                                className="btn-round"
                                color="danger"
                                href="https://www.creative-tim.com/product/paper-kit-pro-react?ref=pkr-examples-navbar"
                                target="_blank"
                            >
                                <i className="nc-icon nc-spaceship"></i> Theme by Creative Tim
                            </Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default PaperKitNav;