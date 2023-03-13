
import React from 'react'
import axios from 'axios'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import  { useContext ,useState} from 'react'
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Profile from '../profile/Profile'


export default function Feed() {
  
  

  return (
    
    <div className='feed'>
        <Profile/>
        {/* <BrowserRouter>
            <Routes>
                <Route path='/Profile' element = {<Profile/>}/>
            </Routes>
        </BrowserRouter> */}
    </div>
       
        
    
  )
  
}
