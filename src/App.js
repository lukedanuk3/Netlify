import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from "./pages/Layout";
import NoMatch from "./pages/NoMatch";

function App() {
  const [visits, setCount] = useState(0);
  const updateCounter = () => {
    setCount(visits + 1);
  }
  return (
    <div>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Layout />}>
          <Route index element={<Home  visits={visits} setCount={setCount}/>} />
          <Route path="about" element={<About  visits ={visits}/>} />
          <Route path="contact" element ={<Contact visits = {visits}/>} />
         <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
