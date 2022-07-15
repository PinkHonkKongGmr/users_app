import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routing from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
