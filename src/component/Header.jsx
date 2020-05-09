import React from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";
import EventNoteOutlinedIcon from "@material-ui/icons/EventNoteOutlined";
import "./styles.css";

const useStyles = makeStyles(theme => ({
  bar: {
    backgroundColor: theme.palette.warning.light
  },
  left: {
    position: "absolute",
    right: "0px",
    width: "auto",
    marginRight: theme.spacing(1)
  },
  leftico: {
    position: "center",
    right: "130px",
    width: "auto",
    marginRight: theme.spacing(1)
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.warning.light, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.warning.light, 0.25)
    },
    marginLeft: 0,
    width: "auto",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));

function Header(props) {
  const classes = useStyles();

  return (
    <header>
      <div className="text">
        <React.Fragment>
          {/* <Paper square className="paper" elevation="0"> */}
          <AppBar position="fixed" color="inherit">
            <Toolbar className="classes.bar">
              <EventNoteOutlinedIcon />
              <h3> Notes</h3>
              {/* <FAB /> */}

              {/* <div className={classes.left}>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div> */}
              {/* <InputBase
                    placeholder="  Search"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                    inputProps={{ "aria-label": "search" }}
                  /> */}
              {/* </div>
              </div> */}
            </Toolbar>
          </AppBar>
          <Toolbar />
          {/* </Paper> */}
        </React.Fragment>
      </div>
    </header>
  );
}
export default Header;
