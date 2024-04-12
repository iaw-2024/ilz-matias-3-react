import { PrimerComponente } from './components/PrimerComponente';
import { SegundoComponente } from './components/SegundoComponente';
import { TercerComponente } from './components/TercerComponente';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className='Component-container'>
          <PrimerComponente />
          <TercerComponente />
          <SegundoComponente  />
        </div>
      </header>
    </div>
  );
}

export default App;
