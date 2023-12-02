import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../../../pages/Admin/Auth/Login';
import Error from '../../../_utils/Error.js';

const AuthRouter = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path='login' element={<Login />}></Route>
            <Route path='*' element={<Error />}></Route>
        </Routes>
    );
};

export default AuthRouter;