import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';

function App() {
  return (
    <div className="App">
      <h1>HELLO WORLD</h1>
      <Home />
      <Contact />
      <About />
    </div>
  );
}

export default App;
