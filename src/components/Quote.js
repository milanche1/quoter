import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

export default function PaperSheet(props) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {props.quoteAuthor}
        </Typography>
        <Typography component="p">{props.quoteText}</Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={props.clickAction}
        >
          Next
        </Button>
      </Paper>
    </div>
  );
}
