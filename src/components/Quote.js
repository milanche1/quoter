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

const Quote = props => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          <img
            style={{
              width: "30px",
              marginRight: "10px",
              borderRadius: "50%"
            }}
            src={props.img}
            alt="avatar"
          />
          {props.quoteAuthor}
        </Typography>
        <hr />
        <Typography component="p">{props.quoteText}</Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={props.clickAction}
          onKeyDown={props.enterAction}
        >
          Next
        </Button>
      </Paper>
    </div>
  );
};

Quote.defaultProps = {
  quoteAuthor: "Random Quote Generator",
  quoteText: "Click Next to generate random quote",
  img:
    "https://www.clevelanddentalhc.com/wp-content/uploads/2018/03/sample-avatar.jpg"
};

export default Quote;
