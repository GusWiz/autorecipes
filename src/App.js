import logo from './logo.svg';
import Header from './FrontEnd/homepage/Header';
import Footer from './FrontEnd/homepage/Footer';
import './App.css';

function App() {
  return (
    <>
    <div>
      <Header />
    </div>
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
    </div>
    <div>
      <Footer />
    </div>
  </>
  );
}

export default App;
