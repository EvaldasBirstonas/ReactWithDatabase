import AddForm from './components/Pages/AddForm'
import Home from './components/Pages/Home'
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/addForm" component={AddForm}/>
    </Switch>
  </Router>
  );
}
/*
const fetchData = () => {
  return fetch("https://localhost:44351/Item")
        .then((response) => response.json())
        .then((data) => console.log(data));}
*/
export default App;
