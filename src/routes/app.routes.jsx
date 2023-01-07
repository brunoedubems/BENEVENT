import { Routes, Route } from 'react-router-dom';

import { SearchPerson } from '../pages/Search';
import { Register } from '../pages/Register';
import { Profile } from '../pages/Profile';


export function AppRoutes() {
  return (
    <Routes>
    <Route path="/search" element={<SearchPerson />} />
    <Route path="/register" element={<Register />} />
    <Route path="/profile" element={<Profile />} />
    {/* <Route path="/signin" element={<SignIn />} /> */}
    </Routes>

  )}