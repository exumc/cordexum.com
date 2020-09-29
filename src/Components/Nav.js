import React from "react";
import { Navbar, Icon, NavItem } from "react-materialize";

class Nav extends React.Component {
  render() {
    return (
      <Navbar
        alignLinks="right"
        brand={
          <a className="black-text bold" href="/home">
            Cord Exum
          </a>
        }
        centerChildren
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
        className="white black-text"
      >
        <NavItem className="black-text" href="/home">
          Portfolio
        </NavItem>
        <NavItem className="black-text" href="/about">
          About
        </NavItem>
        <NavItem className="black-text" href="/contact">
          Contact
        </NavItem>
      </Navbar>
    );
  }
}

export default Nav;
