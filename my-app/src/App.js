import logo from './logo.svg';
import './App.css';
import StatefulGreeting from './components/StatefulGreeting'; 

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="from the stateful class component"/>
    </div>
    
  );
}

export default App;