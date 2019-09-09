import React from "react"
import { Link } from "gatsby"
import { Container, Col, MenuItem, Nav, Navbar, NavDropdown, Row, Tab } from "react-bootstrap"
import { rhythm, scale } from "../utils/typography"
import { BreakpointProvider} from "react-socks"
import Logo from "./logo"
import MainMenu from "./main-menu"
class Layout extends React.Component {

  render() {

    const { location, title, children } = this.props
    return <div>
      <header>
      <MainMenu/>
      </header>
      <main>
        {children}
      </main>
      <footer id="footer" className="bg-dark pt-4 pb-4 ">
        <div className="container-fluid text-center text-md-left">
        <div className="row">
        <div className="pl-md-4 text-white">
            Copyright © {new Date().getFullYear()} Stephen Woods. All Rights Reserved
              </div>
            </div>
          </div>
        </footer>
    </div>

    {/*<header>*/}
      {/*  <Navbar bg="dark" variant="dark" fixed="top">*/}
      {/*    <div className="navbar-brand">STEPHEN WOODS</div>*/}
      {/*    <Link to="/" className="nav-link">Home</Link>*/}
      {/*    <Link to="/about" className="nav-link">About</Link>*/}
      {/*    <Link to="/skills" className="nav-link">Skills</Link>*/}
      {/*    <Link to="/education" className="nav-link">Education</Link>*/}
      {/*    <Link to="/blog" className="nav-link">Blog</Link>*/}

      {/*  </Navbar>*/}
      {/*</header>*/}
      {/*<main className="pt-5 mb-5">*/}
      {/*  {children}*/}
      {/*</main>*/}
      {/*<footer id="footer" className="bg-dark pt-4 pb-4 ">*/}
      {/*  <div className="container-fluid text-center text-md-left">*/}
      {/*    <div className="row">*/}
      {/*      <div className="pl-md-4 text-white">*/}
      {/*        Copyright © {new Date().getFullYear()} Stephen Woods. All Rights Reserved*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</footer>*/}
  }
}

export default Layout
