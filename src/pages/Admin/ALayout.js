import React from 'react';
import { Outlet } from 'react-router-dom';

import './admin.css'

import { SideMenu } from '../../components/index.js'

const ALayout = () => {
    return (
        <div className='Layout'>
            <div id="admin">
                <SideMenu />
                <div id="admin_body">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ALayout;