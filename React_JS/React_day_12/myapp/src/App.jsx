import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './Navbar'

const App = () => {
  return (
    <>


      <BrowserRouter>

      <Navbar/>

        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/about/:id/:name' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='*' element={<Home />}></Route>


        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App