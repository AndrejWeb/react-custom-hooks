/**
 * AAWeb.tech
 * https://aaweb.tech
 */
import './App.css';
import Counter from './Counter';
import Toggle from "./Toggle";

function App() {
  return (
    <div className="App">
        <Counter />
        <hr/>
        <Counter startCount={5} />
        <hr/>
        <Toggle />
    </div>
  );
}

export default App;
