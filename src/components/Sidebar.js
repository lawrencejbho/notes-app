import React from "react"

export default function Sidebar(props) {

    const noteElements = props.notes.map((note, index, body) => (
        
        <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
    {/* use split method to separate our body string into an array and then take the first element as the top line */}
                <h4 className="text-snippet">{props.notes[index].body.split("\n")[0]}</h4>
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
