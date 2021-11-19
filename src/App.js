import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <header className="App-header">
          <HomePage />
        </header>
      </div>
    </DndProvider>
  );
}

export default App;
