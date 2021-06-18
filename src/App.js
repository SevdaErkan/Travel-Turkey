import React from "react";
import Navbar from "./components/Navbar";
import "./styles.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tours from "./components/pages/Tours";
import About from "./components/pages/About";
import SignUp from "./components/pages/SignUp";

function App() {
   return (
      <>
         <Router>
            <Navbar />
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/tours" component={Tours} />
               <Route path="/about" component={About} />
               <Route path="/sign-up" component={SignUp} />
            </Switch>
         </Router>
      </>
   );
}

export default App;
