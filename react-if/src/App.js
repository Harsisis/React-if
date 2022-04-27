import logo from './Xrounded.svg';
import './App.css';
import Menu from './Component/menuComponent'
import {Clock} from './Component/clockComponent'

function App() {
  return (
    <div className="App">
      {["Zidane", "Nicolas", "Loïc champion de Beyblades"].map((username) => (<Menu name={username}></Menu>))}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Hello World!</h1>
          <h2>This is my first React app</h2>
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Clock></Clock>
    </div>
  );
}

export default App;
