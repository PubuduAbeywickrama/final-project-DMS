import axios from 'axios';
import React, { useState } from 'react';

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
      <div>
        <div className="input-container">
            <input
            type="text"
            placeholder="Enter symptoms separated by commas"
           
            onChange={(e) => setSymptomInput(e.target.value)}
            />
            <button className="add-button" onClick={handleAddSymptoms}>
            Add Symptoms
            </button>
        </div>
<h1>{symptomInput}</h1>
        <div className="symptoms-container">
            <div className="date-container">{currentDate}</div>
            {symptomsList.length > 0 && (
            <div>
                <h2>Added Symptoms:</h2>
                <ul>
                {symptomsList.map((symptom, index) => (
                    <li key={index}>{symptom}</li>
                ))}
                </ul>
            </div>
            )}
        </div>
      </div>

      
    </div>
  );
};

export default Symptoms;
