import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { accountService } from '../../../_services/account.service';
import { useNavigate } from 'react-router-dom';

import UserIcon from '../../../assets/icons/user_icon.png';

const ProfileDropdown = () => {

    let navigate = useNavigate();

    const logout = () => {
        accountService.logout()
        navigate('/')
    }

    return (
        <NavDropdown title={<img src={UserIcon} alt="User" style={{ width: 30, height: 30 }} />} id="nav-dropdown" drop="down">
            {accountService.isLogged() ? (
                <>
                    <NavDropdown.Item as={Link} to="/admin/dashboard">
                        Administration
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={logout}>
                        Se déconnecter
                    </NavDropdown.Item>
                </>
            ) : (
                <NavDropdown.Item as={Link} to="/admin/dashboard">
                    Se connecter
                </NavDropdown.Item>
            )}
        </NavDropdown>
    );
};

export default ProfileDropdown;