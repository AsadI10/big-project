import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js'
import SideBar from './components/SideBar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Nav />
      <SideBar />
    </div>
  );
}

export default App;