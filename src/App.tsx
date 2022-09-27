import "./App.css";
import { Burpees } from "./Burpees";

function App() {
  return (
    <div className="App">
      <Burpees numDays={100} start={new Date(2022, 8, 23)} />
    </div>
  );
}

export default App;
