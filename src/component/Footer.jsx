import React from "react";
import AddNote from "./addNote";
import "./styles.css";

function Footer(props) {
  function addNote(note) {
    props.onAdd(note);
  }
  return (
    <div className="footer">
      <AddNote onAdd={addNote} />
      <p className="text2">Made by Shashi using ReactJS</p>
    </div>
  );
}
export default Footer;
