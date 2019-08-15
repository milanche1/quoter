import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { relative } from "path";

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
              width: "35px",
              marginRight: "10px",
              borderRadius: "50%"
            }}
            src={props.imgAvatar}
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
          onKeyPress={props.enterAction}
          style={buttonStyle}
        >
          {props.buttonText}
        </Button>
      </Paper>
    </div>
  );
};

const buttonStyle = {
  display: "block",
  margin: "0 auto"
};

Quote.defaultProps = {
  quoteAuthor: "Random Quote Generator",
  quoteText: "Click Next to generate random quote",
  imgAvatar:
    "https://www.pinclipart.com/picdir/middle/379-3794464_quote-clipart-inverted-commas-double-quotes-png-transparent.png"
};

export default Quote;
