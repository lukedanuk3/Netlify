// src/components/GetResume.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/GetResume.css';

const GetQualifications = () => {
  const { role } = useParams();
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/resume/get/${role}`);
        console.log(response);
        setResume(response.data);
      } catch (error) {
        console.error('Error fetching resume', error);
      }
    };

    fetchResume();
  }, [role]);
  return (
    <div className="container">
      <h2 className="qualificationTitle">{role.charAt(0).toUpperCase() + role.slice(1)} Qualifications</h2>
      {resume ? (
        resume.map((res, index) => (
          <div key={index} className="resume">
            <p><strong>Name:</strong> {res.firstName + " " + res.lastName}</p>
            <p><strong>Email:</strong> {res.email}</p>

            {role === 'developer' &&  (
                <div>
                    <p><strong> Qualifications: </strong> {res.qualifications} <br /></p>
                </div>
            )}
            {role === 'tutor' && (
                <div>
                    <p><strong> Qualifications: </strong> {res.qualifications} <br /></p>
                </div>
            )}
            {role === 'cinematographer' && (
                <div>
                    <p><strong> Qualifications: </strong> {res.qualifications} <br /></p>
                </div>
            )}
            {role === 'chef' && (
                <div>
                     <p><strong> Qualifications: </strong> {res.qualifications} <br /></p>
                </div>
            )}
            {/* <p><strong>Experience:</strong></p> */}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default GetQualifications;