import React, { useState } from "react";
import Topbar from "../topbar/Topbar";
import axios from "axios";
import './medication.css'

function Medication() {
  const [medications, setMedications] = useState([]);
  const [pillName, setPillName] = useState("");
  const [pillTime, setPillTime] = useState("");

  function handlePillNameChange(event) {
    setPillName(event.target.value);
  }

  function handlePillTimeChange(event) {
    setPillTime(event.target.value);
  }

  function handleAddPill() {
    const newPill = { name: pillName, time: pillTime };
    setMedications([...medications, newPill]);
    setPillName("");
    setPillTime("");
  }

  function handleRemovePill(pillName) {
    const updatedMedications = medications.filter(
      (pill) => pill.name !== pillName
    );
    setMedications(updatedMedications);
  }

  const handleAddRandomRecord = async () => {
    // Add logic to send the data to the server
    try {
      const response = await axios.post("YOUR_API_ENDPOINT", {
        user: "user_id", // Replace with the actual user ID
        sugarcount: 120, // Replace with the actual glucose level
        date: "2023-01-01", // Replace with the actual date
        time: "12:00", // Replace with the actual time
      });

      // Handle the response if needed
      console.log(response.data);
    } catch (error) {
      console.error("Error adding random record:", error);
    }
  };

  return (
    <div style={{marginTop: '250px'}}>
      <Topbar/>
      <div className="container">
      
      <div className="left-container">
        <h3 style={{textAlign:"center"}}>Medication Reminder</h3>
        <div style={{ margin: "10px" }}>
          <label style={{marginLeft:"5px"}} htmlFor="pillName">Pill Name:</label>
          <input
            id="pillName"
            type="text"
            value={pillName}
            onChange={handlePillNameChange}
            style={{ borderRadius: '10px', borderColor: '#4d4dff', margin: "5px", padding: "5px", width:"100%"}}
          />
        </div>
        <div style={{ margin: "10px" }}>
          <label style={{marginLeft:"5px"}} htmlFor="pillTime">Pill Time:</label>
          <input
            id="pillTime"
            type="time"
            value={pillTime}
            onChange={handlePillTimeChange}
            style={{ borderRadius: '10px', borderColor: '#4d4dff', margin: "5px", padding: "5px", width:"100%"}}
          />
        </div>
        <button className="button" style={{ width: '100%', backgroundColor: '#4d4dff', color: "white",marginLeft:"5px",marginRight:"5px",marginTop:"20px" }} onClick={handleAddPill}>Add Pill</button>
        
      </div>
      <div className="right-container">
        <div >
          
          {medications.map((pill) => (
            <div key={pill.name} className="pill-card">
              <h3>{pill.name}</h3>
              <p>Time: {pill.time}</p>
              <button
                className="remove-button"
                onClick={() => handleRemovePill(pill.name)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      
    </div>
    <div className="container">
      
      <div className="leftbottom-container">
        <h3 style={{textAlign:"center"}}>Exercise Consultant</h3>
        
      </div>
    

      
    </div>
  </div>
    
  );
}

export default Medication;
