import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Note from "./components/Note";
import Bin from "./components/Bin";
import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [binnedItems, setBinnedItems] = useState([]);

  useEffect(() => {
    const initialNotes = ["Note 1", "Note 2", "Note 3"];
    localStorage.setItem("notesList", JSON.stringify(initialNotes));

    let array = localStorage.getItem("notesList");
    setNotes(JSON.parse(array));
  }, []);

  // console.log(notes); //* TESTING

  return (
    <DndProvider backend={HTML5Backend}>
      <h1 className="text-3xl text-center font-semibold mt-4 py-2 ">
        React DnD
      </h1>

      {notes.map((note) => (
        <Note
          key={new Date().getTime() + Math.floor(Math.random() * 1000)}
          note={note}
        />
      ))}
      <Bin />
    </DndProvider>
  );
}

export default App;
