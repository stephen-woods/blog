"use strict"

import React from "react"
import Logo from "../components/logo.js"
import styles from "../components/mainmenu.module.css"
import { useCurrentBreakpointName } from "react-socks"
import { Link } from "gatsby"
import { Container, Col, MenuItem, Nav, Navbar, NavDropdown, Row, Tab } from "react-bootstrap"

class MainMenu extends React.Component {
  render() {
    return <aside className={this.style()}>
      <Logo/>
      <NavMenu/>
    </aside>
  }

  style() {
    switch (this.props.breakpoint) {
      case "xsmall":
      case "small":
        return [styles.menu, styles.s_menu].join(" ")
      default:
        return styles.menu
    }
  }
}

class NavMenu extends React.Component {
  render() {
    return null

  }
}

export default () => {
  const breakpoint = useCurrentBreakpointName()
  return <MainMenu breakpoint={breakpoint}/>
}