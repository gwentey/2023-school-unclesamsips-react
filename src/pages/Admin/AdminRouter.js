import React from 'react';
import { Route, Routes } from 'react-router-dom'

import { ALayout, Dashboard } from '../../pages/Admin'

import Error from '../../_utils/Error'
import { User, UserEdit } from './';

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout />}>
                <Route index element={<Dashboard />} />
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='user'>
                    <Route index element={<User />} />
                    <Route path='index' element={<User />} />
                    <Route path='edit/:uid' element={<UserEdit />} />
                </Route>
                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    );
};

export default AdminRouter;