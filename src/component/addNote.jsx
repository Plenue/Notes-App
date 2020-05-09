import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [note, setNote] = React.useState({
    title: "",
    content: ""
  });

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    // props.onAdd(note);
    setOpen(false);
  }

  function handlebtnClose() {
    if (!(note.content === "" && note.title === "")) {
      props.onAdd(note);
    }
    setOpen(false);
    setNote(() => {
      return {
        title: "",
        content: ""
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(event.target);
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });

    event.preventDefault();
  }

  return (
    <div>
      <Zoom in={true}>
        <Fab
          color="secondary"
          variant="extended"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleClickOpen}
        >
          <AddIcon />
          New Note
        </Fab>
      </Zoom>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Note Here</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Add New Note Here</DialogContentText> */}
          <TextField
            onChange={handleChange}
            // autoFocus
            margin="dense"
            id="titletext"
            name="title"
            label="Title"
            type="text"
            variant="outlined"
            fullWidth
            value={note.title}
          />
          <TextField
            onChange={handleChange}
            // autoFocus
            margin="dense"
            id="contenttext"
            name="content"
            label="Content"
            type="text"
            variant="outlined"
            fullWidth
            value={note.content}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handlebtnClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
