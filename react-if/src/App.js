import logo from './Xrounded.svg';
import './App.css';
import Menu from './Component/Component/menuComponent';
import {Clock} from './Component/Component/clockComponent';
import {Form} from './Component/Component/formComponent';
import {TempConverter} from './Component/Temperature/tempConverterComponent';
import Game from './Component/TicTacToe/Game';

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

      <Clock country="france"></Clock>

      <Form></Form>

      <TempConverter></TempConverter>

      <div>
        <Game></Game>
      </div>

    </div>
  );
}

export default App;
