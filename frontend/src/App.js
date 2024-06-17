import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CreateResume from './components/createResume';
import GetResume from './components/GetResume';
import GetQualifications from './components/getQualifications';
import GetWorkExperience from './components/getWorkExperience';
const App = () => {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/student/createresume" element={<CreateResume/>} />
        <Route path="/student/getresume/:role" element={<GetResume />} />
        <Route path="/student/getqualifications/:role" element={<GetQualifications />} />
        <Route path="/student/getworkexperience/:role" element={<GetWorkExperience />} />
      </Routes>
    </div>
  </Router>

  );
};

export default App;
