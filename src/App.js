import Register from "./components/Register";
import Card from "./components/Card";
import { useState } from "react";
import "./App.css";
function App() {
  const [cardResult, setCardResult] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <Register cardResult={cardResult} setCardResult={setCardResult} />
        {cardResult && <Card cardResult={cardResult} />}
      </header>
    </div>
  );
}

export default App;
