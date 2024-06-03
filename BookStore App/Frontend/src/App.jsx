import React from "react";
import Home from "./Home/Home";
import Course from "./components/Course";
import { Route, Routes } from "react-router-dom"
import Courses from "./Courses/Courses";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses />}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
