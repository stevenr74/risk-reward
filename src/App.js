import './App.css';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Intro from './components/Intro'
/*
Example #1: Would you risk $5 for a 80% chance of a $6.25 return? numbers are placeholders
  Outcomes: risk averse (wouldn't) vs risk tolerant (would) -> explain why in a vaccum such a bet would be worthwhile

Example #2: Short term risk (trading) vs long term risk (investing)
  Outcomes: 
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Risk Management</h1>
      </header>
      <Intro />
      <Example1 />
      <Example2 />
    </div>
  );
}

export default App;
