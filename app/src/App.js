import logo from './logo.svg';
import './App.css';
import CharacterFetch from './components/CharacterFetch';
import CharacterDisplay from './components/CharacterDisplay'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CharacterFetch/>
        <CharacterDisplay/>
      </header>
    </div>
  );
}

export default App;
