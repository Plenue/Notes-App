import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "./styles.css";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";

// var randomHexColor = function() {
//   var color = "#",
//     i = 5;
//   do {
//     color += "0123456789abcdef".substr(Math.random() * 16, 1);
//   } while (i--);
//   return color;
// };

// let color = randomHexColor();

const useStyles = makeStyles({
  root: {
    // minWidth: 200,
    // maxWidth: 200,
    backgroundColor: "#FFECD0"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  but: {
    margin: "auto",
    width: "50px"
  }
});

function Note(prop) {
  const classes = useStyles();

  function DeleteNote() {
    prop.onDelete(prop.id);
  }

  return (
    <Grid className="padcard" item xs="4">
      <Card className={classes.root} elevation="1">
        <CardContent>
          <Typography variant="h5" component="h2">
            {prop.title}
          </Typography>
          <Typography variant="body1" component="p" display="inline">
            {prop.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={DeleteNote}
            className={classes.but}
            // variant="outlined"
            size="small"
          >
            <DeleteForeverRoundedIcon />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
export default Note;
