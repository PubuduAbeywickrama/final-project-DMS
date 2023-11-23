// Doctors.js
import React from 'react';
import './doctors.css';
import Topbar from '../topbar/Topbar';
import DoctorCard from './DoctorCard';

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. John Doe',
      qualification: 'MD, FACS',
      //centers: ['ABC Medical Center', 'XYZ Clinic'],
      openingTimes: ['Mon-Fri 9am-5pm', 'Sat 10am-2pm'],
      contact: '123-456-7890',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    },
    {
      name: 'Dr. Jane Smith',
      qualification: 'DO',
      //centers: ['EFG Medical Center'],
      openingTimes: ['Mon-Fri 8am-4pm', 'Sun 11am-3pm'],
      contact: '987-654-3210',
      image: 'data:image/jpeg;base64,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',
    },
    {
        name: 'Dr. John Doe',
        qualification: 'MD, FACS',
        //centers: ['ABC Medical Center', 'XYZ Clinic'],
        openingTimes: ['Mon-Fri 9am-5pm', 'Sat 10am-2pm'],
        contact: '123-456-7890',
        image: 'https://thumbs.dreamstime.com/b/nice-to-talk-smart-person-indoor-shot-attractive-interesting-caucasian-guy-smiling-broadly-nice-to-112345489.jpg',
      },
      {
        name: 'Dr. Jane Smith',
        qualification: 'DO',
        //centers: ['EFG Medical Center'],
        openingTimes: ['Mon-Fri 8am-4pm', 'Sun 11am-3pm'],
        contact: '987-654-3210',
        image: 'https://thumbs.dreamstime.com/b/nice-to-talk-smart-person-indoor-shot-attractive-interesting-caucasian-guy-smiling-broadly-nice-to-112345489.jpg',
      },
  ];

  return (
    <div className="doctor-page">\
    <Topbar/>
      
      <div className="doctor-cards-container">
        {doctors.map(doctor => (
          <DoctorCard
            key={doctor.name}
            image={doctor.image}
            name={doctor.name}
            qualification={doctor.qualification}
            openingTimes={doctor.openingTimes}
            contact={doctor.contact}
          />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
