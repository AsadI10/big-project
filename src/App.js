// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar.js'
import SideBar from './components/SideBar.js';
import HomePage from './components/homepage/HomePage.js';
import "bootstrap/dist/css/bootstrap.min.css";
import Body from '../src/components/body/Body.js';
import Footer from './Practice-Components/footer/Footer.js';
import LatestNews from './components/body/LatestNews.js';

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <SideBar />
      <HomePage />
      <Body/>
      <LatestNews/>
      <Footer/>
    </div>
  );
}

export default App;