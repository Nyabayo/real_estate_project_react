import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import EstateDetails from "./Pages/EstateDetails/EstateDetails.jsx";


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
        <Routes>
            <Route path='/' element= {<HomePage />} />
            <Route path='/about' element= {<About />} />
            <Route path='/contact' element= {<Contact />} />
            <Route path='/home/:id' element= {<EstateDetails />} />
        </Routes>

    </div>
  )
}

export default App