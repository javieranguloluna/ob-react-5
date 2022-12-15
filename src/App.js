import './App.css';

import RandomJoke from './components/randomJoke';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Chuck Norris Jokes</h1>
        <RandomJoke></RandomJoke>
      </header>
    </div>
  );
}

export default App;
