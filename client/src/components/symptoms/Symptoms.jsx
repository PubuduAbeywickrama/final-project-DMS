import axios from 'axios';
import React, { useState } from 'react';
import Topbar from '../topbar/Topbar';
import './symptoms.css'
const Symptoms = () => {
  const [symptomInput, setSymptomInput] = useState('');
  const [symptomsList, setSymptomsList] = useState([]);
  const [currentDate] = useState(new Date().toLocaleDateString());

  const handleAddSymptoms = async () => {
    // Send a POST request to the backend
    try {
      const response = await axios.post('http://localhost:8800/api/fastingcount/addMessage', { symptoms: symptomInput });
      // Handle the response from the server if needed
      console.log(response.data); // Assuming the server sends back some data
      setSymptomInput(response.data);
    } catch (error) {
      console.error('Error sending data to the server:', error);
    }

   
  };

  return (
   
      <div>
        <Topbar></Topbar>
        <div className="input-container">

          <div className='left-container'>
            <div>
            <input
            type="text"
            placeholder="Enter symptoms separated by commas"
           
            onChange={(e) => setSymptomInput(e.target.value)}
            />
            <button className="add-button" onClick={handleAddSymptoms}>
            Add Symptoms
            </button>
            </div>
            <div>
           <span>Symptom:<b>{symptomInput.Symptom}</b></span>
        
         </div>
          </div>
          <div className='right-container'>
         
         <div>
        
        <span>Possible Disease:<b>{symptomInput.PossibleDisease}</b></span>

         </div>

          </div>
          <div className='right-container'>
      
      
         <div>
       
        <span>Medicine:<b>{symptomInput.Medicine}</b></span>
         </div>
          </div>
          
        </div>
        
     
      </div>

      
    
  );
};

export default Symptoms;
