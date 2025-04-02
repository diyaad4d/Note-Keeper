import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNotes(newTitle, newNote) {
    setNotes((prevValue) => {
      return [...prevValue, { title: newTitle, content: newNote }];
    });
  }
  function deleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((item, index) => {
        return index != id;
      });
    });
  }
  return (
      <div>
        <Header />
        <CreateArea onAdd={addNotes} />

        {notes.map((note, index) => (
            <Note
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                onDelete={deleteNote}
            />
        ))}
        <Footer />
      </div>
  );
}

export default App;
