import { useModal } from '@dmitriiqq/react-kit';
import logo from './logo.svg';
import './App.css';

function App() {
  const { open, onClose, onOpen } = useModal()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{open ? "open" : 'close'}</p>
        <button onClick={onOpen}>Open</button>
        <button onClick={onClose}>Close</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
