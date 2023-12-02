import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Public/Layout';
import AdminRouter from './pages/Admin/AdminRouter';
import PublicRouter from './pages/Public/PublicRouter';

import AuthRouter from './pages/Admin/Auth/AuthRouter';
import AuthGuard from './_helpers/AuthGuard';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route element={<Layout />}>
            <Route path='/*' element={<PublicRouter />} />
            <Route path='/admin/*' element={
              <AuthGuard>
                <AdminRouter />
              </AuthGuard>
            } />
            <Route path='/auth/*' element={<AuthRouter />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div >
    </DarkModeProvider>
  );
}

export default App;
