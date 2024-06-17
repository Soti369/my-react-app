import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import LogoPage from './components/logopage';
import HomePage from './components/pages/homepage';
import Register from './components/pages/signuppage';
import AboutPage from './components/pages/aboutPage';
import logo369 from './components/assets/logo369.png';
import { Link } from 'react-router-dom';
import andsti from './components/assets/andsti.png';
import Navbar from './components/Navbar';
import Header from './components/Header';
import FooTer from './components/FooTer';
import mentors from './components/assets/mentors.png'








const App = () => {
  return (
    <div className='bg-faltu rounded-3xl mx-9 bg-center h-screen'>

      <div >
        <Header />

        <Router>
          <Link to="/" >
            
            <div className=' mt-6 ml-20 mr-20 flex justify-end py-8 px-5 fixed top-0 left-0 right-0 h-44'>
            <Navbar />
              
              <img src={andsti} alt='rrr' className='h-32 w-32 rounded-full mt-6 border-2 border-black hover:-translate-y-3 duration-1000'></img>

            </div>


          </Link>

          <Routes>
            <Route path='/' excat element={<LogoPage />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/home' element={<HomePage />} />
          </Routes>
          <FooTer />
        </Router>
        

      </div>
    </div>
  )

}


export default App;
