import AddForm from './components/Pages/AddForm'
import Home from './components/Pages/Home'
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ViewForm from './components/Pages/ViewForm';

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/addForm" component={AddForm}/>
      <Route path="/viewForm/:id" component={ViewForm}/>
    </Switch>
  </Router>
  );
}
export default App;
