import React from "react";
import {
    Navbar,
    NavbarBrand,
 } from 'reactstrap';

export class Header extends React.Component {
    render() {
        return (
            <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">Dynamic Wizard Form</NavbarBrand>
            </Navbar>
          </div>
        );
    }
}