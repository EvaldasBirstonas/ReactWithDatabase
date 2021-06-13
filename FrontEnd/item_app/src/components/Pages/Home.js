import InformationTable from '../InformationTable'
import Button from '../Button';
import NavBar from '../NavBar';
import AddForm from './AddForm';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavigationButton from '../NavigationButton';

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const offsetNumber = 11;
  async function fetchData() {
    fetch("https://localhost:44351/Item/Offset?start=" + currentPage * 10 + "&end=" + ((currentPage + 1) * 10 + 1))
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
  }
  useEffect(() => {
    fetchData()
  }, [currentPage])
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
            <InformationTable informationlist={ items.length < 11 ? items : items.slice(0, -1) }/>
            <NavigationButton isLoaded={isLoaded} leftDisabled={currentPage <= 0} rightDisabled={items.length < 11} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    </div>

    );
  }
}

export default Home
