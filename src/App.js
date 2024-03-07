// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar.js'
import SideBar from './components/SideBar.js';
import HomePage from './components/homepage/HomePage.js';
import "bootstrap/dist/css/bootstrap.min.css";
import Body from '../src/components/body/Body.js';
import Footer from './components/footer/Footer.js';
import LatestNews from './components/body/LatestNews.js';
import Testimonials from './components/body/FeedbackPage.js';
import SocialFollow from './components/body/SocialFollow.js'

import ContactUs from './components/contactUs/ContactUs.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ContactUs.js" element={<ContactUs />} />
          {/* Add other routes for other pages */}
        </Routes>
      </Router>

 {/* App.js was the top not anymore as the page had to be displayed for the contactus.js */}
      {/* <NavBar />
      <SideBar />
      <HomePage />
      <Body/>
      <Testimonials/>
      <LatestNews/>
      <SocialFollow/>
      <Footer/> */}
    </div>
  );
}

export default App;