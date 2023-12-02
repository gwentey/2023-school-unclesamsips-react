import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import './SideMenu.css';
import {Label} from '../../index';

const SideMenu = () => {
    return (

        <Card className='mt-4'>
            <div className="SideMenu">
            <Card.Title className='pt-3'>Administration</Card.Title>
            <hr className='mx-5'></hr>
                <Navbar expand="lg" className="bg-white border-0 flex-column">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="flex-column">
                            <Link to='/admin/dashboard' className="text-decoration-none col px-md-3 mb-2 yellow-police "><Nav.Item><Label content={"Tabeau de bord"} /></Nav.Item></Link>
                            <Link to='/admin/user' className="text-decoration-none col px-md-3 mb-2 yellow-police "><Nav.Item><Label content={"Utilisateurs"} /></Nav.Item></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </Card>
    );
};

export default SideMenu;
