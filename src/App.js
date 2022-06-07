import './App.css';
import Main from './main/main.js';
import { animals } from '../src/data.js';

function App() {
  return (
    <div>
      <Main
        animals={ animals }
      />
    </div>
  );
}

export default App;
