import React, {useContext} from 'react';
import './Header.css';

import logo from '../../../assets/logo.png';
import Label from '../../public/Label/Label';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';
import Toggle from '../Toggle/Toggle';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {DarkModeContext} from '../../../context/DarkModeContext';

const Header = () => {
  const {darkMode} = useContext(DarkModeContext);
  const navigate = useNavigate();
  return (
    <Navbar expand="lg"  style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} className={`${darkMode ? 'nav-dark' : 'nav-light'}`}>
      <Container>
        <Link to='/'><img style={{ width: 350, marginRight: '5em' }} src={logo} alt="logo" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' className="text-decoration-none col px-md-3 yellow-police "><Nav.Item><Label content={"Cocktails"} /></Nav.Item></Link>
            <Link to='/ingredients' className="text-decoration-none col px-md-3 yellow-police" ><Nav.Item><Label content={"Ingrédients"} /></Nav.Item></Link>
            <Link to='/cocktail/random' className="text-decoration-none col px-md-3 yellow-police" ><Nav.Item><Label content={"Random'Cocktail"} onClick={() => {
              if (document.querySelector("div#random-cocktail")) {
                navigate(0);
              }
            }} /></Nav.Item></Link>
          </Nav>
          <Nav className="ms-auto">
            <div className="vr me-4" style={{ backgroundColor:'#FFDF2B'}}></div>
            <Nav.Item style={{ paddingTop: '1em', paddingRight: '1em' }}><Toggle /></Nav.Item>
            <ProfileDropdown></ProfileDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;