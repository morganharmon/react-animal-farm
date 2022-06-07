import './App.css';
import Main from './main/main.js';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import { animals } from '../src/data.js';

function App() {
  return (
    <div>
      <Header greeting='Welcome to the Animal Farm' />
      <Main
        animals={ animals }
      />
      <Footer email='animal@farm.com' />
    </div>
  );
}

export default App;
