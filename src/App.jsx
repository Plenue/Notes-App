import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Notes from "./component/Notes";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import NotesData from "./notesData";

export default function App() {
  function createCard(ele, index) {
    // console.log(ele);
    return (
      <Notes
        title={ele.title}
        content={ele.content}
        onDelete={DeleteNote}
        id={index}
        key={index}
      />
    );
  }

  const [notes, setNotes] = React.useState([]);

  function AddNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function DeleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  // console.log(notes);
  return (
    <div>
      <Header />
      <div className="content" />
      <Container maxWidth="sm">
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={1}
        >
          {notes.map(createCard)}
          {/* {NotesData.map(createCard)} */}
        </Grid>
      </Container>
      <Footer onAdd={AddNote} />
    </div>
  );
}
NotesData;
