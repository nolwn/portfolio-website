import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Arrow } from "./index";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      headerStyle: {
        height: "100vh",
        width: "100%",
        position: "absolute",
        bottom: 0,
        zIndex: 5
      }
    }

    this.area = React.createRef();
    this.nav = React.createRef();


  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
    window.onresize = this.handleScroll;
  };

  handleScroll = e => {
    const areaHeight = this.area.current.offsetHeight;
    const dist = window.scrollY;
    const newHeaderHeight = areaHeight - dist;

    if (newHeaderHeight <= 100) {
      this.setState({
        ...this.state,
        headerStyle: {
          ...this.state.headerStyle,
          position: "fixed",
          bottom: "inherit",
          height: "100px"        }
      })

    } else {
      this.setState({
        ...this.state,
        headerStyle: {
          ...this.state.headerStyle,
          height: newHeaderHeight + "px"
        }
      })
    }

  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render = () =>
    <div className="header-area" ref={ this.area }>
        <nav
          className="orange header-area navbar navbar-expand-md navbar-dark"
          ref={ this.nav }
          style = { this.state.headerStyle}
        >
          <Container>
            <NavbarBrand href="/">
              <h1>Nolan Hellyer</h1>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink>
                    <AnchorLink href="#1">About</AnchorLink>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <AnchorLink href="#2">Experience</AnchorLink>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <AnchorLink href="#3">Projects</AnchorLink>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <AnchorLink href="#4">Connect</AnchorLink>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </nav>
        <div style={{ opacity: 1 - (window.scrollY * .01) }}>
          <Arrow number="1" white />
        </div>

    </div>;
}

export default Header;
