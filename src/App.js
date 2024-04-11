import logo from './logo.svg';

import { PrimerComponente } from './components/PrimerComponente';
import { SegundoComponente } from './components/SegundoComponente';
import { TercerComponente } from './components/TercerComponente';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='Component-container'>
        <PrimerComponente />
        <SegundoComponente />
        <TercerComponente />
        </div>
      </header>
    </div>
  );
}

export default App;
