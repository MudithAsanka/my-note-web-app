import logo from './logo.png';

function Sidebar({ notes, onAddNote, activeNote, setActiveNote, onDeleteNote }){
    return <div className="app-sidebar">
        <div className="app-sidebar-header">
            {/* <h1>My Notes</h1> */}
            <img src={logo} alt='Logo' className="logo"/>
            <button onClick={onAddNote}>Add</button>
        </div>

        <div className="app-sidebar-notes">

            {notes.map((note) => (
                    <div 
                    className={`app-sidebar-note ${note.id === activeNote && "active"}`} key={note.id} onClick={() => setActiveNote(note.id)}>
                        <div className="sidebar-note-title">
                            <strong>{note.title}</strong>
                            
                            <button onClick={() => {onDeleteNote(note.id)}}>Delete</button>
                        </div>
                        <p>{note.body && note.body.substr(0, 100) + "..."}</p>
                        <small className="note-meta">
                            Last Modified {new Date(note.last_modified).toLocaleDateString("en-GB", {hour:"2-digit", minute:"2-digit"})}
                        </small>
                    </div>
                
            ))}
            
        </div>
    </div>
}

export default Sidebar;