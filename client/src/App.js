import logo from './logo.svg';
import './App.css';
import { Login } from './pages/Login';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';

import { Dashboard } from './pages/Dashboard';
import { Register } from './pages/Register';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';


function App() {
  const {user}=useContext(AuthContext)
  return (
    
    <BrowserRouter>
    <Routes>
       <Route exact path='/' element={user?<Dashboard />:<Login/>}/>
       <Route path='Signup' element={user?<Dashboard />:<Register/>}/>
       <Route path='dashboard' element={<Dashboard/>}/>
    </Routes>
  </BrowserRouter>

  );
}

export default App; 
