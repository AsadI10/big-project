// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar.js'
import SideBar from './components/SideBar.js';
import HomePage from './components/homepage/HomePage.js';
import "bootstrap/dist/css/bootstrap.min.css";
import Body from '../src/components/body/Body.js';

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <SideBar />
      <HomePage />
      <Body/>
    </div>
  );
}

export default App;