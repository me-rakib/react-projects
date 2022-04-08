let notes = [
  { id: 101, body: "Hello There" },
  { id: 102, body: "Hello There" },
  { id: 103, body: "Hello There" },
  { id: 104, body: "Hello There" },
  { id: 105, body: "Hello There" },
];

let note = notes.map((oldNote) => {
  return oldNote.id == 105 ? { ...oldNote, body: "Edited text" } : oldNote;
});

function findCurrent() {
  return (
    note.find((n) => {
      return n.id == 105;
    }) || note[0]
  );
}

console.log(note);
console.log(findCurrent());

function a() {
  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
            
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
          />

          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}
