import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Note from "@/components/Note";
import CreateArea from "@/components/CreateArea";

function index() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, {...newNote, date:new Date().toLocaleDateString()} ];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            date={noteItem.date}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default index;

