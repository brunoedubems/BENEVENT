import { Routes, Route } from 'react-router-dom';

import { Busca } from '../pages/Busca';
import { Cadastro } from '../pages/Cadastro';
import { Profile } from '../pages/Profile';
// import { SignIn } from '../pages/SignIn';


export function AppRoutes() {
  return (
    <Routes>
    <Route path="/" element={<Busca />} />
    <Route path="/cadastro" element={<Cadastro />} />
    <Route path="/profile" element={<Profile />} />
    {/* <Route path="/signin" element={<SignIn />} /> */}
    </Routes>

  )}