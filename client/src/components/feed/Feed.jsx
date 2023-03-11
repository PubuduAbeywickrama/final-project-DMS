import React from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './feed.css'
import Home from '../home/Home';
import Profile from '../profile/Profile';



export default function Feed() {
  return (
    <div className='feed'>
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Profile/>}/>
               
            </Routes>
        </BrowserRouter>
    </div>
  )
}
