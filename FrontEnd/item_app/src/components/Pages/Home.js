import InformationTable from '../InformationTable'
import Button from '../Button';
import NavBar from '../NavBar';
import AddForm from './addForm';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://localhost:44351/Item")
        .then(response => response.json())
        .then(
          (data) => {
          console.log(data);
          setIsLoaded(true);
          setItems(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
        )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
    <div>
        <NavBar />
        <div className="listContainer">
            <Route render={ () => (
                <Button text="Add Item"/>
            )} />
            <Switch>
                <Route path="/addForm" component={AddForm}/>
            </Switch>
            <InformationTable informationlist={ items }/>
        </div>
    </div>

    );
  }
}

export default Home
