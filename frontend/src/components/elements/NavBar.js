import { Nav, NavItem } from 'react-bootstrap'
// Utils
import React from 'react'

const Navbar = () => (
  <Nav bsStyle="pills" activeKey={1}>
    <NavItem eventKey={1} href="/home">
      Home
    </NavItem>
    <NavItem eventKey={2} title="Item">
      Users
    </NavItem>
    <NavItem eventKey={3} disabled>
      Add User
    </NavItem>
  </Nav>
)

export default Navbar
