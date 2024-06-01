import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Note from "./components/Note";
import Bin from "./components/Bin";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <h1 className="text-3xl text-center font-semibold mt-4 py-2 ">
        React DnD
      </h1>

      <Note />
      <Bin />
    </DndProvider>
  );
}

export default App;
