import React from 'react'
import  './sidebar.css'
import ChatIcon from '@mui/icons-material/Chat';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import PaymentIcon from '@mui/icons-material/Payment';
import HomeIcon from '@mui/icons-material/Home';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
          <ul className="sidebarList">
          <hr className='sidebarHr'/>
              <li className="sidebarListItem" >
                  <BloodtypeIcon className='sidebarIcon'/>
                  <a href="/home"><span  className="sidebarListItemText" >
                    Home
                  </span></a>
              </li>
              <li className="sidebarListItem" >
                  <MedicalServicesIcon className='sidebarIcon'/>
                  <a href=""><span  className="sidebarListItemText" >
                    Medications
                  </span></a>
              </li>
              <li className="sidebarListItem" onClick={"/student"}>
                  <a><ChatIcon className='sidebarIcon'/></a>
                  <a className="sidebarListItemText" href=''>
                    Chat with Us
                  </a>
              </li>
              
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

          </ul>
          
          <hr className='sidebarHr'/>
          <span className="sidebarBootomListItemText">
               Dimuthu Pre School <br/>
               Negombo Road <br/>
               Kotadeniyawa <br/><br></br>
               +94 70 211 5657 <br/>
               www.dimuthupreschool.com <br/>
               dimuthupscl@gmail.com
          </span>
      </div>
    </div>
  )
}
