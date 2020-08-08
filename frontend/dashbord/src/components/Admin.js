import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function AllNanny(props) {
  const [nannylist, setNannylist] = useState([]); // state to hold all nanny records data
  useEffect(() => {
    fetch(`http://192.168.1.16:5000/Admin`)
      .then((res) => res.json())
      .then((response) => {
        setNannylist(response);
      })
      .catch((error) => console.log(error));
  }, []);

  const addNanny = () => {
    props.history.push("/AddNanny");
  };

  const deleteNanny = (_id) => {
    console.log(_id);
    return axios
      .delete("http://192.168.1.16:5000/delete/" + _id)
      .then(() => window.location.reload())
      .catch((err) => console.log(err.response));
  };

  console.log(nannylist);
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  const classes = useStyles();

  return (
    <>
    <Grid
        container
        item xs={4}
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "90vh" }}
      >
      {nannylist.map((nany) => (
        <Card className={classes.root} variant="outlined">
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={nany.name} src={nany.image} />
            </ListItemAvatar>
            <ListItemText
              primary={nany.name}
              secondary={
                <React.Fragment>
                  <Typography component="span">
                    Place : {nany.place}
                    <br />
                  </Typography>
                  <Typography component="span">
                    Email : {nany.email}{" "}
                  </Typography>
                  <br />
                  <Typography component="span">
                    phoneNumber : {nany.phoneNumber}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Button onClick={() => deleteNanny(nany._id)}> Delete </Button>
        </Card>
      ))}
      <Button onClick={addNanny}> Add new nanny </Button>
      </Grid>
    </>
  );
}
