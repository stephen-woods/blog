import React from "react"
import { Link } from "gatsby"
import { Container, Col, MenuItem, Nav, Navbar, NavDropdown, Row, Tab } from "react-bootstrap"
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {

  render() {

    const { location, title, children } = this.props
    return <div>

      <header>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Link to="/" className="navbar-brand">Stephen Woods</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/resume" className="nav-link">Resume</Link>
          <Link to="/aboutme" className="nav-link">About Me</Link>
        </Navbar>
      </header>
      <main className="pt-5 mb-5">
        {children}
      </main>
      <footer id="footer" className="bg-dark pt-4 pb-4 ">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="pl-md-4 text-white">
              Copyright © {new Date().getFullYear()}  Stephen Woods
            </div>
          </div>
        </div>
      </footer>
    </div>
  }

  // render() {
  //   const { location, title, children } = this.props
  //   const rootPath = `${__PATH_PREFIX__}/`
  //   let header
  //
  //   if (location.pathname === rootPath) {
  //     header = (
  //       <h1
  //         style={{
  //           ...scale(1.5),
  //           marginBottom: rhythm(1.5),
  //           marginTop: 0,
  //         }}
  //       >
  //         <Link
  //           style={{
  //             boxShadow: `none`,
  //             textDecoration: `none`,
  //             color: `inherit`,
  //           }}
  //           to={`/`}
  //         >
  //           {title}
  //         </Link>
  //       </h1>
  //     )
  //   } else {
  //     header = (
  //       <h3
  //         style={{
  //           fontFamily: `Montserrat, sans-serif`,
  //           marginTop: 0,
  //         }}
  //       >
  //         <Link
  //           style={{
  //             boxShadow: `none`,
  //             textDecoration: `none`,
  //             color: `inherit`,
  //           }}
  //           to={`/`}
  //         >
  //           {title}
  //         </Link>
  //       </h3>
  //     )
  //   }
  //   return (
  //     <div
  //       style={{
  //         marginLeft: `auto`,
  //         marginRight: `auto`,
  //         maxWidth: rhythm(24),
  //         padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
  //       }}
  //     >
  //       <header>{header}</header>
  //       <main>{children}</main>
  //       <footer>
  //         © {new Date().getFullYear()}, Built with
  //         {` `}
  //         <a href="https://www.gatsbyjs.org">Gatsby</a>
  //       </footer>
  //     </div>
  //   )
  // }
}

export default Layout
