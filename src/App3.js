import React from "react";
//import "./styles.css";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { Route, Switch } from "react-router-dom";
//import Drawer from "./Drawer";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Navbar/>
      {/* <Drawer/> */}
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/contact" render={props => <Contact {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />
      </Switch>
    </div>
  );
}    
