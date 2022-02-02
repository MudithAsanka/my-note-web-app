import './App.css';
import Sidebar from './Sidebar';
import Main from './Main';
import { useEffect, useState } from 'react';
import {db} from './firebase-config'
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

function App() {

  const [notes, setNotes] = useState([]);
  const notesCollectionRef = collection(db, "notes");
  
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    const getNotes = async() => {
      const data = await getDocs(notesCollectionRef);
      setNotes(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    };

    getNotes();
  }, [])


  const onAddNote = async () => {
    await addDoc(notesCollectionRef, {title: "Untitled Note", body: "", last_modified: Date.now()});
  };

  const onUpdateNote = async (updatedNote) => {
    const noteDoc = doc(db, "notes", updatedNote.id)
    await updateDoc(noteDoc, updatedNote)
    const updateNotesArray = notes.map((note) => {
      if(note.id === activeNote) {

        return updatedNote;
      }

      return note;

    });

    setNotes(updateNotesArray);
  };

  const onDeleteNote = async (id) => {
    const noteDoc = doc(db, "notes", id);
    await deleteDoc(noteDoc);
  };


  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };


  

  return (
    <div className="App">
      <Sidebar 
      notes={notes}  
      onAddNote={onAddNote}  
      activeNote={activeNote} 
      setActiveNote={setActiveNote} 
      onDeleteNote={onDeleteNote} 
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
