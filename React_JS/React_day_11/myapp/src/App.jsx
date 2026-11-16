import About from "./components/About";
import LinkedinHome from "./components/Home"
import Navbar from "./components/Navbar"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from "./components/Contact";
import Page404 from "./components/Page404";

// browserrouter is a module or package used to navigate or redirect 
// from one page / component to another page / component


// Routes is used to wrapping Multiple Route 
// i.e its a wrapper or parent to wrap multiple child Route

// Route- used to define component paths

const App = () => {
  return (
    <>

      <BrowserRouter>

        {/* common layout */}
        <Navbar />


        {/* 
// Routes is used to wrapping Multiple Route 
// i.e its a wrapper or parent to wrap multiple child Route */}
        <Routes>

          <Route path="/" element={<LinkedinHome />}></Route>
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />


          {/* Fall back routing */}
          <Route path="*" element={<Page404/>}/>

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App


// NavLink- helps us to navigate from oine page to another page without 
// reloading of our web page i.e single page Applcation

// by default navlink has 'active' class it shows in which component current we are active