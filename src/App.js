
import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/NavbarIndex';
import Theme from './theme';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Account from './Components/Account';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import Landing from './Components/landingPage';





function App() {
  return (
    <>
      
      <AuthContextProvider>
        <Theme>
        <Navbar/>
          <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
        </Theme>
      </AuthContextProvider>
    </>
  );
}

export default App;