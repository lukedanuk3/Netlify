// src/components/CreateResume.js
import React, { useState } from 'react';
import axios from 'axios';
import '../css/CreateResume.css';

const CreateResume = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [workExperience, setWorkExperience] = useState('');
    const [qualifications, setQualification] = useState('');
    const [role, setRole] = useState('');
    const [techSkills, setTechSkills] = useState('');
    const [businessImpact, setBusinessImpact] = useState('');
    const [coursesTaught, setCoursesTaken] = useState('');
    const [yearsOfExperience, setYearsExperience] = useState('');
    const [filmsShot, setFilmsShot] = useState('');
    const [notablePeople, setNotablePeople] = useState('');
    const [yearsCooking, setYearsCooking] = useState('');
    const [notableFood, setNotableFoods] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!firstName || !lastName || !email || !role) {
            alert('Please fill in all required fields');
            return;
          }
        
        if (role === 'developer' && (!techSkills || !businessImpact)) {
        alert('Please fill in all required fields for the developer role');
        return;
        }
    
        if (role === 'tutor' && (!coursesTaught || !yearsOfExperience)) {
        alert('Please fill in all required fields for the tutor role');
        return;
        }
      
        const formData = {
            firstName,
            lastName,
            email,
            workExperience,
            qualifications,
            role,
            techSkills: role === 'developer' ? techSkills : undefined,
            businessImpact: role === 'developer' ? businessImpact : undefined,
            coursesTaught: role === 'tutor' ? coursesTaught : undefined,
            yearsOfExperience: role === 'tutor' ? yearsOfExperience : undefined,
            filmsShot: role === 'cinematographer' ? filmsShot : undefined,
            notablePeople: role === 'cinematographer' ? notablePeople : undefined,
            yearsCooking: role === 'chef' ? yearsCooking : undefined,
            notableFood: role === 'chef' ? notableFood : undefined
        };

        // console.log(formData);
      
        try {
          const response = await axios.post('http://localhost:8080/api/resume/create', formData);
          console.log(response.data);
          alert('Resume created successfully');
        } catch (error) {
          console.error(error);
          alert('An error occurred. Please try again later');
        }
      };
    


    const handleRoleChange = (e) => {
      setRole(e.target.value);
    };
    
    return (
      <div class = "inputContainer">
        <h2 class = "createHeader">Create Resume</h2>
        <form onSubmit={handleSubmit}>
          {/* ...other fields... */}
          <input class="createInput" type="text" name="firstName" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
          <input class="createInput" type="text" name="lastName" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
          <input class="createInput" type="text" name="email" placeholder="Email ID" onChange={(e) => setEmail(e.target.value)}/>
          <input class="createInput" type="text" name="workExperience" placeholder="Work Experience" onChange={(e) => setWorkExperience(e.target.value)}/>
          <input class="createInput" type="text" name="qualification" placeholder="Qualifaction" onChange={(e) => setQualification(e.target.value)}/>
          
          <select class="roleSelect" name="role" onChange={handleRoleChange}>
            <option value="">Select Role</option>
            <option value="developer">Developer</option>
            <option value="tutor">Tutor</option>
            <option value="cinematographer">Cinematographer</option>
            <option value="chef">Chef</option>
          </select>
          {role === 'developer' && (
            <>
              <input class="createInput" type="text" name="techSkills" placeholder="Tech Stack" onChange={(e) => setTechSkills(e.target.value)}/>
              <textarea class = "textArea" type="text" name="businessImpact" placeholder="Business Impact" onChange={(e) => setBusinessImpact(e.target.value)}/>
            </>
          )}
          {role === 'tutor' && (
            <>
              <input class="createInput" type="text" name="coursesTaken" placeholder="Courses Taken" onChange={(e) => setCoursesTaken(e.target.value)}/>
              <input class="createInput" type="text" name="yearsExperience" placeholder="Years of Experience" onChange={(e) => setYearsExperience(e.target.value)}/>
            </>
          )}
          {role === 'cinematographer' && (
            <>
              <input class="createInput" type="text" name="filmsShot" placeholder="Films/Shows Shot" onChange={(e) => setFilmsShot(e.target.value)}/>
              <textarea class = "textArea" type="text" name="notablePeople" placeholder="Notable People I Collaborated With" onChange={(e) => setNotablePeople(e.target.value)}/>
            </>
          )}
          {role === 'chef' && (
            <>
              <input class="createInput" type="text" name="yearsCooking" placeholder="Years Cooking Professionally" onChange={(e) => setYearsCooking(e.target.value)}/>
              <textarea class = "textArea" type="text" name="notableFood" placeholder="Notable Foods I Can Make" onChange={(e) => setNotableFoods(e.target.value)}/>
            </>
          )}
          <button class = "submitButton" type="submit"><strong>Submit</strong></button>
        </form>
      </div>
    );
    };

export default CreateResume;
