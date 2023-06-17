import './App.css';
import Header from './components/Header';
import CalculatorIMC from './components/IMC';

function App() {
  return (
    <div className="App">
      <Header title="Título do APP" />
      <CalculatorIMC />
    </div>
  );
}

export default App;
